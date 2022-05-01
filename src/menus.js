import king3di from './assets/pictures/menu_items/king_dedede_pizza.webp';
import kirbmali from './assets/pictures/menu_items/kirby_marshmallow_au_lait.webp';
import kirbpcki from './assets/pictures/menu_items/kirby_pancake.webp';
import maximi from './assets/pictures/menu_items/maxim_tomato_drink.webp';
import waddlehayashii from './assets/pictures/menu_items/waddle_dee_hayashi.webp';
import waddleomuricei from './assets/pictures/menu_items/waddle_dee_omurice.webp';
import './styles/menus.css';

const mainElement = document.querySelector('div#content');
let container;

const initializeMenus = () => {
    container = document.createElement('div');
    container.classList.add("menu-container");
    mainElement.appendChild(container);

    container.appendChild(createMenuItem(
        "Dedede Pizza",
        king3di,
        "Nicolle style pizza made with pizza kiln enough to the edge apart."
    ));

    container.appendChild(createMenuItem(
        "Kirby au Lait",
        kirbmali,
        "Café au lait with Kirby marshmallows. You can choose from two marshmallows."
    ));
    container.appendChild(createMenuItem(
        "Kirby Pancake",
        kirbpcki,
        "It is a fluffy pancake expressing Kirby pink by adding a puree of Francoise to a blend of fresh cream and custard cream."
    ));
    container.appendChild(createMenuItem(
        "Maximum Tomato Drink",
        maximi,
        "It is a pleasant cold soup for hot weather, based on tomatoes and peaches. The \"M\" part was reproduced with balsamico and potatoes."
    ));
    container.appendChild(createMenuItem(
        "Waddledee Hayashi",
        waddlehayashii,
        "It is an authentic hayashi rice finished with beef fried in red wine and a demiglace sauce that combines deep richness and mellow flavor."
    ));
    container.appendChild(createMenuItem(
        "Waddledee Omurice",
        waddleomuricei,
        "Waddle Dee's omelet rice, to make you slimy. Please enjoy it for a cute sleeping face for a while. (Tottotto egg, Demi saus of rice beet, Rice)"
    ));
}

const createMenuItem = (name, image, desc) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");
    const title = document.createElement('h2');
    title.innerText = name;
    menuItem.appendChild(title);
    const picture = document.createElement('img');
    picture.src = image;
    menuItem.appendChild(picture);
    const text = document.createElement('span');
    text.innerText = desc;
    menuItem.appendChild(text);
    
    return menuItem;
}

export {
    initializeMenus,
};

