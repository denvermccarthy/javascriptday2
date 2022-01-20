// import functions
import { people } from './data.js';

// grab DOM elements
const selectEl = document.getElementById('select-person');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const locationEl = document.querySelector('.location');
const hobbiesEl = document.querySelector('.hobbies');
const container = document.querySelector('.profile');
const pronounsEl = document.querySelector('.pronouns');
const favAnimalEl = document.querySelector('.fav-animal');

// function renderAudioCat(audio) {
    
// }
// function renderAudioDog(audio) {
    
// }

function renderPerson(index) {
    // this will replace all of the data with our info from data.js

    // container.classList.add(`${people[index].name}`);
    nameEl.textContent = 'Name: ' + people[index].name;
    pronounsEl.textContent = 'Pronouns: ' + people[index].pronouns;
    favAnimalEl.textContent = 'Favorite animal: ' + people[index].favoriteAnimal;
    ageEl.textContent = 'Age: ' + people[index].age;
    locationEl.textContent = 'Location: ' + people[index].location;


    for (const hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}
// set event listeners 
selectEl.addEventListener('change', (e) => {
    hobbiesEl.innerHTML = '';
    container.classList.remove('Brenden', 'Denver');
    const selected = e.target.selectedIndex; 
    if (selected === 0) {
        renderPerson(0);
        container.classList.add('Brenden');
        // AUDIO DID WORK, IT JUST WAS ANNOYING
        let audio = new Audio('assets/dog.mp3');
        // // audio.src = 'assets/dog.mp3';
        audio.play();
        console.log('selected= ' + selected);
    } else {
        renderPerson(1);
        container.classList.add('Denver');
        let audio = new Audio('assets/cat.mp3');
        audio.play();
        console.log('selected= ' + selected);
    }
});



    // use user input to update state 
    // update DOM to reflect the new state
