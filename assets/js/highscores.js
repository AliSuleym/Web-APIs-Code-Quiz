

var choices1 = document.querySelector("#choices1")

var choices2 = document.querySelector("#choices2")

var choices3 = document.querySelector("#choices3")

var choices4 = document.querySelector("#choices4")

var submitButton = document.querySelector("#submit")

var clearButton = document.querySelector("#clear")



function displayHighscores () {

    var records = JSON.parse(window.localStorage.getItem("highscores"))

    console.log(records)

   for (var index = 0; index < records.length; index++){
   
   var newscore = document.createElement("li");

   highscores.append(newscore);
   
   newscore.textContent = records[index].name + " " + records[index].score;

}

}

displayHighscores();

clearButton.addEventListener("click", function(){

    localStorage.clear()
})

