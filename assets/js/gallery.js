let imagesData = [];

document.addEventListener("DOMContentLoaded",init);

async function init(){

    await loadImages();

    renderImages();

}


async function loadImages(){
    try{
        const response = await fetch("assets/data/images.json");
        imagesData = await response.json();
    }
    catch(error){
        console.log("greska: ",error);
    }
}





function renderImages(data = imagesData) {
    const gallery = document.getElementById("galleryContainer");
    if (!gallery) return console.log("#galleryContainer element nije pronađen");

    const galleryDiv = document.createElement("div");
    galleryDiv.classList.add("container","mb-4");

    const galleryRow = document.createElement("div");
    galleryRow.classList.add("row", "justify-content-center", "align-items-center", "d-flex");

    data.forEach(cData => {
        const colData = document.createElement("div");
        colData.className = cData.colClass;

        cData.images.forEach(imgData => {
            const img = document.createElement("img");
            img.src = imgData.src;
            img.alt = imgData.alt;
            img.className = imgData.class;
            colData.appendChild(img);
        });

        galleryRow.appendChild(colData);
    });

    galleryDiv.appendChild(galleryRow);
    gallery.appendChild(galleryDiv);
}