import { loadHomePage } from './home.js'

function createNavbar() {
    const ul = document.createElement('ul');
    ul.className = 'navbar';
    const logoAnchor = document.createElement('a');
    const logo = document.createElement('i');
    logo.classList.add('fas', 'fa-pizza-slice', 'logo');
    logoAnchor.appendChild(logo);
    ul.appendChild(logoAnchor);

    const options = ['Contact', 'Menu', 'Home'];
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = options[i];
        li.appendChild(a);
        ul.appendChild(li);
    }

    document.querySelector('.nav').appendChild(ul);
}


function loadInitialPage() {
    createNavbar();
    loadHomePage();
}
export { loadInitialPage };