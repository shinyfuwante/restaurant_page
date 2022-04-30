import kawasaki_avatar from './assets/pictures/chef_kawasaki.webp';
import './styles/contacts.css';

const mainElement = document.querySelector('div#content');

const initializeContacts = () => {
    const portrait = document.createElement('img');
    portrait.src = kawasaki_avatar;
    mainElement.appendChild(portrait);
    const text = document.createElement('span');
    text.innerText = "Meet Chef Kawasaki, the Planet Popstar Chef himself!";
    mainElement.appendChild(text);
    const phoneNum = document.createElement('span');
    phoneNum.innerText = " 555-555-5555";
    mainElement.appendChild(phoneNum);
}




















export {
    initializeContacts,
};

