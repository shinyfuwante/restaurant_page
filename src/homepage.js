import bannerImage from './assets/pictures/banner.webp';
import cafeDesc from './assets/descriptions/kirby_cafe_desc.json5';
import './styles/homepage.css'

const mainElement = document.querySelector('div#content');

const initializeHomePage = () => {
    const container = document.createElement('div');
    container.classList.add("homepage-container");
    mainElement.appendChild(container);

    generateBanner();
    generateHeading();
    generateDesc();
}

const generateBanner = () => {
    const banner = document.createElement('img');
    banner.src = bannerImage;
    mainElement.appendChild(banner);
    console.log('in generateBanner from homepage.js');
}

const generateHeading = () => {
    const heading = document.createElement('h1');
    heading.innerText = "Welcome to the Kirby Cafe!";
    mainElement.appendChild(heading);
    console.log('in generateHeading');
}


const generateDesc = () => {
    const desc = document.createElement('span');
    desc.innerText = cafeDesc.body;
    mainElement.appendChild(desc);
    console.log('in generateDesc');
}





















export {
    initializeHomePage,
};

