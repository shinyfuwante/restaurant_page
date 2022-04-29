import {initializeHomePage} from './homepage';
import {initializeMenus} from './menus';
import {initializeContacts} from './contact';

const mainElement = document.querySelector('div#content');

const tabsListener = (() => {
    const buttonList = [];
    let homeButton;
    let menuButton;
    let contactButton;
    const renderButtons = () => {
        for (let i = 0; i < 3; i++) {
            const button = document.createElement('button');
            mainElement.appendChild(button);
            buttonList[i] = button;
            
        }
        configButtons();
    };

    const configButtons = () => {
        homeButton = buttonList[0];
        homeButton.innerText = "Home";
        menuButton = buttonList[1];
        menuButton.innerText = "Menu";
        contactButton = buttonList[2];
        contactButton.innerText = "Contact Us";
    }
    const listen = () => {
        homeButton.addEventListener('click', clickButton);
        menuButton.addEventListener('click', clickButton);
        contactButton.addEventListener('click', clickButton);
    }

    const clickButton = (e) => {
        //clear the page
        //initialize the correct page
        clearPage();
        renderButtons();
        const button = e.target.innerText;
        if (button == "Home") initializeHomePage();
        if (button == "Menu") initializeMenus();
        if (button == "Contact Us") initializeContacts();
        listen();
    }
    const clearPage = () => {
        while (mainElement.firstChild) {
            const element = mainElement.lastChild;
            element.remove();
        }
    }
        return {
            listen,
            renderButtons,
        };
})();


tabsListener.renderButtons();
tabsListener.listen();
initializeHomePage();
