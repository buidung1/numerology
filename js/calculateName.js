
function splitName(name){
    const splitedName =[];
    check = true;
    while(check){
        if (name.indexOf(" ")<0){
            check = false;
            splitedName.push(name);
        }
        else {
            splitedName.push(name.substring(0, name.indexOf(" ")));
            replace = name.substring(0, name.indexOf(" ")) +" ";
            name = name.replace(replace, "");
        }
    }
    return(splitedName);
}

function calculateWord(word) {
    wordSum = 0;
    wordLeng = word.length;
    for(i=0; i<wordLeng; i++){
        num = transformLetter2Num(word.charAt(i));
        wordSum += num;
    }

    if (checkMasterNumber(wordSum)){
        return wordSum;
    }
    else{
        wordSum = reduceNum(wordSum);
        return wordSum;
    };
    
}

function calculateVowelWord(word) {
    vowelWordSum = 0;
    vowelWordLeng = word.length;
    for(i=0; i<vowelWordLeng; i++){
        letter = word.charAt(i);
        y_condition = (i!=0)&&((letter=="y")||(letter=="ý")||(letter=="ỷ")||(letter=="ỳ")||(letter=="ỹ")||(letter=="ỵ"));
        if (y_condition){
            vowelWordSum = vowelWordSum;
        }
        else if (isVowelY(letter)){
            num = transformLetter2Num(word.charAt(i));
            vowelWordSum += num;
        }
        
        // if (isVowel(letter)){
        //     num = transformLetter2Num(word.charAt(i));
        //     vowelWordSum += num;
        // }
    }
    if (checkMasterNumber(vowelWordSum)){
        return vowelWordSum;
    }
    else{
        vowelWordSum = reduceNum(vowelWordSum);
        return vowelWordSum;
    };
}

function calculatePersonalityWord(word) {
    personalityWordSum = 0;
    personalityWordLeng = word.length;
    for(i=0; i<personalityWordLeng; i++){
        letter = word.charAt(i)
        y_condition = (i==0)&&((letter=="y")||(letter=="ý")||(letter=="ỷ")||(letter=="ỳ")||(letter=="ỹ")||(letter=="ỵ"));
        if (y_condition){
            personalitySum = personalityWordSum;
        }
        else if ( !isVowel(letter) ){
            num = transformLetter2Num(word.charAt(i));
            personalityWordSum += num;
        }
    }
    if (checkMasterNumber(personalityWordSum)){
        return personalityWordSum;
    }
    else{
        personalityWordSum = reduceNum(personalityWordSum);
        return personalityWordSum;
    };
}


function calculateExpressionNumber(name){
    splitedName = splitName(name);
    let expressionSum = 0;
    lengg = splitedName.length;
    for (let i=0; i<lengg; i++){
        expressionSum += calculateWord(splitedName[i]);
    }
    expressionSum = reducePeriodNum(expressionSum);
    return expressionSum;
}

function calculateSoulNumber(name){
    splitedName = splitName(name);
    let soulSum = 0;
    soulLeng = splitedName.length;
    for (let i=0; i<soulLeng; i++){
        soulSum += calculateVowelWord(splitedName[i]);
    }
    soulSum = reducePeriodNum(soulSum);
    return soulSum;
}

function calculatePersonalityNumber(name){
    splitedName = splitName(name);
    let personalitySum = 0;
    personalityLeng = splitedName.length;
    for (let i=0; i<personalityLeng; i++){
        personalitySum += calculatePersonalityWord(splitedName[i]);
    }
    personalitySum = reducePeriodNum(personalitySum);
    return personalitySum;
}



