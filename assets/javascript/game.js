// call jQuery
$(document).ready(function() {
    // create random number to match between 25 and 135
    var randomNumberGenerator = Math.round(Math.random() * 110) + 25;
        // add the random number to Match This Number text
        $(".RandomNumberToMatch").html("&#x25C8; Match This Score: " + randomNumberGenerator + " &#x25C8;");

    // create random numbers per gem between 1 and 16 AND add the random number to gems
    var rubyRandomNumber = Math.round(Math.random() * 15) + 1;
        $(".rubyGem").data(rubyRandomNumber);
        // adding console log to test random numbers are being generated
        console.log("ruby", rubyRandomNumber);
    var sapphireRandomNumber = Math.round(Math.random() * 15) + 1;
        $(".sapphireGem").data(sapphireRandomNumber);
        console.log("saf", sapphireRandomNumber);
    var emeraldRandomNumber = Math.round(Math.random() * 15) + 1;
        $(".emeraldGem").data(sapphireRandomNumber);
        console.log("eme", emeraldRandomNumber);
    var diamondRandomNumber = Math.round(Math.random() * 15) + 1;
        $(".diamondGem").data(rubyRandomNumber);
        console.log("dia", diamondRandomNumber);

    // set Total Score var
    var totalScore = 0;
        // add the score value to score text
        $(".score").html("Your Current Score: " + totalScore);

    // set wins var
    var totalWins = 0;
        // add the score value to score text
        $(".wins").html("Wins: " + totalWins);

    // set losses var
    var totalLosses = 0;
        // add the score value to score text
        $(".losses").html("Losses: " + totalWins);

});


// For some reason, I kept getting jQuery error when using ids instead of classes.
// Also, when I had my html have classes and my JS have #s, the math still worked.