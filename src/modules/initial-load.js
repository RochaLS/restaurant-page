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
p.textContent = 'Car rides are evil shred all toilet paper and spread around the house or eat half my food and ask for more or paw at beetle and eat it before it gets away. Trip owner up in kitchen i want food stare at ceiling, and claw drapes meow and walk away i like big cats and i can not lie so try to jump onto window and fall while scratching at wall. Scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in proudly present butt to human so cough hairball on conveniently placed pants time to go zooooom, mesmerizing birds good now the other hand, too. '
}

function loadPage() {
    elementSetup();
    content.appendChild(banner);
    banner.appendChild(bannerText);
    bannerText.appendChild(mainHeader);
    bannerText.appendChild(subHeader);
    content.appendChild(description);
    description.appendChild(p);
}

export { loadPage };