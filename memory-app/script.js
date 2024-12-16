const containerElement = document.querySelector('.container');

// Title
const titleElement = document.createElement('h1');
titleElement.classList.add('title');
titleElement.innerHTML = 'Memory Game';

containerElement.appendChild(titleElement);

// Card Elements
const cardElement = document.createElement('div');
cardElement.classList.add('card');
containerElement.appendChild(cardElement);


cardElement.innerHTML = `
  <div class="card-inner">
    <div class="card-back">
      <img src="assets/card-backside.jpg" alt="Back of the card">
    </div>
    <div class="card-front">
      <img src="assets/card-picture.jpg" alt="Front of the card">
    </div>
  </div>
`;

cardElement.addEventListener('click', flipCard);

function flipCard() {
  const cardInner = cardElement.querySelector('.card-inner');
  if (cardInner.classList.contains('flipped')) {
    cardInner.classList.remove('flipped');
  } else {
    cardInner.classList.add('flipped');
  }
}
