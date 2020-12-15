import { reset } from './helpers/reset.js';
const content = document.getElementById('content');

function menuElementSetup() {
    const header = document.createElement('h1')
    header.textContent = 'Menu';
    header.className = 'menuHeader';

    const cards = document.createElement('div');
    cards.className = 'cards';

    content.appendChild(header);

    const foods = [{
        'name': 'Caprese Salad with Pesto Sauce',
        'description': 'Healthy and tasty!',
        'img': 'https://i.ndtvimg.com/i/2017-09/caprese-salad_625x350_51506417724.jpg'
    }, {
        'name': 'Bruschetta',
        'description': 'Amazing snack!',
        'img': 'https://i.ndtvimg.com/i/2017-09/bruschetta_625x350_71506417841.jpg'
    }, {
        'name': 'Pasta Carbonara',
        'description': 'Pasta made with white sauce and bacon.',
        'img': 'https://i2.wp.com/dashofsavory.com/wp-content/uploads/2015/08/IMG_78541.jpg?fit=2000%2C1334&ssl=1'
    }, {
        'name': ' Margherita Pizza',
        'description': 'The classic!',
        'img': 'https://i.ndtvimg.com/i/2017-09/margherita-pizza_600x300_51506418004.jpg'
    }, {
        'name': 'Mushroom Risotto',
        'description': 'Delicious meal with rice and mushrooms.',
        'img': 'https://i.ndtvimg.com/i/2017-09/risotto_625x350_81506418041.jpg'
    }, {
        'name': 'Pasta Con Pomodoro E Basilico',
        'description': 'Italian homemade pasta with Penne.',
        'img': 'https://i.ndtvimg.com/i/2017-09/pasta-con-pomodoro-e-basilico_625x350_51506418092.jpg'
    },
        
]

    for (let i = 0; i < 6; i++) {
        cards.appendChild(createDishCard(foods[i].name, foods[i].description, foods[i].img));
        
    }

    content.append(cards);

}

function createDishCard(name, description, foodImage) {
    const dishCard = document.createElement('div');
    const header = document.createElement('h2')
    const subHeader = document.createElement('p');
    const text = document.createElement('div');
    header.textContent = name;
    subHeader.textContent = description;
    dishCard.className = 'card';
    dishCard.style.backgroundImage = `url(${foodImage})`;
    header.className = 'cardHeader'
    subHeader.className = 'cardSubHeader';
    text.appendChild(header);
    text.appendChild(subHeader);
    text.className = 'text'

    dishCard.appendChild(text);

    return dishCard;
}

function loadMenuPage() {
    reset();
    menuElementSetup();
}

export { loadMenuPage }