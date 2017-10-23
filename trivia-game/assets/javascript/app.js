$(document).ready(function() {

var triviaQuestions = [
	{
		question: "What is the capital of Australia?",
		answers: {
			a: 'Melbourne',
			b: 'Sydney',
			c: 'Canberra',
      d: 'Darwin'
		},
		correctAnswer: 'c',
		rightAnswer: 'Canberra'
	},
	{
		question: "What is the capital city of Spain?",
		answers: {
			a: 'Madrid',
			b: 'Barcelona',
			c: 'Valencia',
      d: 'San Sebastion'
		},
		correctAnswer: 'a',
		rightAnswer: 'Madrid'
	},
  {
		question: "What is the capital city of Nigeria?",
		answers: {
			a: 'Abuja',
			b: 'Accra',
			c: 'Adamstown',
      d: 'Amman'
		},
		correctAnswer: 'a',
		rightAnswer: 'Abuja'
	},
  {
		question: "What is the capital city of Ghana?",
		answers: {
      a: 'Abuja',
			b: 'Accra',
			c: 'Adamstown',
      d: 'Amman'
		},
		correctAnswer: 'b',
		rightAnswer: 'Accra'
	},
  {
		question: "What is the capital city of Turkey?",
		answers: {
      a: 'Ankara',
			b: 'Bursa',
			c: 'Konya',
      d: 'Istanbul'
		},
		correctAnswer: 'a',
		rightAnswer: 'Ankara'
	},
  {
		question: "What is the capital city of Brazil?",
		answers: {
      a: 'Brasilia',
			b: 'Rio de Janeiro',
			c: 'San Paulo',
      d: 'Salvador'
		},
		correctAnswer: 'a',
		rightAnswer: 'Brasilia'
	},
  {
		question: "What is the capital city of Canada?",
		answers: {
      a: 'Vancouver',
			b: 'Toronto',
			c: 'Montreal',
      d: 'Ottawa'
		},
		correctAnswer: 'd',
		rightAnswer: 'Ottawa'
	},
  {
		question: "What is the capital city of New Zealand?",
		answers: {
      a: 'Auckland',
			b: 'Wellington',
			c: 'Christchurch',
      d: 'Dunedin'
		},
		correctAnswer: 'b',
		rightAnswer: 'Wellington'
	},
  {
		question: "What is the capital city of Croatia?",
		answers: {
      a: 'Split',
			b: 'Dubrovnik',
			c: 'Zagreb',
      d: 'Zader'
		},
		correctAnswer: 'c',
		rightAnswer: 'Zagreb'
	},
  {
		question: "What is the capital city of Singapore?",
		answers: {
      a: 'Singapore',
			b: 'Georgetown',
			c: 'Kuala Lumpur',
      d: 'Batam'
		},
		correctAnswer: 'a',
		rightAnswer: 'Singapore'
	}
];

var questionCount = 0
var countDown = 30;
var intervalId;
var winCount = 0;
var loseCount = 0;
var unanswerCount = 0;
$("#playagain").hide();


$("#start").on("click", function() {
	//$("#map").addClass('magictime vanishOut');
		$("#start").hide();
		$("#map").hide();
		$("#left").show();
		$("#right").show();
		showQuestions();
});


function showQuestions() {
		$("#question").html(triviaQuestions[questionCount].question);
		$("#q1").html(triviaQuestions[questionCount].answers.a);
		$("#q2").html(triviaQuestions[questionCount].answers.b);
		$("#q3").html(triviaQuestions[questionCount].answers.c);
		$("#q4").html(triviaQuestions[questionCount].answers.d);
		runClock();
			if (questionCount ===9) {
				over();
			}
}

$(".qs").on("click", function() {
userGuess = $(this).attr("value");
	if (userGuess === triviaQuestions[questionCount].correctAnswer) {
		console.log("Correct Guess")
		winCount++;
		questionCount++
		$("#timer").hide()
		$("#result").show()
		$("#result").html("<img src='assets/images/correct.gif' height='200' width='400'><br />You are <b>correct</b>");
		clearInterval(intervalId);
		setTimeout(reset, 3000);
	} else {
		console.log("Incorrect Guess")
		loseCount++;
		questionCount++
		$("#timer").hide()
		$("#result").show()
		$("#result").html("<img src='assets/images/false.gif' height='250' width='400'></br /><b>Wrong</b>. The answer is " + triviaQuestions[questionCount -1].rightAnswer);
		clearInterval(intervalId);
		setTimeout(reset, 3000);
	}
});

function runClock(){
	$("#timer").show();
	$("#result").hide()
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
  countDown--;
  $("#timer").html(countDown);
    if (countDown === 0) {
			unanswerCount++
			questionCount++
			$("#timer").hide()
			$("#result").show()
			$("#result").html("You are out of time!!");
      console.log("Out of time");
			clearInterval(intervalId);
			setTimeout(reset, 3000);
   }
}

var reset = function() {
	countDown = 30
	showQuestions();
}

function over() {
	$("#gameresults").html("<h3>Your Results</h3><br /><b>Correct: </b>" + winCount + "<br /><b>Incorrect: </b>" + loseCount + "<br /><b>Unaswered: </b>" + unanswerCount )
	$("#left").hide();
	$("#right").hide();
	$("#playagain").show();

}

$("#playagain").on("click", function() {
	questionCount = 0
	countDown = 30;
	intervalId;
	winCount = 0;
	loseCount = 0;
	unanswerCount = 0;
	$("#start").hide();
	$("#gameresults").hide();
	$("#playagain").hide();
	$("#left").show();
	$("#right").show();
	showQuestions();
});



});
