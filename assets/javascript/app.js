var seconds= 90;
var answers = {} ;
var intervalId;

$( document ).ready(function() {
    console.log( "ready!" );
  
$(".startButton").on("click", run);


function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    $(".startButton").toggleClass("startButtonDisplay");
    $(".questionBox").toggleClass("questionBoxDisplay");
    
  }
    
  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    seconds--;

    //  Show the number in the #show-number tag.
    $(".timeDisplay").html("<h2>" + seconds + "</h2>");


    //  Once number hits zero...
    if (seconds === 0) {

      //  ...run the stop function.
      
      // clearInterval(intervalId);
      endGame();
      //  Alert the user that time is up.
      // $(".questionBox").toggleClass("questionBoxDisplay");
      // $(".finalBox").toggleClass("finalBoxDisplay");
      // $(".outerBox").toggleClass("outerBoxDisplay");

    }
  }

 
  //right answers and wrong answers for buttons
  //hold right answers and wrong answers
  //count correct answers
  //count unanswered questions

  //count rightAnswers





  var rightAnswerCount = 0;
  var unansweredCount = 8;
  $(".buttonOne").click(function(){
    // (".buttonOne").removeClass("buttonColorDisplay");
    // (this).toggleClass("buttonColorDisplay");
  });
  $(".rightAnswer").click(function(){
    console.log(this.dataset.question)

    //check if button has been clicked
    // if(this.classList.contains("hasBeenClicked")){
    //   console.log("has been clicked")
    //   return 
    // }

    $(this).addClass("hasBeenClicked");
    // $(this).toggleClass("buttonColorDisplay")
    // $(this).css("background-color", "red");
    var questionNumber = this.dataset.question
    answers[questionNumber] = true
    console.log("checkingAnswer", answers)

    // console.log(Object.values(answers))
    // var correctAnswers = 0;
    // var answerValues = Object.values(answers)
    // for(i=0; i <answerValues.length; i++){
    //   if(answerValues[i] === true){
    //     rightAnswerCount ++;
        

    //   }
    // }
    // console.log(rightAnswerCount)
    //if hasn't been clicked, continue
    // rightAnswerCount ++;
    unansweredCount --;
    // console.log(rightAnswerCount)
    $(".rightAnswerCount").text(rightAnswerCount);
    $(".unansweredCount").text(unansweredCount);
    checkUnansweredQuestions()
    // if (unansweredCount === 0){
    //   $(".questionBox").toggleClass("questionBoxDisplay");
    //   $(".finalBox").toggleClass("finalBoxDisplay");
    //   $(".outerBox").toggleClass("outerBoxDisplay");
    //   clearInterval(intervalId);
    // }
  });


  
  $(".wrongAnswer").click(function(){
    
    // if(this.classList.contains("hasBeenClicked")){
    //   console.log("has been clicked")
    //   return 
    // }

    $(this).addClass("hasBeenClicked");
    // $(this).toggleClass("buttonColorDisplay");
   
    // $(this).css("background-color", "red");
    var questionNumber = this.dataset.question
    answers[questionNumber] = false
    console.log("checkingAnswer", answers)
    unansweredCount --;
    // console.log(unansweredCount)
    $(".unansweredCount").text(unansweredCount);
    checkUnansweredQuestions()
    // if (unansweredCount === 0){
    //   $(".questionBox").toggleClass("questionBoxDisplay");
    //   $(".finalBox").toggleClass("finalBoxDisplay");
    //   $(".outerBox").toggleClass("outerBoxDisplay");
    //   clearInterval(intervalId);
    // }
  });
// function buttonColor(){
//   for
// }
function endGame(){
  $(".questionBox").toggleClass("questionBoxDisplay");
  $(".finalBox").toggleClass("finalBoxDisplay");
  $(".outerBox").toggleClass("outerBoxDisplay");
  clearInterval(intervalId);
   var correctAnswers = 0;
  var answerValues = Object.values(answers)
  for(i=0; i <answerValues.length; i++){
    if(answerValues[i] === true){
      rightAnswerCount ++;
      

    }
  }
  $(".rightAnswerCount").text(rightAnswerCount);
  
  console.log(rightAnswerCount)
}

function checkUnansweredQuestions(){
  var questionsAnswered = Object.keys(answers).length

  if (questionsAnswered === 8){
    endGame()
    

  }

}


  // if (unansweredCount === 0){
  //   $(".questionBox").toggleClass("questionBoxDisplay");
  //   $(".finalBox").toggleClass("finalBoxDisplay");
  //   $(".outerBox").toggleClass("outerBoxDisplay");
  // }
  

  

  // $(".rightAnswer").click(function(){
  //   console.log("test");
  // });

// var wrongAnswerCount = [8 - RightAnswerCount];
// var unansweredCount = [8 - wrongAnswerCount];
// $(".unansweredCount").text(unansweredCount);


});