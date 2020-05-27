document.addEventListener('DOMContentLoaded',() =>{

    //Creating an Array of Cards to use. Two for each card
    const cardArray = [
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            nane: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            nane: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
 
const grid = document.querySelector('.grid');
let resultDisplay = document.querySelector('#result')
let cardsChoosen = []; //empty array of card that were chosen 
let cardsChoosenId = [];
let cardsWon = [];

//Creating the board with default picture values
function createBoard(){
    for(let i = 0; i < cardArray.length; i++)
    {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}

//Function to check for match 
function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenId[0]
    const optionTwoId = cardsChoosenId[1]
    if(cardsChoosen[0] === cardsChoosen[1]){
        alert("Yo congrats you got a match!")
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChoosen)
    }
    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again!')
    }
    cardsChoosen = []
    cardsChoosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2)
    {
        resultDisplay.textContent = "Congratulations! You matched all the card!"
    }

}
//Flip card function 
function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardsChoosen.push(cardArray[cardId].name)
    cardsChoosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].image)
    if(cardsChoosen.length === 2){
    setTimeout(checkForMatch, 500)
    }
}

createBoard()

})