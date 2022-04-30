import king3di from './assets/pictures/menu_items/king_dedede_pizza.webp';
import kirbmali from './assets/pictures/menu_items/kirby_marshmallow_au_lait.webp';
import kirbpcki from './assets/pictures/menu_items/kirby_pancake.webp';
import maximi from './assets/pictures/menu_items/maxim_tomato_drink.webp';
import waddlehayashii from './assets/pictures/menu_items/waddle_dee_hayashi.webp';
import waddleomuricei from './assets/pictures/menu_items/waddle_dee_omurice.webp';
import './styles/menus.css';

const mainElement = document.querySelector('div#content');
let container;
//possibility, throw everything into a json and parse it from there.
const initializeMenus = () => {
    container = document.createElement('div');
    container.classList.add("menu-container");
    mainElement.appendChild(container);

    dededePizza();
    kirbAuLait();
    kirbPancake();
    maximDrink();
    hayashi();
    omurice();
}

const dededePizza = () => {
    const picture = document.createElement('img');
    picture.src = king3di;
    container.appendChild(picture);
    const text = document.createElement('span');
    text.innerText = "Nicolle style pizza made with pizza kiln enough to the edge apart.";
    container.appendChild(text);
}

const kirbAuLait = () => {
    const picture = document.createElement('img');
    picture.src = kirbmali;
    container.appendChild(picture);
    const text = document.createElement('span');
    text.innerText = "Café au lait with Kirby marshmallows. You can choose from two marshmallows.";
    container.appendChild(text);
}

const kirbPancake = () => {
    const picture = document.createElement('img');
    picture.src = kirbpcki;
    container.appendChild(picture);
    const text = document.createElement('span');
    text.innerText = "It is a fluffy pancake expressing Kirby pink by adding a puree of Francoise to a blend of fresh cream and custard cream.";
    container.appendChild(text);
}

const maximDrink = () => {
    const picture = document.createElement('img');
    picture.src = maximi;
    container.appendChild(picture);
    const text = document.createElement('span');
    text.innerText = "It is a pleasant cold soup for hot weather, based on tomatoes and peaches. The \"M\" part was reproduced with balsamico and potatoes.";
    container.appendChild(text);
}

const hayashi = () => {
    const picture = document.createElement('img');
    picture.src = waddlehayashii;
    container.appendChild(picture);
    const text = document.createElement('span');
    text.innerText = "It is an authentic hayashi rice finished with beef fried in red wine and a demiglace sauce that combines deep richness and mellow flavor.";
    container.appendChild(text);
}

const omurice = () => {
    const picture = document.createElement('img');
    picture.src = waddleomuricei;
    container.appendChild(picture);
    const text = document.createElement('span');
    text.innerText = "Waddle Dee's omelet rice, to make you slimy. Please enjoy it for a cute sleeping face for a while. (Tottotto egg, Demi saus of rice beet, Rice)";
    container.appendChild(text);
}

export {
    initializeMenus,
};

