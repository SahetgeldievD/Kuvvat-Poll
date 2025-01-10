let polls = [];
let selectedOptionIndex = -1;
document.getElementById('create-poll').style.display = 'none';

// Обновляем список опросов
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

// Показываем варианты опроса
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
      if (!validatePhoneNumber(phoneNumber)) {
        alert('Неправильный номер телефона!');
        return;
      }
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

// Обновляем варианты опроса после голосования
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

// Событие изменения номера телефона
const phoneNumberInput = document.getElementById('phone-number');
phoneNumberInput.addEventListener('input', function() {
  const pollIndex = document.getElementById('poll-select').value;
  const poll = polls[pollIndex];
  const phoneNumber = document.getElementById('phone-number').value;
  if (!poll.voters.includes(phoneNumber)) {
    poll.voted = false; // Обновляем поле voted
    selectedOptionIndex = -1; // Обнуляем значение selectedOptionIndex
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

// Показываем результаты опроса
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

document.addEventListener('DOMContentLoaded', function() {
  const pollForm = document.getElementById('poll-form');
  const pollSelect = document.getElementById('poll-select');
  const pollOptionsDiv = document.getElementById('poll-options');
  const resultsDiv = document.getElementById('results');

  // Инициализируем данные
  polls = [
    {
      question: 'Кого вы любите больше? (тестовый вопрос)',
      options: ['Кошек', 'Собак', 'Не люблю животных'],
      votes: [0, 0, 0],
      voters: []
    }
  ];

  updatePollSelect();

  // Обработчик события повторного голосования
  document.getElementById('vote-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const pollIndex = document.getElementById('poll-select').value;
    const poll = polls[pollIndex];
    const phoneNumber = document.getElementById('phone-number').value;
  
    if (!validatePhoneNumber(phoneNumber)) {
      alert('Неправильный номер телефона!');
      return;
    }
  
    if (poll.voters.includes(phoneNumber)) {
      alert('Вы уже проголосовали!');
      return;
    }
  
    if (selectedOptionIndex === -1) {
      alert('Выберите вариант ответа!');
      return;
    }
  
    poll.votes[selectedOptionIndex]++;
    poll.voters.push(phoneNumber);
    poll.voted = true;
    showResults(pollIndex);
    updatePollOptions(pollIndex);
    alert('Ваш голос учтен!');
  });

  pollForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const question = document.getElementById('question').value;
    const options = document.getElementById('options').value.split('\n');

    const poll = {
      question,
      options,
      votes: Array(options.length).fill(0),
      voters: []
    };

    polls.push(poll);
    updatePollSelect();

    alert('Опрос создан!');
    pollForm.reset();
  });

  pollSelect.addEventListener('change', function() {
    showPollOptions(pollSelect.value);
  });
});

// Функция для проверки номера телефона
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  return phoneRegex.test(phoneNumber);
}

const createPollLink = document.querySelector('a[href="#create-poll"]');
const voteLink = document.querySelector('a[href="#vote"]');
const createPollBlock = document.getElementById('create-poll');
const voteBlock = document.getElementById('vote');


// Добавляем обработчики события клика на ссылки
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