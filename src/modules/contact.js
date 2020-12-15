import { reset } from './helpers/reset.js';

const content = document.getElementById('content');

function setupElements() {
    const contactPageContent = document.createElement('div');
    contactPageContent.className = 'contactPageContent';
    const contentBox = document.createElement('div');
    contentBox.className = 'contentBox';

    const header = document.createElement('h1');
    header.textContent = 'Contact';
    header.className = 'contactHeader';
    contentBox.appendChild(header);

    const map = document.createElement('div');
    map.className = 'map';
    contentBox.appendChild(map);
    
    const telephoneNum = document.createElement('p');
    telephoneNum.textContent = '+34 (93) 123 456';
    telephoneNum.className = 'contactInfo' ;
    contentBox.appendChild(telephoneNum);

    const address = document.createElement('p');
    address.textContent = 'Address: Vila de Gràcia 1234, Barcelona, Spain';
    address.className = 'contactInfo';
    contentBox.appendChild(address);

    contactPageContent.appendChild(contentBox);
    content.appendChild(contactPageContent);
}

function initMap() {
    const location = { lat: 41.404840, lng: 2.153530 }

    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 15,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

function loadContactPage() {
    reset();
    setupElements();
    initMap()
}

export { loadContactPage };