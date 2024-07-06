localStorage.removeItem("User 1")
localStorage.removeItem("User 2")
var player1_score = 0
var player2_score = 0
var answer = 0
function addUser(){
    localStorage.setItem("User 1", document.getElementById("user_in_1").value)
    localStorage.setItem("User 2", document.getElementById("user_in_2").value)
    if (localStorage.getItem("User 1") == "" || localStorage.getItem("User 2") == ""){
        document.getElementById("error_tex").innerHTML="Error, User name empty";
        setTimeout(function(){
            document.getElementById("error_tex").innerHTML = ""
        }, 500)
    }else{
        location.href = "http://127.0.0.1:5500/New%20folder/index2.html"
    }
}
function setup(){
    document.getElementById("player1_name").innerHTML = localStorage.getItem("User 1") + ": " + player1_score
    document.getElementById("player2_name").innerHTML = localStorage.getItem("User 2") + ": " + player2_score
    document.getElementById("player_question").innerHTML = "Question Turn- " + localStorage.getItem("User 1")
    document.getElementById("player_answer").innerHTML = "Answer Turn- " + localStorage.getItem("User 2")
}
function askQuestion(){
    label1 = document.getElementById("number1").value
    label2 = document.getElementById("number2").value
    answer = Number(label1) * Number(label2)
    document.getElementById("answer_part").style.display = "block";
    document.getElementById("Question").innerHTML = label1 + "X" + label2
}
function checkAnswer(){
    var answer2 = Number(document.getElementById("answer_lebel").value)
    if (answer2 == answer){
        player2_score+=1
        document.getElementById("player2_name").innerHTML = localStorage.getItem("User 2") + ": " + player2_score
        document.getElementById("answer_part").style.display = "none";
    }else{
        player1_score+=1
        document.getElementById("player1_name").innerHTML = localStorage.getItem("User 1") + ": " + player1_score
        document.getElementById("answer_part").style.display = "none";
    }

}
