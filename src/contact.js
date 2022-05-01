import kawasaki_avatar from './assets/pictures/chef_kawasaki.webp';
import banner from './assets/pictures/banner.webp';

const mainElement = document.querySelector('div#content');
let container;

const initializeContacts = () => {
    container = document.createElement('div');
    container.classList.add("contact-container");
    mainElement.appendChild(container);

    const boyos = document.createElement('img');
    boyos.src = banner;
    container.append(boyos);

    const portrait = document.createElement('img');
    portrait.src = kawasaki_avatar;
    portrait.classList.add('kawasaki');
    container.appendChild(portrait);
    const text = document.createElement('span');
    text.innerText = "Meet Chef Kawasaki, the Planet Popstar Chef himself!";
    container.appendChild(text);
    const phoneNum = document.createElement('span');
    phoneNum.innerText = " 555-555-5555";
    container.appendChild(phoneNum);
    const email = document.createElement('span');
    email.innerText = "PopStarChefKawasaki@kirbycafe.jp";
    container.appendChild(email);
}




















export {
    initializeContacts,
};

