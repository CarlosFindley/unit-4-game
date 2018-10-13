// call jQuery
$(document).ready(function() {
    // create random number to match between 25 and 135
    var randomNumberGenerator = Math.round(Math.random() * 110) + 25;
        // add the random number to Match This Number text
        $(".RandomNumberToMatch").html("Match This Number: " + randomNumberGenerator);

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


});


// For some reason, I kept getting jQuery error when using ids instead of classes.
// Also, when I had my html have classes and my JS have #s, the math still worked.