export function renderPolls(poll) {
    const PollEl = document.createElement('div');
    const QuestionEl = document.createElement('p');
    const OptionOneEl = document.createElement('p');
    const OptionTwoEl = document.createElement('p');
    const VotesOneEl = document.createElement('p');
    const VotesTwoEl = document.createElement('p');

    PollEl.classList.add('poll');
    QuestionEl.textContent = poll.poll_question;
    OptionOneEl.textContent = poll.poll_option_1;
    OptionTwoEl.textContent = poll.poll_option_2;
    VotesOneEl.textContent = poll.option_1_counts;
    VotesTwoEl.textContent = poll.option_2_counts;

    PollEl.append(
        QuestionEl,
        OptionOneEl,
        VotesOneEl,
        OptionTwoEl,
        VotesTwoEl,);

    return PollEl;
}
