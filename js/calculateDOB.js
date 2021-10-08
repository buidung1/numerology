function calculateDOB(day, month, year) {
    sum = calculateDay(day) + calculateMonth(month) + calculateYear(year);
    sum = reducePeriodNum(sum);
    return sum;
}

function calculateDay(day) {
    if (checkMasterNumber(day)){
        return day;
    }
    else{
        day = reduceNum(day);
        return day;
    };
}

function calculateMonth(month) {
    if (checkMasterNumber(month)){
        return month;
    }
    else{
        month = reduceNum(month);
        return month;
    };
}

function calculateYear(year) {
    if (checkMasterNumber(year)){
        return year;
    }
    else{
        year = reduceNum(year);
        return year;
    };
}

function displayMasterNumber(day, month, year) {
    var calculated = calculateDOB(day, month, year);
    var masterNumber = reduceNum(calculated);
    if (calculated != masterNumber) {
        message = "your Master Number is: "+calculated+"/"+masterNumber;
    }
    else {
        message = "your Master Number is: "+calculated;
    }
    showExpression(reduceNumFinal(masterNumber), "master");
    return message;
}