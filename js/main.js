import { questions } from './questions.js';

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
