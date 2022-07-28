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
        image:'img/Ryan.png'
    },   
    {   
        name:'Pam',
        image:'img/Ryan.png'
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
const moveEl=document.getElementById('move');
const pairEl=document.getElementById('pair');
const messageEl=document.getElementById('result');

console.log(moveEl.textContent=`Move:  ${move}`);
console.log(pairEl.textContent=`Pair found:    ${pair}`);


const gridEl = document.querySelector('.grid');
const cardbackEl = document.querySelector('.card-back');

const replayBtn=document.querySelector('button');    
const grid = document.querySelector('.card-back');
const cardImage=document.querySelectorAll('img');
/*----- event listeners -----*/


/*----- functions -----*/


//Shuffle card array
function shuffleCards(){
    cards.sort(() => Math.random() - 0.5);
};
shuffleCards();
console.log(cards);

//create card board
function createGrid(){
    for (let i=0; i<cards.length; i++){
        // console.log(cards.name,'>-card name');
        const card = document.createElement('img');
        card.setAttribute('src', 'img/OfficeLogo.png');
        card.setAttribute('id', i) ;
        console.log(card);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }  
}


//Upon loading the app should:Initialize the state variables

function initialize(){
    move=0;
    pair=0;
    openCards=[];
    openCardsId=[];
    pairedCards=[];
    createGrid()
    shuffleCards();
    render();
};
initialize();


//count the moves
function moveCount(){
    move += 1;
    console.log(moveEl.textContent=`Move:  ${move}`);
}

function flipCard(e){
    console.log(e.target); //check which card was clicked 
    let cardId=e.target.getAttribute('id'); 
    console.log(`You clicked card ${cardId}`); 
    openCards.push(cards[cardId].name);
    openCardsId.push(cardId);
    e.target.setAttribute('src',cards[cardId].image);
    moveCount();
    checkIfPair();
};



//Render state variables to the page

function render(){

};

//check if cards chosen are a pair
function checkIfPair(){
    if(openCards.length === 2) {
        if(openCards[0]===openCards[1]){
            alert('You found a pair');
            pair+=1;
            pairedCards.push(openCards);
        //remain card open displaying front
        } else {
        //flip over card showing card back
            cardImage(openCards[0]).setAttribute('src','image/OfficeLogo.png');
            cardImage(openCards[1]).setAttribute('src','image/OfficeLogo.png');
            alert('Wrong.Please try again');
        }
        //set to null  
        openCards=[];
        openCardsId=[];
        pairCount();
    }
};

//count the pairs
function pairCount(){
    pair += 1;
    console.log(pairEl.textContent=`Pair found:    ${pair}`);

};


//Define when game is over, check if all cards got paired
//maybe set a time limit later
function gameWon(){
    if (pairCount === cards.length / 2){
        messageEl.textContent='Congratulations!'
    }
};

//handle player clicking on the replay button
replayBtn.addEventListener('click', initialize)
initialize();