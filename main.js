const questions = [
  {
    id: 1,
    question: 'Explain event delegation.',
    completed: false,
  },
  {
    id: 2,
    question: 'Explain how this works in JavaScript.',
    completed: false,
  },
  {
    id: 3,
    question: 'Explain how prototypal inheritance works.',
    completed: false,
  },
  {
    id: 4,
    question: 'What is a closure, and how/why would you use one?',
    completed: false,
  },
  {
    id: 5,
    question: 'What s a typical use case for anonymous functions?',
    completed: false,
  },
  {
    id: 6,
    question: 'What s the difference between host objects and native objects?',
    completed: false,
  },
  {
    id: 7,
    question: 'Explain "hoisting".',
    completed: false,
  },
  {
    id: 8,
    question: 'Describe event bubbling.',
    completed: false,
  },
];

function renderQuestions() {
  const listQuestion = document.querySelector('#listQuestion');
  questions.forEach((question) => {
    const questionItem = document.createElement('a');
    questionItem.classList.add('panel-block');
    questionItem.innerHTML = `
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      ${question.question}
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
    `;
    const button = document.createElement('button');
    button.classList.add('button', 'is-primary', 'is-light');
    button.textContent = 'Completed';
    button.addEventListener('click', () => {
      question.completed = true;
      button.classList.add('is-success');
      button.disabled = true;
    });
    if (question.completed) {
      button.classList.add('is-success');
      button.disabled = true;
    }
    questionItem.appendChild(button);
    listQuestion.appendChild(questionItem);
  });
}

renderQuestions();
