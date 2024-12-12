const selector = {
  inputEl : document.querySelector('.js-name-input'),
  buttonEl : document.querySelector('.js-name-button'),
  outputContainerEl: document.querySelector('.js-animal-name'),
  selectEl : document.querySelector('#choices'),
}
const traits = [
  "Brave",
  "Silent",
  "Wise",
  "Playful",
  "Fierce",
  "Gentle",
  "Swift",
  "Loyal",
  "Mysterious",
  "Bold"
];

const animals = [
  "Wolf",
  "Hawk",
  "Fox",
  "Dolphin",
  "Owl",
  "Bear",
  "Tiger",
  "Snake",
  "Butterfly",
  "Raven"
];

const outputEl = document.createElement('p')
selector.outputContainerEl.appendChild(outputEl);
outputEl.classList.add('js-outputEl');
selector.buttonEl.addEventListener('click',animalNameGen)


selector.selectEl.addEventListener('change', selecetGen)


function selecetGen(event){
  const selectValue = event.target.value;

  if(selectValue === 'option1'){
    selector.buttonEl.addEventListener('click',animalNameGen)
  }

  if(selectValue === 'option2'){
    selector.inputEl.addEventListener('mouseover',animalNameGen);
  }
}
function animalNameGen(){
  const name = capitalizedFirstLetter(selector.inputEl.value);
  if(name ===''){
    outputEl.innerHTML = 'Enter your name please!'
  }else{
    const animalName = traits[Math.floor(Math.random() * 10)] +' ' + animals[Math.floor(Math.random() * 10)];
  
  outputEl.innerHTML=`${name} - ${animalName}`
  selector.inputEl.value='';
  }
  
}

function capitalizedFirstLetter(str){
  const firstLetter = str.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase()
  const remainingLetters = str.slice(1);
  return firstLetterCap + remainingLetters
}
