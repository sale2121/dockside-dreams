

document.addEventListener("DOMContentLoaded",function(){

    //cover img - about-us,contact,pricing,gallery,author

    function coverImg(){

        const covers = [
            
            {
                page:"pricing.html",
                id:"pricing",
                title:"Boats",
                bg: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("assets/img/pricing.jpg")`

            },
            {
                page:"gallery.html",
                id:"gallery",
                title:"Gallery",
                bg:`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("assets/img/gallery.jpg")`
            },
            {
                page:"contact.html",
                id:"contact",
                title:"Contact",
                bg:`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("assets/img/contact.jpg")`
            },
            {
                page:"author.html",
                id:"author",
                title:"Author",
                bg:`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("assets/img/author-cover.jpg")`
            }
        ]

        const coverCurrentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";

        covers.forEach(cover=>{
            if(cover.page.toLowerCase() === coverCurrentPage){

                const coverDiv = document.createElement("div");
                coverDiv.classList.add("container-fluid","bg-img","p-0");
                coverDiv.id=cover.id;
                coverDiv.style.backgroundImage = cover.bg;
                

                const coverH2 = document.createElement("h2");
                coverH2.classList.add("headings-font","position-absolute","cover-heading","mb-5");
                coverH2.innerText=cover.title;
                coverDiv.appendChild(coverH2);

                document.body.prepend(coverDiv);
            }

        });

    }

    coverImg();
    
    //middle-quote

    function createPageMiddleQuote(){

        const quotes = [

            
            {
                page:"pricing.html",
                quote: "Take a look at our renting packages"
            },
            {
                page:"gallery.html",
                quote: "Some of our amazing pictures"
            },
            {
                page:"index.html",
                quote: "Our team of skippers is here to elevate your sailing journey with personalized guidance and unwavering support."
            }
        ]

        const quoteCurrentPage = window.location.pathname.split("/").pop().toLowerCase() || "contact.html";

        quotes.forEach(quote=>{

            if(quote.page.toLowerCase()===quoteCurrentPage){

                const middleQuoteDiv = document.createElement("div");
                middleQuoteDiv.classList.add("container-xl","d-flex","flex-column","justify-content-center","align-items-center", "quote","text-center","my-3");
                // middleQuoteDiv.id=quote.id;
                
                const middleQuoteP = document.createElement("p");
                middleQuoteP.classList.add("quote-text","fs-4","mb-4")
                middleQuoteP.textContent = quote.quote;
                middleQuoteDiv.appendChild(middleQuoteP);

                var divQuote = document.getElementById("middle-quote");
                if(divQuote){
                    divQuote.appendChild(middleQuoteDiv);
                    
                }
            }
            
        })
    }

    createPageMiddleQuote();

    //header
    function createHeader(){
        
    var header = document.createElement("header");
    header.id = "home-nav";
    header.classList.add("container-fluid", "position-absolute","z-3");

    var rowHeader = document.createElement("div");
    rowHeader.classList.add("row","px-sm-5","px-3","py-2");
    rowHeader.id = "rowHeader";
    header.appendChild(rowHeader);

    var nav = document.createElement("nav");
    nav.classList.add("navbar","navbar-expand-lg","text-end");
    rowHeader.appendChild(nav);

    var nav2 = document.createElement("div");
    nav2.classList.add("container-fluid");
    nav.appendChild(nav2);

    var logo1 = document.createElement("a");
    logo1.classList.add("navbar-brand","text-blue","headings-font");
    logo1.href="index.html";
    nav2.appendChild(logo1);

    var logo2 = document.createElement("h1");
    logo2.id="logo";
    logo2.textContent="Dockside Dreams";
    logo1.appendChild(logo2);

    var button1 = document.createElement("button");
    button1.classList.add("navbar-toggler");
    button1.type = "button";
    button1.setAttribute("aria-label","Toggle navigation");
    button1.setAttribute("aria-expanded","false"); 
    nav2.appendChild(button1);

    var icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-bars", "text-blue", "fs-3");
    button1.appendChild(icon);

    var collapseDiv = document.createElement("div");
    collapseDiv.classList.add("collapse", "navbar-collapse", "justify-content-end");
    collapseDiv.id = "navbarNavAltMarkup";
    nav2.appendChild(collapseDiv);

    button1.addEventListener("click", () => {
        collapseDiv.classList.toggle("show");
        const expanded = button1.getAttribute("aria-expanded") === "true";
        button1.setAttribute("aria-expanded", !expanded);
    });
    

    //linkovi
    var navLinks = document.createElement("div");
    navLinks.classList.add("navbar-nav", "text-uppercase", "fs-5","ms-auto");
    collapseDiv.appendChild(navLinks);

    var page = location.pathname.split("/").pop().toLowerCase();

    var links = [
    {text: "Home", href:"index.html"},
    {text: "Boats", href:"pricing.html"},
    {text: "Gallery", href:"gallery.html"},
    // {text: "Contact", href:"contact.html"},
    {text: "Author", href:"author.html"},
    {text: "Documentation", href:"documentation.pdf"}

    ];


    links.forEach(link => {
        var a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.text;
        a.classList.add("nav-link");

        if (link.href.split("/").pop().toLowerCase() === page) {
            a.classList.add("active", "my-active");
        }

        navLinks.appendChild(a);
    });

    var allLinks = navLinks.querySelectorAll(".nav-link");

    allLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.classList.add("hovered-link");   
        });
        link.addEventListener("mouseleave", () => {
            link.classList.remove("hovered-link"); 
        });
    });

   
    button1.addEventListener("mouseenter", () => {
        button1.classList.add("hovered-btn");
    });
    button1.addEventListener("mouseleave", () => {
        button1.classList.remove("hovered-btn");
    });


    return header;


    }

    document.body.prepend(createHeader());

    //footer
    function createFooter() {

        var footer = document.createElement("div");
        footer.classList.add("footer", "container-fluid", "py-5", "px-sm-3", "px-md-5", "text-white");
        footer.style.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("assets/img/footer.jpg")`;
        footer.style.backgroundPosition = "top";      
        footer.style.backgroundRepeat = "no-repeat";
        footer.style.backgroundSize = "cover";
    
        var rowFooter = document.createElement("div");
        rowFooter.classList.add("row", "pt-5");

    
        var contact = document.createElement("div");
        contact.classList.add("col-lg-4", "col-md-12", "mb-5", "text-center", "text-md-start");

        var h4 = document.createElement("h4");
        h4.classList.add("text-blue","mb-4");
        h4.textContent = "Get In Touch";
        contact.appendChild(h4);

        var p1 = document.createElement("p");
        p1.innerHTML = `<i class="fa fa-map-marker-alt me-2"></i>Zdravka Čelara 16, Beograd`;
        contact.appendChild(p1);

        var p2 = document.createElement("p");
        p2.innerHTML = `<i class="fa fa-phone-alt me-2"></i>+381 64 000 000`;
        contact.appendChild(p2);

        var p3 = document.createElement("p");
        p3.innerHTML = `<i class="fa fa-envelope me-2"></i>aleksandar.djordjevic.31.23@ict.edu.rs`;
        contact.appendChild(p3);

        var social = document.createElement("div");
        social.classList.add("d-flex", "justify-content-center", "justify-content-md-start", "mt-4");

        var socials = [
            {href:"https://www.twitter.com", icon:"fab fa-twitter"},
            {href:"https://www.facebook.com", icon:"fab fa-facebook-f"},
            {href:"https://www.linkedin.com", icon:"fab fa-linkedin-in"},
            {href:"https://www.instagram.com", icon:"fab fa-instagram"}
        ];

        socials.forEach(s => {
            var a = document.createElement("a");
            a.href = s.href;
            a.classList.add("btn","btn-outline-light","rounded-circle","text-center","me-2","px-0");
            a.style.width = "40px";
            a.style.height = "40px";
            a.innerHTML = `<i class="${s.icon}"></i>`;
            social.appendChild(a);

        });

        contact.appendChild(social);

    
        var contactLinks = document.createElement("div");
        contactLinks.classList.add("col-lg-4", "col-md-12", "mb-5", "text-center");

        var linksTitle = document.createElement("h4");
        linksTitle.classList.add("text-blue","mb-4");
        linksTitle.textContent = "Quick Links";

        var linksDiv = document.createElement("div");
        linksDiv.classList.add("d-flex","flex-column","justify-content-start");

        var quickLinks = [
            {text:"Home", href:"index.html"},
            {text:"Pricing", href:"pricing.html"},
            {text:"Gallery", href:"gallery.html"},
            // {text:"Contact", href:"contact.html"},
            {text:"Author", href:"author.html"},
            {text:"Documentation", href:"documentation.pdf"},
            {text:"Sitemap", href:"sitemap.xml"}
        ];

        quickLinks.forEach(l => {
            var aLinks = document.createElement("a");
            aLinks.href = l.href;
            aLinks.classList.add("text-white","mb-2");
            aLinks.innerHTML = `<i class="fa fa-angle-right me-2"></i>${l.text}`;
            linksDiv.appendChild(aLinks);

            if(l.href.endsWith(".pdf")){
                aLinks.setAttribute("downolad","documentation.pdf");
            }
        });

        contactLinks.appendChild(linksTitle);
        contactLinks.appendChild(linksDiv);

        
        var workHours = document.createElement("div");
        workHours.classList.add("col-lg-4","col-md-12","mb-5","text-center","text-md-end");

        var h4Hours = document.createElement("h4");
        h4Hours.classList.add("text-blue","mb-4");
        h4Hours.textContent = "Opening Hours";
        workHours.appendChild(h4Hours);

        var h5Weekdays = document.createElement("h5");
        h5Weekdays.classList.add("text-white");
        h5Weekdays.textContent = "Monday - Friday";
        workHours.appendChild(h5Weekdays);

        var pWeekdays = document.createElement("p");
        pWeekdays.classList.add("mb-4");
        pWeekdays.textContent = "7.00 AM - 11.00 PM";
        workHours.appendChild(pWeekdays);

        var h5Weekend = document.createElement("h5");
        h5Weekend.classList.add("text-white");
        h5Weekend.textContent = "Saturday - Sunday";
        workHours.appendChild(h5Weekend);

        var pWeekend = document.createElement("p");
        pWeekend.textContent = "9.00 AM - 11.00 PM";
        workHours.appendChild(pWeekend);

        rowFooter.appendChild(contact);
        rowFooter.appendChild(contactLinks);
        rowFooter.appendChild(workHours);


        var bottomFooter = document.createElement("div");
        bottomFooter.classList.add("container","border-top","border-dark","pt-5");

        var pBottom = document.createElement("p");
        pBottom.classList.add("m-0","text-center","text-white");
        pBottom.textContent = "© Dockside Dreams Team. All Rights Reserved - ICT College. Designed by Aleksandar Djordjevic";
        bottomFooter.appendChild(pBottom);


        footer.appendChild(rowFooter);
        footer.appendChild(bottomFooter);

        var toTop = document.createElement("div");
        toTop.id="backToTop";
        toTop.innerHTML = "&#8679;";

        window.addEventListener("scroll",function(){
            if(this.window.scrollY>200){
                toTop.style.display="block";
            }
            else{
                toTop.style.display="none";
            }
        });
        toTop.addEventListener("click",function(){
            window.scrollTo({
                top:0,
                behavior:"smooth"
            });
        });

        toTop.addEventListener("mouseenter", function () {
            toTop.style.backgroundColor = "#444";
        });

        toTop.addEventListener("mouseleave", function () {
            toTop.style.backgroundColor = "#000";
        });

        footer.appendChild(toTop);
        return footer;
        
    }
    document.getElementById("footerContainer").appendChild(createFooter());


    //forma
    function createForm(){

    // Div za formu
    var divForm = document.createElement("div");
    divForm.classList.add("col-lg-6", "col-11", "mx-auto");


    var form = document.createElement("form");
    form.setAttribute("action", "#");
    form.setAttribute("method", "post");
    form.setAttribute("name", "form1");
    form.setAttribute("id", "form");

    // Prvi red 
    var row1 = document.createElement("div");
    row1.classList.add("row", "justify-content-center", "align-items-center");


    var colFName = document.createElement("div");
    colFName.classList.add("col-md-6", "col-12");
    var inputFName = document.createElement("input");
    inputFName.setAttribute("type", "text");
    inputFName.setAttribute("id", "fName");
    inputFName.setAttribute("name", "fName");
    inputFName.classList.add("form-control", "p-3");
    inputFName.setAttribute("placeholder", "First name: ");
    colFName.appendChild(inputFName);
    //span FName
    var spanFName = document.createElement("span");
    spanFName.id = "fNameError";
    spanFName.style.color = "red";
    spanFName.style.fontSize = "0.9rem";
    colFName.appendChild(spanFName);


    var colLName = document.createElement("div");
    colLName.classList.add("col-md-6", "col-12", "my-md-0", "my-3");
    var inputLName = document.createElement("input");
    inputLName.setAttribute("type", "text");
    inputLName.setAttribute("id", "lName");
    inputLName.setAttribute("name", "lName");
    inputLName.classList.add("form-control", "p-3");
    inputLName.setAttribute("placeholder", "Last name: ");
    colLName.appendChild(inputLName);
    //span LName
    var spanLName = document.createElement("span");
    spanLName.id = "lNameError";
    spanLName.style.color = "red";
    spanLName.style.fontSize = "0.9rem";
    colLName.appendChild(spanLName);

    row1.appendChild(colFName);
    row1.appendChild(colLName);
    form.appendChild(row1);

    // Drugi red 
    var row2 = document.createElement("div");
    row2.classList.add("row", "justify-content-center", "align-items-center", "mt-md-3", "mt-0");
    var colEmail = document.createElement("div");
    colEmail.classList.add("col-12");
    var inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "email");
    inputEmail.setAttribute("name", "email");
    inputEmail.classList.add("form-control", "p-3");
    inputEmail.setAttribute("placeholder", "Email: ");
    colEmail.appendChild(inputEmail);
    //span Email
    var spanEmail = document.createElement("span");
    spanEmail.id = "emailError";
    spanEmail.style.color = "red";
    spanEmail.style.fontSize = "0.9rem";
    colEmail.appendChild(spanEmail);

    row2.appendChild(colEmail);
    form.appendChild(row2);

    //  Treći red
    var row3 = document.createElement("div");
    row3.classList.add("row", "justify-content-center", "align-items-center", "mt-md-3", "mt-0");
    var colDropdown = document.createElement("div");
    colDropdown.classList.add("col-12", "mt-3", "mt-md-0");
    colDropdown.setAttribute("id", "ddlRentals"); 
    row3.appendChild(colDropdown);
    form.appendChild(row3);


    var nizRentals = new Array("Solo Sailor","Family Fun","Luxury charter");
    var nizValueRentals = new Array("1","2","3");

    var tagSelect = document.createElement("select");
    tagSelect.setAttribute("id","rental");
    tagSelect.setAttribute("name","rental");
    tagSelect.classList.add("form-control","p-3");

    var tagOptionPrvi = document.createElement("option");
    tagOptionPrvi.setAttribute("value","0");
    var sadrzajPrvogOptionTaga = document.createTextNode("Packages");

    tagOptionPrvi.appendChild(sadrzajPrvogOptionTaga);
    tagSelect.appendChild(tagOptionPrvi);

    for(let i=0;i<nizRentals.length;i++){
        var tagOptionOstali = document.createElement("option");
        tagOptionOstali.setAttribute("value",nizValueRentals[i]);

        var sadrzajOstalihOptionTagova = document.createTextNode(nizRentals[i]);
        
        tagOptionOstali.appendChild(sadrzajOstalihOptionTagova);
        tagSelect.appendChild(tagOptionOstali);
    }
    
    colDropdown.appendChild(tagSelect);

    //span Rentals
    var spanRental = document.createElement("span");
    spanRental.id = "rentalError";
    spanRental.style.color = "red";
    spanRental.style.fontSize = "0.9rem";
    colDropdown.appendChild(spanRental);

    var rowBoat = document.createElement("div");
    rowBoat.classList.add("row", "align-items-center", "mt-md-3", "mt-0");
    var boatDiv = document.createElement("div");
    boatDiv.classList.add("col-9", "mt-3", "mt-md-0");
    var inputBoat = document.createElement("input");
    inputBoat.id = "boatTitle";
    inputBoat.name = "boatTitle";
    inputBoat.setAttribute("placeholder","Odabrani brod ce ovde biti upisan");
    inputBoat.setAttribute("readonly", "true");
    inputBoat.classList.add("form-control", "p-3");
    boatDiv.appendChild(inputBoat);
    rowBoat.appendChild(boatDiv);

    const selectedBoat = sessionStorage.getItem("selectedBoat");
    if(selectedBoat){
        inputBoat.value = selectedBoat;
        sessionStorage.removeItem("selectedBoat"); 
    }

    form.appendChild(rowBoat);

    //Cetvrti red: 

    var row4 = document.createElement("div");
    row4.classList.add("row", "justify-content-center", "align-items-center", "mt-md-3", "mt-0");

    var colTelefon = document.createElement("div");
    colTelefon.classList.add("col-md-6","col-12");
    var inputPhone = document.createElement("input");
    inputPhone.setAttribute("type", "tel"); 
    inputPhone.setAttribute("id", "phone");
    inputPhone.setAttribute("name", "phone");
    inputPhone.setAttribute("placeholder", "Phone number");
    inputPhone.classList.add("form-control", "p-3");
    colTelefon.appendChild(inputPhone);
    //span Phone
    var spanPhone = document.createElement("span");
    spanPhone.id = "phoneError";
    spanPhone.style.color = "red";
    spanPhone.style.fontSize = "0.9rem";
    colTelefon.appendChild(spanPhone);

    var colDatum = document.createElement("div");
    colDatum.classList.add("col-md-6", "col-12", "mt-3", "mt-md-0");
    var inputDate = document.createElement("input");
    inputDate.setAttribute("type", "date"); 
    inputDate.setAttribute("id", "rentalDate");
    inputDate.setAttribute("name", "rentalDate");
    inputDate.classList.add("form-control", "p-3");
    colDatum.appendChild(inputDate); 
    //span Datum
    var spanDate = document.createElement("span");
    spanDate.id = "dateError";
    spanDate.style.color = "red";
    spanDate.style.fontSize = "0.9rem";
    colDatum.appendChild(spanDate);

    row4.appendChild(colTelefon);
    row4.appendChild(colDatum);

    form.appendChild(row4);

    //potvrda
    var row6 = document.createElement("div");
    row6.classList.add("row", "mt-md-3", "mt-0");
    var checkField = document.createElement("div");
    checkField.classList.add("col-md-6", "col-12");

    var formCheck = document.createElement("div");
    formCheck.classList.add("form-check");

    var cbField = document.createElement("input");
    cbField.type = "checkbox";
    cbField.id = "check";
    cbField.classList.add("form-check-input");

    var label = document.createElement("label");
    label.setAttribute("for", "check");
    label.classList.add("form-check-label");
    label.innerText = "Agreed";

    formCheck.appendChild(cbField);
    formCheck.appendChild(label);
    checkField.appendChild(formCheck);
    row6.appendChild(checkField);
    //provera checkpolja
    var spanCheckField = document.createElement("span");
    spanCheckField.id = "checkError";
    spanCheckField.style.color = "red";
    spanCheckField.style.fontSize = "0.9rem";
    checkField.appendChild(spanCheckField);

    form.appendChild(row6);

    // Peti red:  
    var row5 = document.createElement("div");
    row5.classList.add("row", "justify-content-center", "align-items-center", "mt-md-3", "mt-0");
    var colButton = document.createElement("div");
    colButton.classList.add("col-12", "mt-3", "mt-md-0", "text-md-start", "text-center");

    var inputSubmit = document.createElement("input");
    inputSubmit.setAttribute("type", "button");
    inputSubmit.setAttribute("id", "submit1");
    inputSubmit.setAttribute("name", "submit1");
    inputSubmit.classList.add("btn", "px-5", "py-2", "mb-xl-4", "mb-2", "headings-font", "fs-4", "text-light", "bg-darkBlue");
    inputSubmit.setAttribute("value", "Send!");

    inputSubmit.addEventListener("mouseenter", () => {
        inputSubmit.style.backgroundColor = "#5A72A0"; 
        inputSubmit.style.color = "#fff";              
    });

    inputSubmit.addEventListener("mouseleave", () => {
        inputSubmit.style.backgroundColor = "";       
        inputSubmit.style.color = "";                  
    });

    colButton.appendChild(inputSubmit);
    //span Submit
    var spanSubmit = document.createElement("span");
    spanSubmit.id = "success";
    spanSubmit.style.color = "green";
    spanSubmit.style.fontSize = "0.9rem";
    colButton.appendChild(spanSubmit);

    row5.appendChild(colButton);
    form.appendChild(row5);

    // Dodavanje forme u glavni div
    divForm.appendChild(form);
    div1.appendChild(divForm);

    
    

    return div1;
    }
    var formContainer = document.getElementById("formContainer");
    if (formContainer) {
        formContainer.appendChild(createForm());
    }
    

    const form = document.getElementById("form");
    const submitBtn = document.getElementById("submit1")

    //validacija forme

    if(form && submitBtn){

        submitBtn.addEventListener("click",function(e){
            e.preventDefault();

            var objIme,objPrezime,objEmail,objBroj,objPaket,objDatum, greske;
            greske = false;

            objIme = document.querySelector("#fName");
            objPrezime = document.querySelector("#lName");
            objEmail = document.querySelector("#email");
            objBroj = document.querySelector("#phone");
            objPaket = document.querySelector("#rental");
            objDatum = document.querySelector("#rentalDate");
            objAgreed = document.querySelector("#check");

            //regeksi
            const nameRegex = /^[A-Za-z\s]{3,20}$/;
            const phoneRegex = /^[0-9]{6,15}$/;
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

            //proveraIme
            if (!nameRegex.test(objIme.value)) {
                document.getElementById("fNameError").textContent = "Ime može sadržati samo slova i mora imati 3-20 karaktera";
                greske = true;
            } else {
                document.getElementById("fNameError").textContent = "";
            }

            //proveraPrezime
            if (!nameRegex.test(objPrezime.value)) {
                document.getElementById("lNameError").textContent = "Prezime može sadržati samo slova i mora imati 3-20 karaktera";
                greske = true;
            } else {
                document.getElementById("lNameError").textContent = "";
            }

            //proveraEmail
            if (!emailRegex.test(objEmail.value)) {
                document.getElementById("emailError").textContent = "Unesite validan email";
                greske = true;
            } else {
                document.getElementById("emailError").textContent = "";
            }

            //proveraTelefon
            if (!phoneRegex.test(objBroj.value)) {
                document.getElementById("phoneError").textContent = "Telefon mora imati 6-15 brojeva";
                greske = true;
            } else {
                document.getElementById("phoneError").textContent = "";
            }

            // proveraPaket
            if(objPaket.value === "0"){
                document.getElementById("rentalError").textContent = "Molimo izaberite paket";
                greske = true;
            } else {
                document.getElementById("rentalError").textContent = "";
            }

            //proveaDatum
            if(objDatum.value === ""){
                document.getElementById("dateError").textContent = "Molimo izaberite datum";
                greske = true;
            } else {
                const izabraniDatum = new Date(objDatum.value);
                const danas = new Date();
                danas.setHours(0, 0, 0, 0);

                if (izabraniDatum < danas) {
                    document.getElementById("dateError").textContent =
                        "Datum ne može biti u prošlosti";
                    greske = true;
                } else {
                    document.getElementById("dateError").textContent = "";
                }

            }

            //checkfield provera
            if(!objAgreed.checked){
                document.getElementById("checkError").textContent = "Potvrdite uslove koriscenja!";
                greske=true;
            }
            else{
                document.getElementById("checkError").textContent = "";

            }

            if(!greske){

                document.getElementById("success").textContent = "Uspesno popunjena forma";
                const formReset = document.getElementById("form");
                formReset.reset();
                const selectedBoat = sessionStorage.getItem("selectedBoat");
                if(selectedBoat){
                    inputBoat.value = selectedBoat;
                }

                setTimeout(() => {
                    document.getElementById("success").textContent = "";
                }, 5000);
            }

        });
    }


    function imagesSize(){
        const images = document.querySelectorAll(".gallery img");
        images.forEach(img => {
            img.addEventListener("mouseenter", function () {
                this.style.borderRadius = "0";
                this.style.transform = "scale(1.05)";
            });

            img.addEventListener("mouseleave", function () {
                this.style.borderRadius = "20px";
                this.style.transform = "scale(1)";
            });
        });
    }
    imagesSize();


    //imgWrap

    function createImgWrap(){
        
        var imgContainer = document.createElement("div");
        imgContainer.id = "imgCon";
        imgContainer.classList.add("container-fluid");

        var imgRow = document.createElement("div");
        imgRow.classList.add("row","p-0");

        var images1 = [
            "assets/img/wrap1.jpg",
            "assets/img/wrap2.jpg",
            "assets/img/wrap3.jpg",
            "assets/img/wrap4.jpg",
        ];

        var imgTexts1 = [
            "Sailing is not just a sport, it's a way of life. It teaches patience, resilience, and the beauty of being one with nature.",
            "Sailing is more than just a pastime; it`s a journey of self-discovery. Each voyage challenges you to navigate not only the seas but also the depths of your own resilience and resourcefulness.",
            "There is nothing more enticing, disenchanting, and enslaving than the life at sea. It teaches you to appreciate the vastness of the ocean and the smallness of our place within it.<br>Joseph Conrad",
            "The art of sailing is about balancing the forces of nature with the skills of the sailor. It’s a dance between the wind, the waves, and the boat, teaching us harmony, patience, and the pursuit of freedom."
        ];

        for(var i=0;i<images1.length;i++){

            var imgCol1 = document.createElement("div");
            imgCol1.classList.add(
                "col-12",
                "col-xl-3",
                "col-lg-3",
                "col-md-6",
                "col-sm-6",
                "p-0",
                "position-relative"
            );

            var img1 = document.createElement("img");
            img1.classList.add(
                "d-block",
                "img-fluid",
                "hover-img"
            );
            img1.src = images1[i];
            img1.alt = "Boat";

            img1.addEventListener("mouseenter",function(){
                this.style.filter = "grayscale(0%)";
            });
            img1.addEventListener("mouseleave",function(){
                this.style.filter = "grayscale(100%)";
            });
            
            var imgTextDiv1 = document.createElement("div");
            imgTextDiv1.classList.add(
                "container-fluid",
                "position-absolute",
                "top-0",
                "start-0",
                "hover-block",
                "text-beige",
                "text-center",
                "d-flex",
                "justify-content-center",
                "align-items-center"
            );

            imgTextDiv1.innerHTML = imgTexts1[i];

            //dodavanje elemenata
            imgCol1.appendChild(img1);
            imgCol1.appendChild(imgTextDiv1);
            imgRow.appendChild(imgCol1);

            
        }

        imgContainer.appendChild(imgRow);
        return imgContainer;

    }
    var imgWrapDiv = document.getElementById("imgWrap");
    if(imgWrapDiv){
        imgWrapDiv.appendChild(createImgWrap());
    }


    //contact - info - phone , address , mail

    function createContactInfo(){
        
        const quoteContactDiv = document.createElement("div");
        quoteContactDiv.classList.add("container-xl","d-flex","flex-column","justify-content-center", "align-items-center", "quote","text-center");
        quoteContactDiv.innerHTML = `
            <p class="quote-text fs-4 my-5">Contact us today for inquiries or to book a trial rental, and let our professional team create an extraordinary boating experience designed exclusively for you.</p>
        `;
        
        var quoteDiv = document.getElementById("contactQuote");
        if(quoteDiv){
            quoteDiv.appendChild(quoteContactDiv);
        }

        var infoDiv = document.createElement("div");
        infoDiv.classList.add("container-fluid");
        var infoRow = document.createElement("div");
        infoRow.classList.add("row","justify-content-center");

        var contactData = [
            {
                icon: "fa-solid fa-phone",
                title: "Phone",
                text: "+381 64 000 000"
            },
            {
                icon: "fa-solid fa-location-dot",
                title: "Address",
                text: "Zdravka Čelara 16"
            },
            {
                icon: "fa-solid fa-envelope",
                title: "Mail",
                text: "dockside.dreams@gmail.com"
            }
        ];

        contactData.forEach(function(item){
            var colDiv = document.createElement("div");
            colDiv.classList.add("col-md-3","col-sm-7","col-10","my-md-5","mt-3");

            var cardDiv = document.createElement("div");
            cardDiv.classList.add("card","py-md-3","py-5");

            var cardBodyDiv = document.createElement("div");
            cardBodyDiv.classList.add("card-body","text-center");

            var ikonicaSpan = document.createElement("span");
            var ikonica = document.createElement("i");
            ikonica.className = item.icon + " text-blue fs-1"; // dodajemo text-blue i fs-1
            ikonicaSpan.appendChild(ikonica);

            var h2Naslov = document.createElement("h2");
            h2Naslov.classList.add("fs-4","mt-4");
            h2Naslov.textContent = item.title;

            var pasus = document.createElement("p");
            pasus.classList.add("fw-bold","text-darkBlue","mb-4");
            pasus.innerHTML = item.text;

            cardBodyDiv.appendChild(ikonicaSpan);
            cardBodyDiv.appendChild(h2Naslov);
            cardBodyDiv.appendChild(pasus);

            cardDiv.appendChild(cardBodyDiv);
            colDiv.appendChild(cardDiv);
            
            infoRow.appendChild(colDiv);
        });
        infoDiv.appendChild(infoRow);
        return infoDiv;
    }
    

    var contactInfoDiv = document.getElementById("contactInfo");
    if(contactInfoDiv){
        contactInfoDiv.appendChild(createContactInfo());
    }


    //offers - index.html - read more

    function createWinRM(id, title, htmlContent) {
    var winRM = document.createElement("div");
    winRM.classList.add("modal", "fade");
    winRM.id = id;
    winRM.tabIndex = -1;

    winRM.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    ${htmlContent}
                </div>
            </div>
        </div>
    `;
    return winRM;
}

    // Dodavanje modala u body
    document.body.appendChild(createWinRM(
    "modal1",
    "Solo Adventures Await",
    `
        <p>Experience the thrill of independence as you navigate the open waters on your own. Renting a boat alone allows you to explore at your own pace, discover hidden coves, and create a personalized adventure. Whether you're an experienced sailor or just looking for some solo time on the water, our fleet of well-maintained boats is ready for your command.
        <hr/>
        Solo boat rental offers unparalleled freedom and flexibility. You decide where to go and how long to stay, creating a unique itinerary that suits your interests and schedule. Spend a day fishing in a secluded bay, or simply drift and enjoy the tranquility of the sea. The choice is yours, and the possibilities are endless.
        <hr/>
        Taking the helm of your own boat is not just about the destination; it's also about the journey. Feel the sense of accomplishment as you master the art of navigation and boat handling. Whether you’re refining your sailing skills or just embracing the challenge, solo renting provides a fulfilling and empowering experience on the water.</p>
    `
    ));

    document.body.appendChild(createWinRM(
    "modal2",
    "Rent a Boat with a Skipper",
    `
        <p class="text-darkGrey">Relax and enjoy the ride while our professional skippers take the helm. Renting a boat with a skipper or guide ensures a stress-free and informative experience, allowing you to sit back and soak in the sights. Learn about local landmarks, find the best fishing spots, and gain expert insights on navigating the waters. Perfect for first-timers or those seeking a more laid-back adventure.
        <hr/>
        Our experienced skippers bring invaluable local knowledge to your boating adventure. 
        Renting with a skipper provides an added layer of safety and convenience. You can relax kThey can take you to the best hidden gems, from pristine beaches to secret snorkeling spots. Their expertise ensures you make the most of your time on the water, discovering places and experiences you might miss on your own.
        <hr/>nowing that a professional is handling the boat, allowing you to fully enjoy your time on the water. Whether you're new to boating or just prefer a guided experience, our skippers ensure a smooth, enjoyable, and worry-free journey.</p>        
    `
    ));

    // Hover efekti na dugmadima
    document.querySelectorAll("#soloCaptain button, #guidedExploration button").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.backgroundColor = "#5A72A0"; 
            btn.style.color = "#fff";              
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.backgroundColor = "";       
            btn.style.color = "";                  
        });
    });
   
    

    //slide panel - index.html

    function createSlidePanel(){

        const carouselDiv = document.createElement("div");
        carouselDiv.classList.add("carousel","slide");
        carouselDiv.id = "carouselExampleCaptions";
        carouselDiv.setAttribute("data-bs-ride", "carousel");
        carouselDiv.setAttribute("data-bs-interval", "3000");
        carouselDiv.setAttribute("data-bs-pause", "hover");
        const carouselInner = document.createElement("div");
        carouselInner.classList.add("carousel-inner");

        const carouselItems = [
            {
                img: "assets/img/slider1.jpg",
                alt: "Boat 1",
                title: "Discover Your Perfect Boat",
                titleClass:["pb-lg-0","pb-3","fs-3"],
                text: "Set sail on an unforgettable adventure with our wide selection of boats, from sleek sailboats to luxurious yachts. Make lasting memories on the open waters with our top-notch rental services.",
                textClass:["pb-xl-5","pb-4","d-none","d-lg-inline-block"],
                btnText: "Visit Us!",
                btnLink: "pricing.html",
                textColor: "text-beige",
                active: true
            },
            {
                img: "assets/img/slider2.jpg",
                alt: "Boat 2",
                title: "Book Your Dream Boat in Minutes",
                titleClass:["headings-font","fs-1","mb-3","text-darkGrey"],
                text: "Planning your boating adventure should be enjoyable. Our user-friendly booking system lets you reserve your ideal boat quickly, with transparent pricing and 24/7 support.",
                textClass: ["pb-5"],
                textColor: "text-darkGrey",
                active: false
            },
            {
                img: "assets/img/slider3.jpg",
                alt: "Boat 3",
                title: "Sail with Confidence",
                titleClass:["fs-1","mb-3","headings-font","text-darkGrey"],
                text: "Your safety is our priority. All our boats are regularly inspected and equipped with essential safety gear. Enjoy peace of mind and a worry-free boating experience.",
                textClass:["pb-5"],
                textColor: "text-darkGrey",
                active: false
            }
        ];

        carouselItems.forEach(item=>{

            var carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");

            if(item.active){
                carouselItem.classList.add("active");
            }

            const carouselImg = document.createElement("img");
            carouselImg.classList.add("d-block","w-100");
            carouselImg.alt = item.alt;
            carouselImg.src = item.img;

            const carouselCaption = document.createElement("div");
            carouselCaption.classList.add("carousel-caption","d-none","d-md-block","pb-5");
            carouselCaption.classList.add(item.textColor);

            const h2 = document.createElement("h2");
            h2.innerText = item.title;
            h2.classList.add(...item.titleClass);

            const p = document.createElement("p");
            p.innerText = item.text;
            p.classList.add(...item.textClass);

            carouselCaption.appendChild(h2);
            carouselCaption.appendChild(p);

            if (item.btnText && item.btnLink) {
                const aJoinUs = document.createElement("a");
                aJoinUs.href = item.btnLink;
                aJoinUs.setAttribute("role","button");
                aJoinUs.innerText = item.btnText;
                aJoinUs.classList.add("btn","px-5","py-2","mb-xl-4","mb-2","headings-font","fs-4");
                carouselCaption.appendChild(aJoinUs);
            
                aJoinUs.addEventListener("mouseenter",()=>{
                    aJoinUs.style.backgroundColor = "#5A72A0";
                    aJoinUs.style.color = "#fff";
                });
                aJoinUs.addEventListener("mouseleave",()=>{
                    aJoinUs.style.backgroundColor = "";
                    aJoinUs.style.color = "";
                });
            }

            carouselItem.appendChild(carouselImg);
            carouselItem.appendChild(carouselCaption);
            carouselInner.appendChild(carouselItem);
        });
        carouselDiv.appendChild(carouselInner);

        const btnPrev = document.createElement("button");
        btnPrev.classList.add("carousel-control-prev");
        btnPrev.type = "button";
        btnPrev.setAttribute("data-bs-target", "#carouselExampleCaptions");
        btnPrev.setAttribute("data-bs-slide", "prev");

        btnPrev.innerHTML = `
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        `;

        const btnNext = document.createElement("button");
        btnNext.classList.add("carousel-control-next");
        btnNext.type = "button";
        btnNext.setAttribute("data-bs-target", "#carouselExampleCaptions");
        btnNext.setAttribute("data-bs-slide", "next");

        btnNext.innerHTML = `
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
        `;

        carouselDiv.appendChild(btnPrev);
        carouselDiv.appendChild(btnNext);

        return carouselDiv;
    }

    var slidePanelDiv = document.getElementById("slidePanel");
    if(slidePanelDiv){
        slidePanelDiv.appendChild(createSlidePanel());

        
    }


});









