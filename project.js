let currentQuestion = 1;
let totalQuestions = 10;
let score = 0;

const startButton = document.querySelector('.start');
let currentOperator;

const eventListener = () => {
  operatorQuestion();
  startButton.classList.add('clear');
};
startButton.addEventListener('click', eventListener);

// second step
function operatorQuestion() {

  //****** operators declaration ********************************
  let operators = document.querySelector('.operators');
  let html = `<button class = "addition operator" onclick = "
              generateQuestion('+');">Addition</button>
              <button class = "subtraction operator" onclick = "
              generateQuestion('-');">Subtraction</button>
              <button class = "multiplication operator" onclick = "
              generateQuestion('*');">Multiplication</button>
              <button class = "division operator" onclick = "
              generateQuestion('/');">Division</button>`;
  operators.innerHTML = html;
  const levels = Math.random();
  let level = '';
  if (levels >= 0 && levels < 1/3){
    level = 'easy';
  } else if(levels >= 1/3 && levels < 2/3){
    level = 'medium';
  } else if(levels >= 2/3 && levels < 1) {
    level = 'hard';
  }
  return level;
}

function generateQuestion(operator) {
  if(!currentOperator) {
    currentOperator = operator;
  }
  
  const levels = operatorQuestion();
  let firstNumber = Number();
  let secondNumber = Number();
  let dataAnswer = '';
    if (operator === '+'){
      if(levels === 'easy'){
        firstNumber = Math.round(Math.random() * 10);
        secondNumber = Math.round(Math.random()*10); 
      }else if(levels === 'medium'){
        firstNumber = Math.round(Math.random() * 100);
        secondNumber = Math.round(Math.random()*100);
      }else if(levels === 'hard') {
        firstNumber = Math.round(Math.random() * 1000);
        secondNumber = Math.round(Math.random()*1000);
      }
      dataAnswer = firstNumber + secondNumber;

    } else if (operator === '-'){
    if(levels === 'easy'){
      firstNumber = Math.round(Math.random() * 10);
      secondNumber = Math.round(Math.random()*10); 
    }else if(levels === 'medium'){
      firstNumber = Math.round(Math.random() * 100);
      secondNumber = Math.round(Math.random()*100);
    }else if(levels === 'hard') {
      firstNumber = Math.round(Math.random() * 1000);
      secondNumber = Math.round(Math.random()*1000);
    }
    dataAnswer = firstNumber - secondNumber;

  }else if (operator === '*'){
    if(levels === 'easy'){
      firstNumber = Math.round(Math.random() * 10);
      secondNumber = Math.round(Math.random()*10); 
    }else if(levels === 'medium'){
      firstNumber = Math.round(Math.random() * 100);
      secondNumber = Math.round(Math.random()*100);
    }else if(levels === 'hard') {
      firstNumber = Math.round(Math.random() * 100);
      secondNumber = Math.round(Math.random()*100);
    }
    dataAnswer = firstNumber * secondNumber;
  
  }  else if (operator === '/'){
    if(levels === 'easy'){
      firstNumber = Math.round(Math.random() * 10);
      secondNumber = Math.round(Math.random()*10); 
    }else if(levels === 'medium'){
      firstNumber = Math.round(Math.random() * 100);
      secondNumber = Math.round(Math.random()*10);
    }else if(levels === 'hard') {
      firstNumber = Math.round(Math.random() * 100);
      secondNumber = Math.round(Math.random()*10);
    }
    dataAnswer = firstNumber / secondNumber;
  }
 
  let userAnswer =document.querySelector('.answer-box').innerHTML;
  let answerBox =document.querySelector('.answer-box')
  let myAnswer = answerBox.classList.add('visible');
  const question = `${firstNumber} ${operator} ${secondNumber}`;

  document.querySelector('.question').innerHTML =
  `Question ${currentQuestion}: ${question} = ${userAnswer}`;
  document.querySelector('.button').innerHTML = `<button class = "submit" onclick = "checkAnswer();">Submit</button>`;
  const answer = eval(question);

  return{ question, answer};

}


function displayQuestion() {
  const {question} = generateQuestion(currentOperator);
  
  document.getElementsByClassName('question')[0].textContent =
  `Question ${currentQuestion}: ${question} =`;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const{answer} = generateQuestion(currentOperator);

  if(!isNaN(userAnswer)) {
    if(userAnswer === answer){
      score ++;
    }
    currentQuestion ++;
    if (currentQuestion <= totalQuestions){
      displayQuestion();
  
  document.getElementById('answer').value = '';

  document.getElementById('feedback').textContent = `Score: ${score}`
    } else {
      endGame();
    }
  }  else {
    alert('Please enter a valid number.');
  }
}


function endGame() {
  document.querySelector('.quiz-container').innerHTML =`
  <h2>Game Over</h2>
  <p class = "score">Your final score is: ${score} out of ${totalQuestions}</p>`;
  document.querySelector('.restart-para').innerHTML = `
  <button class="restart" onclick = "
 ">RESTART</button>`;
}

// const restartButton = document.querySelector('.restart-para');
// restartButton.addEventListener('click', eventListener);
