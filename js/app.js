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
//track the state of the game

// let time;may add timer/time countdown later
let move;
let pair;

selectedCards=[];
matchedCards=[];


/*----- cached element references -----*/
const scoreEls ={
    move:document.querySelector('#move'),
    pair:document.querySelector('#pair')
}

const gridEl = document.querySelector('.grid');

const replayBtn=document.querySelector('button')


//create grid board with images
function createGrid(){
    cards.forEach(function(card){
        const imageEl=document.createElement('img');
        imageEl.setAttribute('src','img/OfficeLogo.png');
        imageEl.setAttribute('id',cards.indexOf(card));
        // console.log(cardImage);
        gridEl.appendChild(imageEl);
    });
}
createGrid();




//Upon loading the app should:Initialize the state variables
initiate();
function initiate(){
    score={
        move:0,
        pair:0
    }
    getRandomCards();
    render();
}

//Render state variables to the page

function render(){

}

/*----- event listeners -----*/
//handle a player clicking a square
// document.querySelectorAll('.card')




//handle a player clicking the replay button

replayBtn.addEventListener('click',initiate);
initiate();






// function flipcard {
// display picture;
// add the card to selectedCards;
// add 3d effect
// increment move counter;
// };

// function hideCard {
// hide picture;
// remove the card to showed cards;
// }

// /*----- functions -----*/


//Shuffle card array
function getRandomCards(){
	// create random objects in cards array
	const randIndex = Math.floor(Math.random() * cards.length);
	return cards[randIndex];
};


// function checkTwoSelected {
// if  (selectedCards.length=2) {
//    card.addeventListeners('click',hideCards);
//    grid.appendChild();
// }
// }

// compare two selected cards{
// match:
// not match:
// }

// gameOver{
// compare time move with timelimit movelimit;
// check if all cards face up/matched,display gameover}


// accuracy 
