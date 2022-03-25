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
const publishBtn = document.querySelector('.publish-button');
const option1El = document.querySelector('.option1');
const option2El = document.querySelector('.option2');
const questionEl = document.querySelector('.current-question');
const option1Count = document.querySelector('.count-1');
const option2Count = document.querySelector('.count-2');
const logoutBtn = document.querySelector('.logout');