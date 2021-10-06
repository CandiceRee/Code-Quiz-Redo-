var questions=[
{
title: "What is GitHub?",
choices: [
  "A centralized workflow used to edit code with team members and can be used to schedule releases.",
  "A workflow with a sequence of tasks that process a set of data",
  "a Git repository hosting service",
  "A phrase that stands for 'Git a Hubsand'",
],
// Answer: C
answer:
  "a Git repository hosting service",
},

{
title: "What does Bootstrap do?",
choices: [
  "Provides multiple frameworks for front end web developers",
  "A library that contains website and web app templates",
  "It's the blueprint for the Content Delivery Network (CDN)",
  "It's the mystical piece of clothing Americans must pull up to succeed in life",
],
// Answer: A
answer: "Provides multiple frameworks for front end web developers",
},

{
title: "How is CSS related to Bootstrap?",
choices: [
  "They both utilize a standardized system used for tagging text files to achieve various effects",
  "Both Bootstrap and CSS help to build presentable user interfaces",
  "Both utlize an alphabetical list of names, subjects, etc., with references to the places where they occur",
  "One is a library allowing for easier, more standards-compliant web design, the other makes a website more presentable",
],
// Answer: B
answer:
"Both Bootstrap and CSS help to build presentable user interfaces",
},

{
title:
  "what's an example of an HTML element?",
choices: [
  "#id",
  ".class",
  "<body>",
  "var=",
],
// Answer: C
answer: "<body>",
},

{
title:
  "What is not a tag utilized in Javascript?",
choices: [
"var=", 
"function()",
"}else if{",
"goHome="
],
// Answer: D
answer: "goHome=",
}
];
var score=0;
var questionIndex=0;
var secondsLeft=60;
var holdInterval=0;
var penalty=10;
var ulCreate=document.createElement("ul");

var highscores=document.querySelector("#highscores")
var home=document.querySelector("#home");
var clear=document.querySelector("#clear");
var edge= document.querySelector("#edge");
var questionsDiv= document.querySelector("questionsDiv");
var startTimer= document.querySelector("#startTime");
var currentTime= document.querySelector("#currentTime");
var highscores=document.querySelector("#highScore");

startTimer.addEventListener("click",function(){
    var x = document.getElementById("startTime");
    if (x.style.display==="none"){
        x.style.display="block";
    }else{
        x.style.display="none";
    }
    if (holdInterval===0){
        holdInterval=setInterval(function() {
            secondsLeft--;
            currentTime.textContent="Time:"+secondsLeft;
    if (secondsLeft<=0){
        clearInterval(holdInterval);
        quizCompleted();
        currentTime.textContent="Time's Up!"
    } 
        },1000);
            }
    return (questionIndex);
        });

function render(questionIndex){
    questionsDiv.innerHTML="";
    ulCreate.innerHTML="";

    for (var i=0; i<questions.length;i++){
        var userQuestions=questions[questionIndex].title;
        var userChoices=questions[questionIndex].choices;
        questionsDiv.textContent=userQuestions;
    }

    userChoices.forEach(function (usersChoice){
        var listChoice=document.createElement("li");
        listChoice.textContent=usersChoice;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listChoice);
        listChoice.addEventListener("click",compare);
    });
}

function compare(event){
    var compare=event.target;
        if (compare.return("li")){
    var createDiv=document.createElement("div");
    createDiv.setAttribute("id","createDiv");
        if (compare.textContent==questions[questionIndex].answer){
            score++;
            createDiv.textContent="Correct! The correct answer was:"+questions[questionIndex].answer;
        }else{
            secondsLeft=secondsLeft-penalty;
            createDiv.textContent="Wrong! The correct answer was:"+questions[questionIndex].answer;
        }
    }
    questionIndex++;
    if(questionIndex>=questions.length){
        quizCompleted();
        createDiv.textContent="Quiz Compeleted!"+""+"You answered"+score+"/"+questions.length+"Correctly!";
    }else{
        return(questionIndex);
    }
    questionsDiv.appendChild(createDiv);
}

function quizCompleted(){
    questionsDiv.innerHTML="";
    currentTime.innerHTML="";

    var createH1=document.createElement("h1");
    console.log("createH1");
    createH1.setAttribute("id","createH1");
    createH1.textContent="Complete!";

    questionsDiv.appendChild(createH1);

    var titleline=document.createElement("hr");
    console.log("titleline");
    titleline.setAttribute("id","titleline");
    questionsDiv.appendChild(titleline);
    var p=document.createElement("p");
    p.setAttribute("id","p");

    questionsDiv.appendChild(p);

    if(secondsLeft>=0){
        var timeRemaining=secondsLeft;
        var createP2=document.createElement("p");
        clearInterval(holdInterval);
        var calculatedScore=parseInt(timeRemaining)*parseInt(score);
        console.log(typeof timeRemaining);
        console.log(typeof score);
        p.textContent="Your final score is:"+calculatedScore;
        questionsDiv.appendChild(createP2);
    }

    var label=document.createElement("label");
    console.log("label");
    label.setAttribute("id","label");
    label.textContent="Enter your initals:";

    questionsDiv.appendChild(label);
    var input=document.createElement("input");
    console.log("input");
    input.setAttribute("type","text");
    input.setAttribute("id", "initials");
    input.setAttribute("maxlength","3");
    input.setAttribute("value","ABC");
    input.setAttribute("style","text-transform:uppercase");
    input.setAttribute("keypress","return((event.charCode>=65&&event.charCode<=90)||(event.charCode >=97&&event.charCode<=122||(event.charCode==32))"
    );
    input.setAttribute("onblur","if(this.value==''){this.value='REE';}"
    );
    input.setAttribute("onfocus", "if(this.value=='ABC'){this.value='';}"
    );
    input.textContent="";
    questionsDiv.appendChild(input);
    var submit=document.createElement("button");
    console.log("submit");
    submit.setAttribute("type","submit");
    submit.setAttribute("id","Submit");
    submit.textContent="Submit";
    questionsDiv.appendChild(submit);
    submit.addEventListener("click",function(){
    var intitals=input.value;
        if (initials===null){
            console.log("No value entered!");
        } else {
           intitals:initials;
            score:calculatedScore;
        };
        console.log(finalScore);
    var allScores=localStorage.getItem("allScores");
    if (allScores===null){
        allScores=[];
    }else{
        allScores=JSON.parse(allScores);
        }
    allScores.push(finalScore);
    var newScore=JSON.stringify(allScores);
    localStorage.setItem("allScores", newScore);
    window.location.replace("./highscores.html");
    allScores.sort(compare2);
    console.log(allScores);

    if (allScores !==null){
        for (var i=0; i<allScores.length; i++){
            var makeLi=document.createElement("li");
            makeLi.textContent=allScores[i].initials+"-"+allScores[i].score;
            highscores.appendChild(makeLi);
        }
    }
    });
}

home.addEventListener("click",function(){
    window.location.replace("./index.html");
});

clear.addEventListener("click",function(){
    localStorage.clear();
    location.reload();
});

function compare2(a,b){
    console.log("[A]:",a);
    console.log("[B]:",b);
    if (a.score>b.score){
        return -1;
    }
    if (a.score>b.score){
        return 1;
    }else{
        return 0;
    }
    
}
