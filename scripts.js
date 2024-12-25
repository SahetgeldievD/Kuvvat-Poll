let polls = [];
let selectedOptionIndex = -1;
document.getElementById('create-poll').style.display = 'none';

function updatePollSelect() {
  const pollSelect = document.getElementById('poll-select');
  pollSelect.innerHTML = '';
  polls.forEach((poll, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = poll.question;
    pollSelect.appendChild(option);
  });
  if (polls.length > 0) {
    showPollOptions(0);
  }
}

function showResults(index) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  const poll = polls[index];
  const totalVotes = poll.votes.reduce((a, b) => a + b, 0);

  const results = poll.options.map((option, i) => ({
    option,
    votes: poll.votes[i],
    percentage: totalVotes ? ((poll.votes[i] / totalVotes) * 100).toFixed(2) : 0
  }));

  results.forEach(result => {
    const resultDiv = document.createElement('div');
    resultDiv.textContent = `${result.option}: ${result.votes} голосов (${result.percentage}%)`;
    resultsDiv.appendChild(resultDiv);
  });
}

function showPollOptions(index) {
  const pollOptionsDiv = document.getElementById('poll-options');
  pollOptionsDiv.innerHTML = '';
  const poll = polls[index];
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('poll-options-container');
  poll.options.forEach((option, i) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('poll-option-button');
    button.disabled = poll.voted;
    button.addEventListener('click', () => {
      selectedOptionIndex = i;
      console.log(selectedOptionIndex);
      const phoneNumber = document.getElementById('phone-number').value;
      if (poll.voters.includes(phoneNumber)) {
        alert('Вы уже проголосовали!');
        return;
      }
      poll.votes[i]++;
      poll.voters.push(phoneNumber);
      poll.voted = true;
      showResults(index);
      updatePollOptions(index);
      alert('Ваш голос учтен!');
    });
    buttonsContainer.appendChild(button);
  });
  pollOptionsDiv.appendChild(buttonsContainer);
}

function updatePollOptions(index) {
  const pollOptionsDiv = document.getElementById('poll-options');
  pollOptionsDiv.innerHTML = '';
  const poll = polls[index];
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('poll-options-container');
  poll.options.forEach((option, i) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('poll-option-button');
    button.disabled = true;
    buttonsContainer.appendChild(button);
  });
  pollOptionsDiv.appendChild(buttonsContainer);
}

const phoneNumberInput = document.getElementById('phone-number');
phoneNumberInput.addEventListener('input', function() {
  const pollIndex = document.getElementById('poll-select').value;
  const poll = polls[pollIndex];
  const phoneNumber = document.getElementById('phone-number').value;
  if (!poll.voters.includes(phoneNumber)) {
    poll.voted = false;
    selectedOptionIndex = -1;
    const buttons = document.getElementById('poll-options').querySelectorAll('button');
    buttons.forEach((button, i) => {
      button.disabled = false;
      button.addEventListener('click', () => {
        selectedOptionIndex = i;
        console.log(selectedOptionIndex);
    });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const pollSelect = document.getElementById('poll-select');
  polls = [
    {
      question: 'Кого вы любите больше? (тестовый вопрос)',
      options: ['Кошек', 'Собак', 'Не люблю животных'],
      votes: [0, 0, 0],
      voters: []
    }
  ];

  updatePollSelect();

  pollSelect.addEventListener('change', function() {
    showPollOptions(pollSelect.value);
  });
});


const createPollLink = document.querySelector('a[href="#create-poll"]');
const voteLink = document.querySelector('a[href="#vote"]');
const createPollBlock = document.getElementById('create-poll');
const voteBlock = document.getElementById('vote');


createPollLink.addEventListener('click', function() {
if (createPollBlock.style.display === 'none') {
    createPollBlock.style.display = 'block';
    voteBlock.style.display = 'none';
    }
});

voteLink.addEventListener('click', function() {
if (voteBlock.style.display === 'none') {
    voteBlock.style.display = 'block';
    createPollBlock.style.display = 'none';
    }
});