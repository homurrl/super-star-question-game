const QuestionDB = [
    {
        Question: "What is Full Form of HTML?",
        a: "HighText Machine Language",
        b: "HyperText and links Markup Language",
        c: "HyperText Markup Language",
        d: "None of these",
        ans: "c"
    },
    {
        Question: "Which of the following element is responsible for making the text bold in HTML?",
        a: "<pre>",
        b: "<a>",
        c: "<b>",
        d: "<br>",
        ans: "c"
    },
    {
        Question: "The full form of CSS is:",
        a: "Cascading Style Sheets",
        b: "Coloured Special Sheets",
        c: "Color and Style Sheets",
        d: "None of these",
        ans: "a"
    },
    {
        Question: "What type of CSS is generally recommended for designing large web pages?",
        a: "Inline",
        b: "Internal",
        c: "External",
        d: "None of Above",
        ans: "c"
    },
    {
        Question: "The CSS property used to specify the transparency of an element is?",
        a: "opacity",
        b: "visibility",
        c: "filter",
        d: "None of the above",
        ans: "a"
    },
    {
        Question: "A sequence of instructions in a computer language to get the desired result is known as :",
        a: "Algorithm",
        b: "Program",
        c: "A decision table",
        d: "None of the above",
        ans: "b"
    },
    {
        Question: "Which is valid C expression?",
        a: "int my_num = 100,000;",
        b: "int my_num = 100000;",
        c: "int my num = 1000;",
        d: "int $my_num = 10000;",
        ans: "b"
    },
    {
        Question: "What is #include <stdio.h> in c?",
        a: "Preprocessor directive",
        b: "Inclusion directive",
        c: "File inclusion directive",
        d: "None of the above",
        ans: "a"
    },
    {
        Question: "The C-preprocessors are specified with _________ symbol.",
        a: "||",
        b: "&",
        c: "%",
        d: "#",
        ans: "d"
    },
    {
        Question: "The CSS property used to specify the transparency of an element is?",
        a: "opacity",
        b: "visibility",
        c: "filter",
        d: "None of the above",
        ans: "a"
    },
]

const nameInput = document.getElementById("name");
const continueButton = document.getElementById("continueButton");
const updatedName = document.getElementById("updated-name");
const form = document.getElementById("intial-form")
const startButton = document.getElementById("startButton");
const instructions = document.getElementById("instructions");
const submitButton = document.getElementById("submit-Button");
const QuestionBox = document.getElementById("Question-Box");
const scoreBox = document.getElementById("Score-box");
const userScore = document.getElementById("user-Score");
const countdownEl = document.getElementById("countdown");

const playAgain = document.getElementById("Play-Again");



let count = 300;
let index = 0, correct = 0, totalQuestions = QuestionDB.length;
let questionHeading = document.getElementById("question-heading");
let userInputs = document.querySelectorAll("input[type='radio']")


continueButton.addEventListener('click', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
    } else {
      const name = nameInput.value;
      form.style.display = "none";
      updatedName.innerHTML = "Hello, " + name;
      instructions.style.display = "flex";
    }
  });

  
startButton.addEventListener("click", function() {
    updatedName.innerHTML = "Hello";
    instructions.style.display = "none";
    loadQuestion()
    QuestionBox.style.display = "flex";
    //set time
    let intervalID = setInterval(() => {
        let minutes = Math.floor(count / 60);
        let seconds = count % 60;
        countdownEl.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        count--;
    
        if (count < 0 || totalQuestions === index) {
            clearInterval(intervalID);
            QuizEnd()
        }
      }, 1000);
});

  
// JS for Questions  
submitButton.addEventListener("click", function() {
    // Load previous answer and check if that is correct or not.
    const QuestionData = QuestionDB[index]
    let userAns;
    userInputs.forEach(
        (eachInput) => {
            if (eachInput.checked) {
                userAns = eachInput.value;
            }
        }
    )    
    console.log(userAns)
    console.log(QuestionData.ans)
    if (userAns === QuestionData.ans) {
        correct++;
        console.log("Correct!")
    } else {
        console.log("Not Correct!")
    }
    index++;
    loadQuestion()
});

playAgain.addEventListener("click", function() {
    form.style.display = "flex";
    scoreBox.style.display = "none";
    count = 300;
    correct = 0;
    index = 0;
});

const loadQuestion = () => {
    // Reset all the previous answers
    if(totalQuestions === index){
        //do nothings
    } else {
        userInputs.forEach(
            (eachInput) => {eachInput.checked = false;}
        )
    
        const QuestionData = QuestionDB[index]
        questionHeading.innerHTML = `${index + 1}) ${QuestionData.Question}`
        userInputs[0].nextElementSibling.innerText = QuestionData.a
        userInputs[1].nextElementSibling.innerText = QuestionData.b
        userInputs[2].nextElementSibling.innerText = QuestionData.c
        userInputs[3].nextElementSibling.innerText = QuestionData.d
    }
}  

const QuizEnd = () =>{
    QuestionBox.style.display = "None";
    userScore.innerHTML = "Your Score is "+ correct + " .";
    scoreBox.style.display = "flex";
    index = 0;
}

const hideBoxs = () => {
    QuestionBox.style.display = "None";
    instructions.style.display = "None";
}

hideBoxs()