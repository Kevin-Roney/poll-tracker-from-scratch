import { 
    logout,
    createPoll,
    getPolls,
    redirectIfNotLoggedIn
} from '../fetch-utils.js';
import { renderPolls } from '../render-utils.js';

redirectIfNotLoggedIn();

const pollFormEl = document.querySelector('#poll-input');
const add1button = document.querySelector('.add-1');
const sub1button = document.querySelector('.subtract-1');
const add2button = document.querySelector('.add-2');
const sub2button = document.querySelector('.subtract-2');
const publishBtn = document.querySelector('.publish-poll');
const option1El = document.querySelector('.option1');
const option2El = document.querySelector('.option2');
const questionEl = document.querySelector('.current-question');
const option1Count = document.querySelector('.count-1');
const option2Count = document.querySelector('.count-2');
const pastPollsEl = document.querySelector('.past-polls');
const logoutBtn = document.querySelector('.logout');

let question = 'Question';
let option1 = 'Option 1';
let option2 = 'Option 2';
let count1 = 0;
let count2 = 0;

logoutBtn.addEventListener('click', async () => {
    await logout();
});

window.addEventListener('load', async () => {
    await displayPolls();
});

add1button.addEventListener('click', () => {
    count1++;
    displayCurrentPollEl();
});

add2button.addEventListener('click', () => {
    count2++;
    displayCurrentPollEl();
});

sub1button.addEventListener('click', () => {
    count1--;
    displayCurrentPollEl();
});

sub2button.addEventListener('click', () => {
    count2--;
    displayCurrentPollEl();
});

pollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(pollFormEl);

    question = data.get('question-entry');
    option1 = data.get('option1-entry');
    option2 = data.get('option2-entry');
    

    displayCurrentPollEl();
    pollFormEl.reset();
});

publishBtn.addEventListener('click', async () => {
    
    await createPoll(question, option1, option2, count1, count2);
    question = '';
    option1 = '';
    option2 = '';
    count1 = 0;
    count2 = 0;
    option1Count.textContent = count1;
    option2Count.textContent = count2;
    displayCurrentPollEl();
    displayPolls();
});

function displayCurrentPollEl() {
    questionEl.textContent = question;
    option1El.textContent = option1;
    option2El.textContent = option2;
    option1Count.textContent = count1;
    option2Count.textContent = count2;
}

async function displayPolls() {
    const polls = await getPolls();

    pastPollsEl.textContent = '';
    for (let poll of polls) {
        const newPollEl = renderPolls(poll);

        pastPollsEl.append(newPollEl);
    }
}