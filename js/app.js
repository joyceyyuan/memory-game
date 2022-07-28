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
let cardsArray=[];
let matchedCards=[];

/*----- cached element references -----*/
const moveEl=document.getElementById('move');
const pairEl=document.getElementById('pair');

console.log(moveEl.textContent=`Moves:  ${move}`);
console.log(pairEl.textContent=`Pairs found:    ${pair}`);


const gridEl = document.querySelector('.grid');
const cardbackEl=document.querySelectorAll('.card-back');
const frontCardEl=document.querySelector('.card-front');
const replayBtn=document.querySelector('button');
const grid = document.querySelector('.card-back')

/*----- event listeners -----*/


//handle a player clicking the replay button
// replayBtn.addEventListener('click',initialize);

/*----- functions -----*/


//Shuffle card array
function shuffleCards(){
    cards.sort(() => Math.random() - 0.5);
};
shuffleCards();
console.log(cards);


function createGrid(){
    for (let i=0; i<cards.length; i++){
// console.log(cards.name,'>-card name');
const cardbackImage = document.createElement('img');
  cardbackImage.setAttribute('src', 'img/OfficeLogo.png') ;
    cardbackImage.setAttribute('id', i) ;
    cardbackImage.addEventListener('click', flipCard)  ;
    grid.appendChild(cardbackImage);
 }  
}




        // frontImage.classList.add('#front-Image');
        // // frontImage.setAttribute('src', "cards");
        // frontImage.setAttribute('alt', 'cards.name');
        // frontCardEl.appendChild(frontImage);

    
    const frontImageEl=document.querySelector('#front-Image');
    console.log(frontImageEl);


// }
// createCards();

// //Upon loading the app should:Initialize the state variables

// function initialize(){
//     createGrid()
//     shuffleCards();
//     render();
// };
// initialize();


//count the moves
function moveCount(){
    move += 1;
    console.log(moveEl.textContent=`Moves:  ${move}`);
}

//define callback function using function expression
//to display picture;show index of the card clicked,cache the clicked variable 
// add the card clicked to openCards array;
// initialize();

//handle a player clicking on a card
// gridEl.addEventListener('click',flipCard); 

function flipCard(e){
    console.log(e.target); //check which card was clicked 
    let cardId=e.target.getAttribute('id'); 
    console.log(`You clicked card ${cardId}`); 
    // moveCount();
    openCards.push(cards[cardId].name);
    cardsArray.push(cardId);
    e.target.setAttribute('src',cards[cardId].image);

}



// //Render state variables to the page

// function render(){

// }

// function checkOpenCards(){
//     if(openCards.length===2) {
//         checkIfMatch(openCards[0],openCards[1]);
//     }
// };

// function checkIfMatch(){
//     if(openCards[0]===openCards[1]){
//         alert('You found another pair');
//         pair+=1;
//         openCards=[];
//         //remain card front up
//     }else{
//         alert('wrong');
//         //show card back
//     }
// };


// // gameOver{
// // compare time move with timelimit movelimit;
// // check if all cards face up/matched,display gameover};pairs===8

// initialize();
createGrid();