// call jQuery
$(document).ready(function() {
    // create random number to match between 25 and 135
    var randomNumberGenerator = Math.round(Math.random() * 110) + 25;
        // add the random number to Match This Number text
        $(".RandomNumberToMatch").html("&#x25C8; Match This Score: " + randomNumberGenerator + " &#x25C8;");

    // set Total Score var
    var totalScore = 0;
    //console.log(totalScore)  the answer here is 0 ;
        // add the score value to score text
        $(".score").html("Your Current Score: " + totalScore);

    // set wins var
    var totalWins = 0;
        // add the score value to score text
        $(".wins").html("Wins: <b></b>" + totalWins);

    // set losses var
    var totalLosses = 0;
        // add the score value to score text
        $(".losses").html("Losses: <b></b>" + totalLosses);

    // create random numbers per gem between 1 and 16
    var rubyRandomNumber = Math.round(Math.random() * 5) + 1;
    var sapphireRandomNumber = Math.round(Math.random() * 10) + 1;
    var emeraldRandomNumber = Math.round(Math.random() * 12) + 1;
    var diamondRandomNumber = Math.round(Math.random() * 15) + 1;

    // sound effects
    var crystalSound = new Audio("audio/crystalCollect.mp3"); // resource https://freesound.org/people/bradwesson/sounds/135936/#
    var winSound = new Audio("audio/win.mp3");
    var loseSound = new Audio("audio/lose.mp3");

    // create reset function
    var reset = function() {
        // resetting random number var
        randomNumberGenerator = Math.round(Math.random() * 110) + 25;
            $(".RandomNumberToMatch").html("&#x25C8; Match This Score: " + randomNumberGenerator + " &#x25C8;");
        // resetting score var
        totalScore = 0;
            $(".score").html("Your Current Score: " + totalScore);
        // resetting gems random numbers vars
        rubyRandomNumber = Math.round(Math.random() * 5) + 1;
        sapphireRandomNumber = Math.round(Math.random() * 10) + 1;
        emeraldRandomNumber = Math.round(Math.random() * 12) + 1;
        diamondRandomNumber = Math.round(Math.random() * 15) + 1;
    };

     // check if computer score and user score match
     function scoreCheck() {
        if (totalScore === randomNumberGenerator) {
            totalWins++;
            winSound.play();
            winSound.currentTime = 0;
            $(".wins").html("Wins: <b></b>" + totalWins);
            reset();
        } else if (totalScore > randomNumberGenerator) {
            totalLosses++;
            loseSound.play();
            loseSound.currentTime = 0;
            $(".losses").html("Losses: <b></b>" + totalLosses);
            reset();
        }
    };

    // add gem scores to total score
    $(".ruby").on("click", function () {
        crystalSound.play();
        crystalSound.currentTime = 0;
        totalScore += rubyRandomNumber;
        $(".score").html("Your Current Score: " + totalScore);
        scoreCheck();
    });

    $(".sapphire").on("click", function () {
        crystalSound.play();
        crystalSound.currentTime = 0;
        totalScore += sapphireRandomNumber;
        $(".score").html("Your Current Score: " + totalScore);
        scoreCheck();
    });

    $(".emerald").on("click", function () {
        crystalSound.play();
        crystalSound.currentTime = 0;
        totalScore += emeraldRandomNumber;
        $(".score").html("Your Current Score: " + totalScore);
        scoreCheck();
    });

    $(".diamond").on("click", function () {
        crystalSound.play();
        crystalSound.currentTime = 0;
        totalScore += diamondRandomNumber;
        $(".score").html("Your Current Score: " + totalScore);
        scoreCheck();
    });
});


// For some reason, I kept getting jQuery error when using ids instead of classes.
// Also, when I had my html have classes and my JS have #s, the math still worked.
