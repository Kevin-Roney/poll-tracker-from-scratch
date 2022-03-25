export function renderPolls(poll) {
    const PollEl = document.createElement('div');
    const QuestionEl = document.createElement('h3');
    const OptionOneEl = document.createElement('p');
    const OptionTwoEl = document.createElement('p');
    const VotesOneEl = document.createElement('p');
    const VotesTwoEl = document.createElement('p');

    PollEl.classList.add('poll');
    QuestionEl.textContent = poll.poll_question;
    OptionOneEl.textContent = poll.poll_option_1;
    OptionTwoEl.textContent = poll.poll_option_2;
    VotesOneEl.textContent = poll.option_1_count;
    VotesTwoEl.textContent = poll.option_2_count;

    PollEl.append(
        QuestionEl,
        OptionOneEl,
        VotesOneEl,
        OptionTwoEl,
        VotesTwoEl,);

    return PollEl;
}
