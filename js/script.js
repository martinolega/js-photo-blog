const apiImageUrl = "https://lanciweb.github.io/demo/api/pictures/";
const row = document.querySelector(".row");
const col = document.getElementsByClassName("col");
const header = document.querySelector("header");
const body = document.querySelector("body");
const overlay = document.getElementsByClassName("overlay");

let images = [];
//id, title, date, url



axios
    .get(apiImageUrl)
    .then(function (resp) {
        images = resp.data;

        for(let i = 0; i < resp.data.length; i++)
        {
            createCol();
            const card = createCard(images[i]);
            printCard(card, col[i]);
            
            /*
            col[i].addEventListener("mouseenter", () => {
                console.log("Ciao " + images[i].date);
            });

            col[i].addEventListener("mouseleave", () => {
                console.log("Addio " + images[i].title);
            });
            */
        }
    });

function createCard(activity)
{
    const result = `
            <img class="pin" src="./img/pin.svg" alt="pin">
            <img class="image" src="${activity.url}" alt"${activity.title}">
            <p class="margin-date date">${activity.date}</p>
            <p class="activity">${activity.title.toUpperCase()}</p>
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