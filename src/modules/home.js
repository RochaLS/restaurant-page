import { reset } from './helpers/reset.js';

const content = document.getElementById('content');
const banner = document.createElement('div');
const bannerText = document.createElement('div');
const mainHeader = document.createElement('h1');
const subHeader = document.createElement('h2');
const description = document.createElement('div');
const p = document.createElement('p');



function elementSetup() {
banner.className = 'banner';
bannerText.className = 'bannerText';
mainHeader.className = 'mainHeader';
mainHeader.textContent = `Rocha's Italian Restaurant`;
subHeader.className ='subHeader';
subHeader.textContent = 'Your Favorite Italian Food at Your Door!'
description.className = 'description';
p.textContent = `Rocha's Italian Restaurant is one of the most recognized restaurants in the whole Spain, with numerous prizes for such quality food and amazing chefs from all around the world. Come visit us in the lovely and famous neighbourhood called Vila de Gràcia close to the Gràcia subway station.`
}

function loadHomePage() {
    reset();
    elementSetup();
    content.appendChild(banner);
    banner.appendChild(bannerText);
    bannerText.appendChild(mainHeader);
    bannerText.appendChild(subHeader);
    content.appendChild(description);
    description.appendChild(p);
}

export { loadHomePage };