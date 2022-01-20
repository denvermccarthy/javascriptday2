// import functions
import { people } from './data.js';

// grab DOM elements
const selectEl = document.getElementById('name');
const nameEl = document.querySelector('.name');
const ageEl = document.querySelector('.age');
const bioEl = document.querySelector('.bio');
const hobbiesEl = document.querySelector('.hobbies');
const container = document.querySelector('.profile');


// set event listeners 
selectEl.addEventListener('change', (e) => {
    hobbiesEl.innerHTML = '';
    container.classList.remove('denver', 'brenden');
    const selected = e.target.value; 
    if (selected === 'one') {
        renderPerson(0);
    } else {
        renderPerson(1);
    }
});



    // use user input to update state 
    // update DOM to reflect the new state
