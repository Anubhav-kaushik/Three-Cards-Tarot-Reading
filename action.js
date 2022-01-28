/* spread choice selection */
const spreadData = {
    'past-present-future': 'This spread can help you recall significant moments from the past, connect these to your current situation, and see where you’re headed so you can course correct if needed and find the best way to glow up.',

    'context-focus-outcome': "If you're struggling to understand your current situation, this tarot spread can untangle things for you. These cards show you what lens to look through, the most important thing to focus on, and where your path will likely lead.",

    'situation-obstacle-advice': "Are you unclear on what's driving you right now? This tarot spread will help you identify the most important situation at present. It will then illuminate the obstacles in your path forward and provide advice on how you can best overcome them."
}

let selectedSpread;
function selectChoice(choiceElement) {
    /*
        This function select the choice element.
        choiceElement: The choice element you want to select.
    */
    const selectedChoices = document.querySelectorAll('button[data-choosen="true"]');
    for (let selectedChoice of selectedChoices) {
        selectedChoice.dataset.choosen = false;
    }
    choiceElement.dataset.choosen = true;
}

function spreadDescription(spread) {
    const description = document.querySelector('.tarot--spread-description');
    const para = document.createElement('p');
    para.innerHTML = spreadData[spread];
    description.innerHTML = '';
    description.append(para);
}

function disableSubmitButton() {
    const submitButton = document.querySelector('#submit-btn');
    submitButton.disabled = true;
}

function enableSubmitButton() {
    const submitButton = document.querySelector('#submit-btn');
    submitButton.disabled = false;
}

function resetSpread(allChoices) {
    for (let card of allChoices) {
        card.dataset.choosen = "false";
    }
}

function resetDescription() {
    const description = document.querySelector('.tarot--spread-description');
    description.innerHTML = '';
    selectedSpread = undefined;
}

const allChoices = document.querySelectorAll('.tarot--spread-choices>.tarot--btn');

if (selectedSpread == undefined) {
    disableSubmitButton();
}

for (let choice of allChoices) {
    choice.addEventListener('click', function () {
        selectChoice(this);
        selectedSpread = this.dataset.spread;
        spreadDescription(selectedSpread);
        enableSubmitButton();
    });
}

/* Add deck on the board and shuffle them */

// TODO: run this only when the second page visible
const cardContainerClass = '.tarot--card-pack';
const cardClass = '.tarot--card';

function createCard(cardId) {
    const card = document.createElement('div');
    card.classList.add('tarot--card');
    card.dataset.cardNum = cardId;
    card.dataset.choosen = false;
    return card;
}

function addCard2Board(card) {
    const container = document.querySelector(cardContainerClass);
    container.append(card);
}

function createCards(howMany) {
    /*
        This function create given numbers of cards and add them to the Card Container.
        howMany: How many cards you want to add
    */

    for (let i=0; i<howMany; i++) {
        let card = createCard(i+1)
        addCard2Board(card);
    }
}

function interval(a, b) {
    temp = [];
    for (let i = a; i <= b; i++) {
        temp.push(i);
    }
    return temp;
}

function shuffle(nums) {
    let shuffledNums = []
    let usedIndexes = []
    for (let i=0; i<nums.length; i++) {
        let randomIndex = Math.floor(Math.random() * nums.length);
        while (usedIndexes.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * nums.length);
        }
        shuffledNums.push(nums[randomIndex]);
        usedIndexes.push(randomIndex);
    }
    return shuffledNums;
}

function shuffleCardsNum() {
    /*
        This function shuffle the cards number.
    */

    const cards = document.querySelectorAll(cardClass);
    const cardsNum = interval(1, cards.length);
    const shuffledCardsNum = shuffle(cardsNum);
    
    for (let i=0; i<cards.length; i++) {
        cards[i].dataset.cardNum = shuffledCardsNum[i];
    }
}

function moveUp(cardDataId, howMuch) {
    /*
        This function move the card with given data-id up by given howMuch.
        cardDataId: The data-id of the card you want to move up.
        howMuch: How much you want to move up.
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const card = document.querySelector(`[data-card-num="${cardDataId}"]`);
    const cardsContainerHeight = cardsContainer.offsetHeight;
    const cardHeight = card.offsetHeight;
    const centerY = cardsContainerHeight / 2;

    card.style.top = `${centerY - cardHeight/2 - howMuch}px`;
    card.dataset.choosen = true;
}

function numCardsChoosed() {
    const cards = document.querySelectorAll(cardClass);
    let num = 0;
    for (let card of cards) {
        if (card.dataset.choosen == 'true') {
            num += 1;
        }
    }
    return num;
}

async function spreadCards() {
    /*
        This function spread the deck of card on to the board
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const cards = document.querySelectorAll(cardClass);
    const cardContainerWidth = cardsContainer.offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    const increament = (cardContainerWidth-cardWidth)/(cards.length-1);
    let initialPos = 0;
    for (let card of cards) {
        card.style.left = `${initialPos}px`;
        initialPos += increament;
    }
}

async function move2center(oneByone=false, delay=0.15, splitHalf=false, reverse=false, moveBothEnds=false) {
    /*
        Move cards to the center of the board.
        Parameters:
            oneByone: move the card to the center in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the center
            reverse: Move the card in reverse order
            moveBothEnds: Move cards from both the ends towards the center. Note: Reverse will not work if it is true.
    */

    const cardsContainer = document.querySelector(cardContainerClass);
    const centerX = cardsContainer.offsetWidth / 2;
    const cards = document.querySelectorAll(cardClass);

    let maxRange = cards.length;
    if (moveBothEnds) {
        maxRange = Math.ceil(cards.length/2);
    }

    let count = 0;
    for (let i=0; i<maxRange; i++) {
        let card = cards[i];
        if (reverse && !moveBothEnds) {
            card = cards[cards.length-i-1];
        }

        count++;
        card.style.left = `${centerX - card.offsetWidth/2}px`;

        if (moveBothEnds) {
            cards[cards.length-i-1].style.left = `${centerX - cards[cards.length-i-1].offsetWidth/2}px`;
        }

        if (oneByone) {
            await sleep(delay);
        }

        if (splitHalf && count >= cards.length/2) {
            break;
        }
    }
}

async function move2leftMost(oneByone=false, delay=0.15, splitHalf=false, reverse=false) {
    /*
        Move cards to the left most of the board.
        Parameters:
            oneByone: move the card to the left most in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the left most
            reverse: Move the card in reverse order
    */
    const cards = document.querySelectorAll(cardClass);

    let count = 0;
    for (let i=0; i<cards.length; i++) {
        let card = cards[i];
        if (reverse) {
            card = cards[cards.length-i-1];
        }

        count++;
        card.style.left = `${0}px`;
        if (oneByone) {
            await sleep(delay);
        }

        if (splitHalf && count >= cards.length/2) {
            break;
        }
    }
}

async function move2left(howMuch, oneByone=false, delay=0.15, splitHalf=false, reverse=false) {
    /*
        Move cards to the left of the board.
        Parameters:
            howMuch: How much you want to move the card to the left from the center. This should be a string with amount and unit (example: '20%' or '20px' or '20rem').
            oneByone: move the card to the left in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the left
            reverse: Move the card in reverse order
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const centerX = cardsContainer.offsetWidth / 2;

    const cards = document.querySelectorAll(cardClass);

    let count = 0;
    for (let i=0; i<cards.length; i++) {
        let card = cards[i];
        if (reverse) {
            card = cards[cards.length-i-1];
        }

        count++;
        card.style.left = `calc(${centerX - card.offsetWidth/2}px - ${howMuch})`;
        
        if (oneByone) {
            await sleep(delay);
        }

        if (splitHalf && count >= cards.length/2) {
            break;
        }
    }
}

async function move2rightMost(oneByone=false, delay=0.15, splitHalf=false, reverse=false) {
    /*
        Move cards to the right most of the board.
        Parameters:
            oneByone: move the card to the right most in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the right most
            reverse: Move the card in reverse order
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const cards = document.querySelectorAll(cardClass);

    let count = 0;
    for (let i=0; i<cards.length; i++) {
        let card = cards[i];
        if (reverse) {
            card = cards[cards.length-i-1];
        }

        count++;
        card.style.left = `${cardsContainer.offsetWidth - card.offsetWidth}px`;
        if (oneByone) {
            await sleep(delay);
        }

        if (splitHalf && count >= cards.length/2) {
            break;
        }
    }
}

async function move2right(howMuch, oneByone=false, delay=0.15, splitHalf=false, reverse=false) {
    /*
        Move cards to the right of the board.
        Parameters:
            howMuch: How much you want to move the card to the right from the center. This should be a string with amount and unit (example: '20%' or '20px' or '20rem').
            oneByone: move the card to the right in one by one fashion
            delay: this provides the time between two adjacent card movement, use when oneByone is set to true
            splitHalf: Only move the half deck to the right
            reverse: Move the card in reverse order
    */
    const cardsContainer = document.querySelector(cardContainerClass);
    const centerX = cardsContainer.offsetWidth / 2;

    const cards = document.querySelectorAll(cardClass);

    let count = 0;
    for (let i=0; i<cards.length; i++) {
        let card = cards[i];
        if (reverse) {
            card = cards[cards.length-i-1];
        }

        count++;

        card.style.left = `calc(${centerX - card.offsetWidth/2}px + ${howMuch})`;
        if (oneByone) {
            await sleep(delay);
        }

        if (splitHalf && count >= cards.length/2) {
            break;
        }
    }
}

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds*1000));
}

function resetPosition() {
    const cards = document.querySelectorAll(cardClass);

    for (let card of cards) {
        const dataId = card.dataset.cardNum;
        const isChoosen = card.dataset.choosen;

        if (isChoosen == "true") {
            moveUp(dataId, 0);
            card.dataset.choosen = "false";
        }
    }
}

async function shuffleCards() {
    /*
        Shuffle the cards in the deck.
    */
    shuffleCardsNum();
    resetPosition();

    move2left('20%', oneByone=false, delay=0.15, splitHalf=true, reverse=false);
    move2right('20%', oneByone=false, delay=0.15, splitHalf=true, reverse=true);
    await sleep(0.5);
    await move2center(oneByone=true, delay=0.25, splitHalf=false, reverse=false, moveBothEnds=true);
    await sleep(0.5);
    spreadCards();
}

// add cards to the board and spread over the board
let indicator = false
async function setupCards() {
    createCards(78);
    move2leftMost();
    await sleep(1);
    spreadCards();
    indicator = true;
}
setupCards();

const cardsContainer = document.querySelector(cardContainerClass);
const cards = document.querySelectorAll(cardClass);

// this observer helps in spreading the deck on the board based on board size
const observer = new ResizeObserver(entries => {
    entries.forEach(entry => {
        const {
            width,
            height
        } = entry.contentRect;
        if (indicator) {
            spreadCards();
        }
    });
});

observer.observe(cardsContainer);

// this observer helps in moving the card up on click
for (let card of cards) {
    card.addEventListener('click', (entry) => {
        const cardId = entry.target.dataset.cardNum;
        const isChoosen = entry.target.dataset.choosen

        if (numCardsChoosed() < 3 && isChoosen == "false") {
            moveUp(cardId, 80);
        } else if (isChoosen == "true") {
            moveUp(cardId, 0);
            entry.target.dataset.choosen = false;
        } else {
            console.log('You can only choose 3 cards')
        }
    });
}

/* --- cards shuffle animation ends --- */

/* --- Card Flipping on click --- */

function flip(card) {
    card.classList.toggle('is-flipped');
}

const resultCards = document.querySelectorAll('.tarot--r-card--inner');

for (let card of resultCards) {
    card.addEventListener('click', function() {
        flip(card);
    });
}
