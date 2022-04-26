import bannerImage from './banner.webp';
import cafeDesc from './kirby_cafe_desc.json5';

const mainElement = document.querySelector('div#content');

const initializeHomePage = () => {
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

