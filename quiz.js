const questions = [
  {
    que: "Which of the following is markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },

  {
    que: "In which year JavaScript was launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },

  {
    que: "What does CSS stands for?",
    a: "Hyper Text Markup Language",
    b: "Cascaded Styling Sheets",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const LoadQues = () => {
    if(index === total) {
       return endQuiz();
    }else {
        reset();
    }
  const data = questions[index];
  quesBox.innerText = ` ${index + 1}) ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
  const ans = getAns();
  const data = questions[index];
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  LoadQues();
  return;
};

const getAns = () => {
    let answer;
  optionInputs.forEach(
    (input) => {
        if (input.checked) {
        answer = input.value;
    }
  }
  )
  return answer;
} 

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
     document.getElementById('box').innerHTML = `
     <div style="text-align :center ">
     <h2>Thank You for playing the quiz</h2>
     <h2>${right} / ${total} are correct </h2>
     </div>
     `
}

LoadQues();
