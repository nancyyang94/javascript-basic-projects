const section = document.querySelector('.section-center');

const questions = ['do you accept all major credit cards?', 'do you support local farmers?', 'do you use organic ingredients?'];

const answer = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.';

// create a question div for each string
// add the question class name to the div
// add the current question string as a child within question div
// add question title class to the string

questions.forEach((question) => {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  const questionTitleContainer = document.createElement('div');
  questionTitleContainer.classList.add('question-title');

  const questionTitleText = document.createElement('p');
  questionTitleText.classList.add('question-title-p');

  questionTitleText.innerText = question;
  questionTitleContainer.appendChild(questionTitleText);

  const questionTextContainer = document.createElement('div');
  questionTextContainer.classList.add('question-text');

  const questionText = document.createElement('p');
  questionText.innerText = answer;
  questionTextContainer.appendChild(questionText);

  function handleButtonClick(e) {
    const currentQuestion = e.target.parentNode.parentNode;
    currentQuestion.classList.toggle('show-text');

    const allQuestions = document.querySelectorAll('.question');

    allQuestions.forEach((item) => {
      if (item !== currentQuestion) {
        item.classList.remove('show-text');
      }
    });
  }

  const button = document.createElement('button');
  button.classList.add('btn', 'question-btn');
  questionTitleContainer.appendChild(button);
  button.addEventListener('click', handleButtonClick);

  questionDiv.appendChild(questionTitleContainer);
  questionDiv.appendChild(questionTextContainer);
  section.appendChild(questionDiv);
});
