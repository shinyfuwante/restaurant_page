import bannerImage from './assets/pictures/kirby-cafe.jpeg';
import cafeDesc from './assets/descriptions/kirby_cafe_desc.json5';

const mainElement = document.querySelector('div#content');
let container;

const initializeHomePage = () => {
    container = document.createElement('div');
    container.classList.add("homepage-container");
    mainElement.appendChild(container);
    generateHeading();
    generateBanner();
    generateDesc();
}

const generateBanner = () => {
    const banner = document.createElement('img');
    banner.src = bannerImage;
    container.appendChild(banner);
}

const generateHeading = () => {
    const heading = document.createElement('h1');
    heading.innerText = "Welcome to the Kirby Cafe!";
    container.appendChild(heading);
}


const generateDesc = () => {
    const desc = document.createElement('span');
    desc.innerText = cafeDesc.body;
    container.appendChild(desc);
}





















export {
    initializeHomePage,
};

