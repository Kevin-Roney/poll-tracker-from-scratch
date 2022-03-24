export function renderPolls(poll) {
    const div = document.createElement('div');
    const questionDiv = renderOption(poll.question);
    const option1Div = renderOption(poll.option1, poll.count1);
    const option2Div = renderOption(poll.option2, poll.count2);

    div.append(questionDiv, option1Div, option2Div);
    div.classList.add('current-poll-area');

    return div;
}

export function renderOption(question, option, count) {
    const pollDiv = document.createElement('div');
    const questionDiv = document.createElement('p');
    const optionDiv = document.createElement('p');
    const countDiv = document.createElement('p');

    questionDiv.textContent = question;
    optionDiv.textContent = option;
    countDiv.textContent = count;
    
    return pollDiv;
}