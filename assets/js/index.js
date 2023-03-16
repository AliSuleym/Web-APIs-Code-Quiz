 var questionText = [  "Commonly used data types DO NOT include:",
         
  "The condition in an if/else statement is placed within ____",

  "Strings values must be enclosed within _____ when being assigned to variables",

  "a very useful tool used during development and debugging for printing to the debugger is:"
      
]
    
   var options = [

    ["strings", "booleans", "alerts", "numbers"],
    
    ["commas", "curly brackets", "quotes", "parentheses"],

    ["quotes", "curly brackets", "parentheses", "square brackets"],

    ["Javascript", "terminal/bash","for loops", "console log"],

]


 var answers =   [ "alerts" , "parentheses", "quotes", "console log"]


 var finalscore = 0;

var questionIndex = 0;

var startTime = document.querySelector("#start")

var questionsContainer = document.querySelector("#questions");

var wrapper = document.querySelector(".wrapper");

var timer = document.querySelector("#time")

var questionTitle = document.querySelector("#question-title")

var choices = document.querySelector("#choices")

var secondsRemaining = 75;

var startScreen = document.querySelector("#start-screen")

var choices1 = document.querySelector("#choices1")

var choices2 = document.querySelector("#choices2")

var choices3 = document.querySelector("#choices3")

var choices4 = document.querySelector("#choices4")

var button = document.querySelector(".answerButton")

var endScreen = document.querySelector("#end-screen")

var finalScore = document.querySelector(".final-score")

var highscores = document.querySelector("#highscores")

var initialsInput = document.querySelector("#initials")

var submitButton = document.querySelector("#submit")

var feedbackContainer = document.querySelector("#feedback")

var audioCorrect = new Audio('./sfx/correct.wav');

var audioWrong = new Audio('./sfx/incorrect.wav');

var initialsArray = []

var highscoresArray = []

function countDown(){

        if (secondsRemaining <= 0 || i > 3 ){

            clearInterval(timer);
        
        }
    
        else{
        
            secondsRemaining--;
        }


    timer.textContent = secondsRemaining;
  
}

function beginQuiz(){
    
   feedbackContainer.classList.remove("hide")

   setInterval(countDown, 1000)

   hideStartScreen();

   ScoreCalculator();

} 


function hideStartScreen(){

   startScreen.style.display = "none";

   questionsContainer.removeAttribute("hide")
    

};

startTime.addEventListener("click", beginQuiz)

startTime.addEventListener("click", showQuestions)

var i = 0;

function showQuestions(){

    questionsContainer.classList.remove("hide");

    questionTitle.textContent = questionText[i] 

    choices1.textContent = options[i][i]

    choices2.textContent = options[i][i+1]

    choices3.textContent = options[i][i+2]

    choices4.textContent = options[i][i+3]

    nextQuestion();
 
    return
}

 

 function nextQuestion(){


    choices.addEventListener("click", function(){

     i  = i + 1

     if ( secondsRemaining <= 0 ||  i >= 4 ){

        endQuiz();


     }


    questionTitle.textContent = questionText[i] 
        
    choices1.textContent = options[i][0]

    choices2.textContent = options[i][1]

    choices3.textContent = options[i][2]

    choices4.textContent = options[i][3]

 
})

}

function ScoreCalculator(){

    choices2.addEventListener("click", function(){
    
        if(choices2.textContent == answers[i]){
            
            let score1 = 0;
    
            score1  += 10
    
            console.log(score1)
        
            finalscore += score1
    
            feedbackContainer.textContent = "Right!"

            audioCorrect.play()
        }
    
        else{
    
            secondsRemaining -= 10
    
            feedbackContainer.textContent = "Wrong!"

            audioWrong.play()
        }
    })
    
    choices3.addEventListener("click", function(){
    
        if(choices3.textContent == answers[i]){
            
           
            let score2 = 0;
    
            score2  += 10
    
            console.log(score2)
        
            finalscore += score2
    
            feedbackContainer.textContent = "Right!"

            audioCorrect.play()
        
        }
    
        else{
            
            secondsRemaining -= 10
    
            feedbackContainer.textContent = "Wrong!"

            audioWrong.play()
        }
    })
    
    choices4.addEventListener("click", function(){
    
        if(choices4.textContent == answers[i]){
            
             let score3 = 0;
    
             score3 += 10;
    
            console.log(score3)
    
            finalscore += score3;
    
            feedbackContainer.textContent = "Right!"

            audioCorrect.play()
        
        }
    
        else{
            
            secondsRemaining -= 10
    
            feedbackContainer.textContent = "Wrong!"

            audioWrong.play()
        }
    
    })
        
    
    choices1.addEventListener("click", function(){
    
        if(choices1.textContent == answers[i]){
            
           let score4 = 0;
    
           score4 += 10
    
            console.log(score4)
         
            finalscore += score4;
    
            feedbackContainer.textContent = "Right!"

            audioCorrect.play()
        }
    
        else{
            
            secondsRemaining -= 10
    
            feedbackContainer.textContent = "Wrong!"

            audioWrong.play()
        }
    })
    
    }

function endQuiz() { 

    endScreen.classList.remove("hide")

    questionsContainer.style.display = "none";

    console.log(finalscore);

    finalScore.textContent = "Your final score is " + finalscore; 

}

submitButton.addEventListener("click", saveHighscores)


function saveHighscores() {

    var initials = initialsInput.value;

    let highscoresArray = JSON.parse(localStorage.getItem("highscores")) || [];

    var highscoresObject = {

        name: initials.toUpperCase(),

        score: finalscore,
    }

    highscoresArray.push(highscoresObject)

    window.localStorage.setItem("highscores", JSON.stringify(highscoresArray))

    window.location.href = "highscores.html";
}

