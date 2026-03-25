let boatsData = [];
let filteredBoats = [];

document.addEventListener("DOMContentLoaded",init);

async function init(){

    await loadBoats();
    loadSavedFilters();
    applyFilters();
    renderBoats();

    document.querySelectorAll(".filters").forEach(filter => {
        filter.addEventListener("change", () => {

            visibleBoats = 0;
            const row = document.getElementById("boatsRow");
            if(row) row.innerHTML = "";

            applyFilters();
            saveFilters();
            renderBoats();
        });
    });

    const inputSearch = document.querySelector("#inputSearch");

    const error = document.createElement("div");
    error.style.color = "red";
    error.style.marginTop = "5px";
    inputSearch.parentNode.appendChild(error);

    inputSearch.addEventListener("input", () => {
        const regex = /^[a-zA-Z0-9\s]*$/;
        if (!regex.test(inputSearch.value)) {
            error.textContent = "Uneti karakter nije validan!";
            return; 
        } else {
            error.textContent = "";
            visibleBoats = 0;
            const row = document.getElementById("boatsRow");
            if (row) row.innerHTML = "";
            applyFilters();
            saveFilters();
            renderBoats();
        }
    });


    document.getElementById("loadMoreBtn").addEventListener("click", () => {
        renderBoats();
    });

    const resetBtn = document.getElementById("resetFilters");

    if(resetBtn){
        resetBtn.addEventListener("click", () => {

            localStorage.removeItem("boatsFilters");

            document.getElementById("categoryFilter").value = "0";
            document.getElementById("sort").value = "asc";
            document.getElementById("inputSearch").value = "";
            document.getElementById("seats").value = "0";

            visibleBoats = 0;
            const row = document.getElementById("boatsRow");
            if(row) row.innerHTML = "";

            applyFilters();
            renderBoats();
        });
    }
    

}

async function loadBoats(){
    try{
        const response = await fetch("assets/data/boats.json");
        boatsData = await response.json();
    }
    catch(error){
        console.log("greska: ",error);
    }
}


function applyFilters() {

    const category = document.querySelector("#categoryFilter").value;
    const seats = document.querySelector("#seats").value;
    const sortOption = document.querySelector("#sort").value;
    const searchQuery = document.querySelector("#inputSearch").value.toLowerCase();

    filteredBoats = [...boatsData];

    if(category !== "0"){
        filteredBoats = filteredBoats.filter(b => b.category === category);
    }

    if(searchQuery !== ""){
        filteredBoats = filteredBoats.filter(b =>
            b.title.toLowerCase().includes(searchQuery)
        );
    }

    if(seats !== "0"){
        filteredBoats = filteredBoats.filter(b => {
            const guests = parseInt(b.details.specs[1]);
            if(seats === "1") return guests >= 8 && guests <= 12;
            if(seats === "2") return guests >= 12 && guests <= 16;
            if(seats === "3") return guests > 16;
        });
    }

    filteredBoats.sort((a,b)=>{
        if(sortOption === "asc") return a.price - b.price;
        if(sortOption === "desc") return b.price - a.price;
        if(sortOption === "nameAsc") return a.title.localeCompare(b.title);
        if(sortOption === "nameDesc") return b.title.localeCompare(a.title);
        return 0;
    });

}


let visibleBoats = 0; 
const boatsPerLoad = 6;

function renderBoats(){
    const memberDiv = document.getElementById("boatsPackages");
    const noResults = document.getElementById("noResults");

    if (!memberDiv) return console.log("#membershipsPackages element nije pronađen");
    noResults.classList.add("d-none");

    

    if(filteredBoats.length === 0){
        let packagesRow = document.getElementById("boatsRow");
        if(packagesRow) packagesRow.innerHTML = "";
        noResults.classList.remove("d-none");
        return;
    }
    else {
        noResults.classList.add("d-none");
    }
    
    let packagesRow = document.getElementById("boatsRow");
    if (!packagesRow) {
        const packagesDiv = document.createElement("div");
        packagesDiv.classList.add("container-fluid","bg-black","membership");

        packagesRow = document.createElement("div");
        packagesRow.classList.add("row","g-4","py-5");
        packagesRow.id = "boatsRow";

        packagesDiv.appendChild(packagesRow);
        memberDiv.appendChild(packagesDiv);
    }

    const nextBoats = filteredBoats.slice(visibleBoats, visibleBoats + boatsPerLoad);

    nextBoats.forEach(pkg => {
        const colPackage = document.createElement("div");
        colPackage.classList.add("col-lg-2","col-md-6");

        colPackage.style.transition="transform 0.3s ease, box-shadow 0.3s ease";

        colPackage.addEventListener("mouseenter",()=>{
            colPackage.style.transform="scale(1.05)";
            colPackage.style.boxShadow="0 10px 20px rgba(0,0,0,0.3)";
        });
        colPackage.addEventListener("mouseleave",()=>{
            colPackage.style.transform="scale(1)";
            colPackage.style.boxShadow="none";
        });

        colPackage.innerHTML = `
            <div class="card border-0 h-100 w-100">
                <img src="${pkg.image}" class="card-img-top" style="height:200px; object-fit:cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title mb-0 headings-font">${pkg.title}</h5>
                        <span class="text-blue fw-bold">$${pkg.price}</span>
                    </div>
                    <div class="d-flex justify-content-end text-blue small">${pkg.period}</div>
                    <div class="row">
                        <div class="col-6 mt-3 small text-muted">
                            ${pkg.details.specs.map(d => `<div><i class="fa-solid fa-check text-blue me-2"></i>${d}</div>`).join("")}
                        </div>
                        <div class="col-6 mt-3 small text-muted">
                            ${pkg.details.equip.map(d => `<div><i class="fa-solid fa-check text-blue me-2"></i>${d}</div>`).join("")}
                        </div>
                    </div>
                    <a href="contact.html" 
                        class="btn btn-join px-4 py-2 mt-4 headings-font text-beige d-block mx-auto"
                        data-boat-title="${pkg.title}">
                        Join Us
                    </a>
                </div>
            </div>
        `;
        
        const joinBtn = colPackage.querySelector("a.btn-join");
        if(joinBtn){
            joinBtn.addEventListener("click", (e) => {
                e.preventDefault(); 
                sessionStorage.setItem("selectedBoat", pkg.title); 
                window.location.href = "contact.html"; 
            });
        }

        packagesRow.appendChild(colPackage);
    });

    visibleBoats += boatsPerLoad;

    if(visibleBoats >= filteredBoats.length){
        document.getElementById("loadMoreBtn").style.display = "none";
    }else{
        document.getElementById("loadMoreBtn").style.display = "block";
    }

}


function saveFilters() {
    const selectedCategory = document.getElementById("categoryFilter").value;
    const sortValue = document.getElementById("sort").value;
    const searchValue = document.getElementById("inputSearch").value;
    const seatsValue = document.getElementById("seats").value;

    if(selectedCategory === "0" && seats === "0" && sortValue === "asc" && searchValue ===""){

        localStorage.removeItem("boatsFilters");
        return;
    }

    const filters = {
        category: selectedCategory,
        sort: sortValue,
        search: searchValue,
        seats: seatsValue
    };

    localStorage.setItem("boatsFilters", JSON.stringify(filters));
}

function loadSavedFilters() {
    const saved = localStorage.getItem("boatsFilters");
    if (!saved) return;

    const filters = JSON.parse(saved);

    document.getElementById("categoryFilter").value = filters.category || "0";
    document.getElementById("sort").value = filters.sort || "asc";
    document.getElementById("inputSearch").value = filters.search || "";
    document.getElementById("seats").value = filters.seats || "0";


}

