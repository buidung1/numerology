// $.getScript("./calculateName.js",function(){
//     calculateMasterNumber();
//  });

// var pool = require('./database');

function Geeks(){
    
    var name = document.getElementById("name").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    name = name.toLowerCase();
    name = name.trim();
    

    if (name == ""){
        //document.getElementById("test").innerHTML = "please enter your name";
        alert("please enter your name");
    }
    else if ((day>31) || (day<1) || (day=="")) {
        //document.getElementById("test").innerHTML = "please enter valid day ( 1 - 31 )";
        alert("please enter valid day ( 1 - 31 )");
    }
    else if ((month>12) || (month<1) || (month=="")) {
        //document.getElementById("test").innerHTML = "please enter valid month ( 1 - 12 )";
        alert("please enter valid month ( 1 - 12 )");
    }
    else if (year<0 || (year=="")) {
        //document.getElementById("test").innerHTML = "please enter valid year";
        alert("please enter valid year");
    }
    else{
        document.getElementById("detail1").innerHTML = displayExpressionNumber(name);
        document.getElementById("detail2").innerHTML = displaySoulNumber(name);
        document.getElementById("detail3").innerHTML = displayPersonalityNumber(name);
        document.getElementById("detail4").innerHTML = displayMasterNumber(day, month, year);
        // document.getElementById("test").innerHTML = test();
        
    }
}

function displayExpressionNumber(name) {
    var calculated = calculateExpressionNumber(name);
    var expressionNumber = reduceNum(calculated);
    if (calculated != expressionNumber) {
        message = "your Expression Number is: "+calculated+"/"+expressionNumber;
    }
    else {
        message = "your Expression Number is: "+calculated;
    }
    //showExpression(reduceNumFinal(expressionNumber), "expression");
    return message;
}
function displaySoulNumber(name) {
    var calculated = calculateSoulNumber(name);
    var soulNumber = reduceNum(calculated);
    if (calculated != soulNumber) {
        message = "your Soul Number is: "+calculated+"/"+soulNumber;
    }
    else {
        message = "your Soul Number is: "+calculated;
    }

    //showExpression(reduceNumFinal(soulNumber), "soul");
    return message;

}
function displayPersonalityNumber(name) {
    var calculated = calculatePersonalityNumber(name);
    var personalityNumber = reduceNum(calculated);
    if (calculated != personalityNumber) {
        message = "your Personality Number is: "+calculated+"/"+personalityNumber;
    }
    else {
        message = "your Personality Number is: "+calculated;
    }
    //showExpression(reduceNumFinal(personalityNumber), "personality");
    return message;
}

// function test(){
//     return(pool[0]);
// }

