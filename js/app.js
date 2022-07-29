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
let pairedCards=[];

/*----- cached element references -----*/
const moveEl = document.getElementById('move');
const pairEl = document.getElementById('pair');


console.log(moveEl.textContent=`Move:  ${move}`);
console.log(pairEl.textContent=`Pair found:    ${pair}`);



const cardbackEl = document.querySelector('.card-back');
// const replayBtn = document.getElementById('reset-btn');   
const replayBtn = document.querySelector('button');   
const cardImage = document.querySelectorAll('img');
const card = document.createElement('img');
const message = document.getElementById('message');

// const openEl=document.querySelector('cardId');
// console.log(openEl)
/*----- EL -----*/
replayBtn.addEventListener('click', reset);

/*----- functions -----*/


//Shuffle cards array
function shuffleCards(){
    cards.sort(() => Math.random() - 0.5);
};

console.log(cards);

shuffleCards();

//create card board
function createGrid(){
    for (let i=0; i<cards.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'img/OfficeLogo.png');
        card.setAttribute('id', i) ;
        // console.log(card);
        card.addEventListener('click', flipCard);
        cardbackEl.appendChild(card);
    }  
}

console.log(cardbackEl) //all card images are within grid wih class=card back

//Upon loading the app should:Initialize the state variables

// function initialize(){
//     move=0;
//     pair=0;
//     openCards=[];
//     openCardsId=[];
//     pairedCards=[];
//     shuffleCards();
// };
// initialize();


//count the moves,render it to the page
function moveCount(){
    move += 1;
    moveEl.textContent=`Move:  ${move}`
}

function flipCard(e){
    // console.log(e.target); //check which card was clicked <img src='',id=''>
    let cardId=e.target.getAttribute('id'); 
    let flippedCard=e.target.classList.add('flipped');
    // console.log(flippedCard);

    // console.log(`You clicked card ${cardId}`); 
    checkOpenCards(e);
    openCards.push(cards[cardId].name);
    openCardsId.push(cardId);
    // console.log(openCards,openCardsId)

    e.target.setAttribute('src',cards[cardId].image);
    e.target.setAttribute('name',cards[cardId].name);

    moveCount();
    checkOpenCards(e);
};



//check if card open.If so, disable event listener: stop counting moves,etc.
function checkOpenCards(){
    if(openCards.length === 2) {
        checkIfPair();
    } else if (openCards.length === 1){
        message.innerText='please pick another card';
        // e.target.removeEventListener('click',flipCard);
    } else {
        //set to null  
        openCards=[];
        openCardsId=[];
    }
};


//check if cards open/clicked are a pair
function checkIfPair(){
    //If it's a pair, remain card open displaying front
    if(openCards[0] === openCards[1]){
        console.log('You found a pair');
        pairedCards.push(openCards); 
    }   
    // }   e.target.addEventListener('click',flipCard)
    openCards=[];
    openCardsId=[];

    const openEl=document.querySelector('.flipped');
    openEl.classList.remove('flipped');

// e.target.setAttribute('src','img/OfficeLogo.png');
}


    // const openEl=document.querySelector('.flipped');
    // openEl.classList.remove('flipped');

// e.target.setAttribute('src','img/OfficeLogo.png');


//render the pairs counter to the page

console.log(pairEl.textContent=`Pair found:    ${pairedCards.length / 2}`)



//Define when game is over, check if all cards got paired
//maybe set a time limit later
//Or add a BGM audio, gamme over if player don't find all pairs when music finishes

function gameWon(){
    pair= pairedCards.length;
    if (pair === cards.length / 2){
        console.log(pairEl.textContent='Congratulations!You found all pairs');
    }
};

//reset the card grid after clicking on the replay button
function reset(){
    shuffleCards()
        for (let i=0; i<cards.length; i++){
            const card = document.querySelector('img');
            card.setAttribute('src', 'img/OfficeLogo.png');
            card.setAttribute('id', i) ;
            // console.log(card);
            card.addEventListener('click', flipCard);
            cardbackEl.appendChild(card);
        }  
    }
// function reset(){
//     for (let i=0; i<cards.length; i++){
    
//         card.removeAttribute('src', 'img/OfficeLogo.png');
//         card.removeAttribute('id', i) ;
//         // document.getElementById().innerHTML = "";
//     }
//     shuffleCards();
// createGrid();
// }
// }

createGrid();