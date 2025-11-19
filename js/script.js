const apiImageUrl = "https://lanciweb.github.io/demo/api/pictures/";
const col = document.getElementsByClassName("col");

//id, title, date, url

let images = [];

axios
    .get(apiImageUrl)
    .then(function (resp) {
        images = resp.data;

        for (i = 0; i < 6; i++){
            const card = createCard(images[i]);
            printCard(card, col[i]);
        }
    });

function createCard(activity)
{
    const result = `
            <img class="pin" src="./img/pin.svg" alt="pin">
            <img src="${activity.url}" alt"${activity.title}">
            <p class="margin-date date">${activity.date}</p>
            <p class="activity">${activity.title.toUpperCase()}</p>
            `
    
    return result;
}

function printCard(card, place)
{
    place.innerHTML = card;
}