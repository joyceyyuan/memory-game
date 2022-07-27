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
let matchedCards=[];

// const gridImages = document.createElement('img');

/*----- cached element references -----*/
const moveEl=document.getElementById('move');
const pairEl=document.getElementById('pair');

console.log(moveEl.textContent=`Moves:  ${move}`);
console.log(pairEl.textContent=`Pairs found:    ${pair}`);


// const gridEl = document.querySelector('.grid');
// const cardbackEl=document.querySelectorAll('.cardback');
// const replayBtn=document.querySelector('button');
// const imageEl = document.querySelector('img');


/*----- event listeners -----*/

// //handle a player clicking on a card
// imageEl.addEventListener('click',flipCard); 
// //handle a player clicking the replay button
// replayBtn.addEventListener('click',initialize);

// /*----- functions -----*/
//Shuffle card array
function shuffleCards(){
    cards.sort(() => Math.random() - 0.5);
};
shuffleCards();
console.log(cards);

//count the moves
function moveCount(){
    move += 1;
    console.log(moveEl.textContent=`Moves:  ${move}`);
}

//Upon loading the app should:Initialize the state variables


function initialize(){
//create grid board with each card displaying back image
cards.forEach(function(card){
    const imageEl=document.createElement('img');
    imageEl.classList.add('cardback');
    imageEl.setAttribute('src','img/OfficeLogo.png');
    imageEl.setAttribute('alt','cardback-OfficeLogo');
    imageEl.setAttribute('id',cards.indexOf(card));
    gridEl.appendChild(imageEl);
    });
 
    getRandomCards();
    render();
};
initialize();

//define callback function using function expression
//to display picture;show index of the card clicked,cache the clicked variable 
// add the card clicked to openCards array;
// initialize();

function flipCard(e){
    console.log(e.target, 'e.target->error'); //check which card was clicked 
    let cardId=e.target.getAttribute('id'); 
    console.log(`You clicked card ${cardId}`); 
    cards.forEach(function(card){

        console.log(imageEl);
        imageEl.classList.add('cardfront');
        imageEl.setAttribute('src','cards[cardId].image');
        imageEl.setAttribute('alt','cards[cardId].name');
        gridEl.appendChild(imageEl);
    })
    render();
}; 


//Render state variables to the page

function render(){

}

function checkOpenCards(){
    if(openCards.length===2) {
        checkIfMatch(openCards[0],openCards[1]);
    }
};

function checkIfMatch(){
    if(openCards[0]===openCards[1]){
        alert('You found another pair');
        pair+=1;
        openCards=[];
        //remain card front up
    }else{
        alert('wrong');
        //show card back
    }
};


// gameOver{
// compare time move with timelimit movelimit;
// check if all cards face up/matched,display gameover};pairs===8

initialize();