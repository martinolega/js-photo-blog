const apiImageUrl = "https://lanciweb.github.io/demo/api/pictures/";
const row = document.querySelector(".row");
const col = document.getElementsByClassName("col");
const header = document.querySelector("header");
const body = document.querySelector("body");
const overlay = document.getElementById("overlay");
const button = document.querySelector("button");
const overlayImage = document.getElementById("overlay-image");
const image = document.getElementsByClassName("image");
const pin = document.getElementsByClassName("pin");

let apiObjects = [];
//id, title, date, url

axios
    .get(apiImageUrl)
    .then(function (resp) {
        apiObjects = resp.data;

        for(let i = 0; i < resp.data.length; i++)
        {
            createCol();
            const card = createCard(apiObjects[i]);
            printCard(card, col[i]);

            insertEventListener(i);
        }
    });

function insertEventListener(i)
{
    const image = document.getElementsByClassName("image");

        image[i].addEventListener("click", () => {
            const overlayClasses = overlay.classList;
            overlayImage.src = image[i].src;
            overlayClasses.remove("display-none");
             overlayClasses.add("flex");
        });

        col[i].addEventListener("mouseenter", () => {
            col[i].classList.add("rotate-10");
            pin[i].classList.add("display-none");
        });

        col[i].addEventListener("mouseleave", () => {
            col[i].classList.remove("rotate-10");
            pin[i].classList.remove("display-none");
        });
}

/*
button.addEventListener("click", () => {
    const overlayClasses = overlay.classList;
    overlayClasses.remove("flex");
    overlayClasses.add("display-none");
});
*/

overlay.addEventListener("click", () => {
    const overlayClasses =overlay.classList;
    overlayClasses.remove("flex");
    overlayClasses.add("display-none");
})

function createCard(activity)
{
    console.log(activity);
    const {title, date, url} = activity;

    const result = `
            <img class="pin" src="./img/pin.svg" alt="pin">
            <img class="image" src="${url}" alt="${title}">
            <p class="margin-date date">${date}</p>
            <p class="activity">${title.toUpperCase()}</p>
            `
    
    return result;
}

function createCol()
{
    let newColumn = document.createElement("div");
    newColumn.classList.add("col");

    row.append(newColumn);
}

function printCard(card, place)
{
    place.innerHTML = card;
}