const containerElement = document.querySelector('.container');

// Title
const titleElement = document.createElement('h1');
titleElement.classList.add('title');
titleElement.innerHTML = 'Memory Game';

containerElement.appendChild(titleElement);

// Card Elements
const cardElement = document.createElement('div');
cardElement.classList.add('card-grid');
containerElement.appendChild(cardElement);


let gameStarted = false


//Fetch pictures from the API
fetch('https://farzanehahmadi.github.io/easy.json')
  .then(res => res.json())
  .then(data =>{
    const pictures = data;

    const picList = [];

pictures.forEach( (pic) => {
  picList.push(pic);
  picList.push(pic);
});
//shuffle

for(let i = 0; i < 1000 ; i++){
  const randomIndex1 = Math.floor(Math.random()* picList.length)
  const randomIndex2 = Math.floor(Math.random()* picList.length)
  const temp = picList[randomIndex1];
  picList[randomIndex1] = picList[randomIndex2]
  picList[randomIndex2] = temp;
}
console.log(picList);

picList.forEach((pic) => {
  const card = createCard(pic);
  cardElement.appendChild(card);
});
  });


function createCard (pic){
 
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner'
    cardInner.id = `card-${pic.id}`;

    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    backImg = document.createElement('img');
    backImg.src ="https://github.com/FarzanehAhmadi/HYF-assignments/blob/main/memory-app/assets/card-backside.jpg?raw=true"
    backImg.alt = "Back of the card";
    cardBack.appendChild(backImg)

    const cardFront = document.createElement('div');
    cardFront.className = 'card-front'
    frontImg = document.createElement ('img');
    frontImg.src = pic.url;
    frontImg.alt = "Front of the card";
    cardFront.appendChild(frontImg);

    cardInner.appendChild(cardBack);
    cardInner.appendChild(cardFront);
    cardInner.addEventListener('click', flipCard);
  
    return cardInner;
}




function flipCard() {

    if (!gameStarted) {
      startTimer();
      gameStarted = true;
    }

    const cardInner = this;

    if (flippedCards.length >= 2 || cardInner.classList.contains('flipped')) {
      return;
    } 

    cardInner.classList.add('flipped');
    flippedCards.push(cardInner)

    countPlayerMoves();

    if (flippedCards.length === 2) {
      setTimeout(() => {
        flippedCards.forEach((card) => card.classList.remove('flipped'));
        flippedCards = []; // Reset for the next pair
      }, flipDelay);
    }
  }

  //week3

  let moveCounter = 0;

  function countPlayerMoves(){
    moveCounter ++;
    moveCounterElement.innerText = `Moves: ${moveCounter}`
  }

  const statsElement = document.createElement('div');
  statsElement.classList.add('stats');
  containerElement.appendChild(statsElement);

  // Player moves
  const moveCounterElement = document.createElement('p');
  statsElement.appendChild(moveCounterElement);
  moveCounterElement.innerText = `Moves: 0`

  // Timer
  
  const timerElement = document.createElement('p');
  statsElement.appendChild(timerElement);
  timerElement.classList.add('timer');
  timerElement.innerText = `Time: 00.00.00`;

  let timer;
  let seconds = 0;
  function startTimer(){
    if(!timer){
      timer = setInterval(() => {
        seconds++;
        timerElement.innerText = formatTime(seconds);
      }, 1000);
    }
  }
  function formatTime(totalSeconds){
    const hours = Math.floor(totalSeconds/3600).toString().padStart(2,'0');
    const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2,'0');
    const secs = (totalSeconds %60).toString().padStart(2,'0');
    return `Time: ${hours}.${minutes}.${secs}`
  }

  //Track Flipped Cards
  let flippedCards = [];
  const flipDelay = 2000;


