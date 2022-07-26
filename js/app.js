/*----- constants -----*/
//create cards array: 16 cards with 8 different pictures
const cards=[
    {
        name:'Angela',
        image:'img/Angela.png'
    },
    {
        name:'Angela',
        image:'img/Angela.png'
    },
    {   
        name:'Dwight',
        image:'img/Dwight.png'
    },
    {   
        name:'Dwight',
        image:'img/Dwight.png'
    },
    {   
        name:'Jim',
        image:'img/Jim.png'
    }, 
    {   
        name:'Jim',
        image:'img/Jim.png'
    },       
    {   
        name:'Michael',
        image:'img/Michael.png'
    }, 
    {   
        name:'Michael',
        image:'img/Michael.png'
    },     
    {   
        name:'Oscar',
        image:'img/Oscar.png'
    },  
    {   
        name:'Oscar',
        image:'img/Oscar.png'
    }, 
    {   
        name:'Pam',
        image:'img/Pam.png'
    },   
    {   
        name:'Pam',
        image:'img/Pam.png'
    },    
    {   
        name:'Ryan',
        image:'img/Ryan.png'
    },
    {   
        name:'Ryan',
        image:'img/Ryan.png'
    },
    {   
        name:'Stanley',
        image:'img/Stanley.png'
    },
    {   
        name:'Stanley',
        image:'img/Stanley.png'
    },
]
/*----- app's state (variables) -----*/

let move=0;
let pair=0;
let openCards=[];
let openCardsId=[];

/*----- cached element references -----*/

const moveEl = document.getElementById('move');
const pairEl = document.getElementById('pair');

const cardbackEl = document.querySelector('.card-back');  
const replayBtn = document.querySelector('button');   
const cardImage = document.querySelectorAll('img');
const card = document.createElement('img');
const message = document.getElementById('message');


/*----- functions -----*/

//Shuffle cards array
function shuffleCards(){
    cards.sort(() => Math.random() - 0.5);
};

shuffleCards();

//create card board
function createGrid(){
    for (let i=0; i<cards.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'img/OfficeLogo.png');
        card.setAttribute('id', i);
        card.addEventListener('click', flipCard);
        cardbackEl.appendChild(card);
        message.innerText='Please pick a card'
    }  
}
createGrid();

//Count moves,render it to the page
function moveCount(){
    move += 1;
    moveEl.innerText=`Move:  ${move}`;
}

function flipCard(e){
    let cardId = e.target.getAttribute('id'); 
    let flippedCard=e.target.classList.add('flipped');
    e.target.setAttribute('src',cards[cardId].image);
    e.target.setAttribute('name',cards[cardId].name);
    setTimeout(function(){
        openCards.push(cards[cardId].name);
        openCardsId.push(cardId);
        moveCount();
        checkOpenCards(e);
    }, 500)
};


//check if card open.If so, disable event listener: stop counting moves,etc.
function checkOpenCards(e){
    if(openCards.length === 2) {
        checkIfPair();
    } else if (openCards.length === 1){
        message.innerText='Please pick another card';
    } else {
    }
};


//check if cards open/clicked are a pair
function checkIfPair() {
    const cards = document.querySelectorAll('img');
    const firstCard = document.getElementById(openCardsId[0]);
    const secondCard = document.getElementById(openCardsId[1]);

    if(firstCard.src === secondCard.src) {
    message.innerText = 'You found a pair';
    pairCount();
    gameWon();
    } else {
    cards[openCardsId[0]].setAttribute('src', 'img/OfficeLogo.png');
    cards[openCardsId[1]].setAttribute('src', 'img/OfficeLogo.png');
    message.innerText ='Sorry, please try again'
    }
    openCards=[];
    openCardsId=[];
}


//Count Pairs,render it to the page
function pairCount(){
    pair += 1;
    pairEl.innerText=`Pair found:    ${pair}`
}



function gameWon(){
    if (pair === (cards.length) / 2){
        message.innerText='Congrats!You found all pairs';
    }
};


function initialize(){
    move=0;
    pair=0;
    openCards=[];
    openCardsId=[];
}

