function checkMasterNumber(num) {
    switch (num){
        case 11:
        case 22:
        case 33:
            return true;
            break;
        default:
            return false;
    }
}

function checkNextSumGreaterThan9(num) {
    if(num>9) {
        num = num%10 + Math.floor(num/10);
        if(num>9) return true;
        else return false;
    }
    else return false;
}

function reduceNum(num){
    while(num>9) {
        if (checkMasterNumber(num)){
            return num;
            break;
        }
        else{
            num = num%10 + Math.floor(num/10);
        }
    }
    return num;
}

function reduceNumFinal(num){
    while(num>9) {
        num = num%10 + Math.floor(num/10);    
    }
    return num;
}

function reducePeriodNum(num){
    while(num>9) {
        if (checkMasterNumber(num)) return num;
        else if (checkNextSumGreaterThan9(num)){
            num = num%10 + Math.floor(num/10);
        }
        else return num;
    }
    return num;
}

function isVowel(letter){
    switch(letter) {
        case "a":
        case "â":
        case "ă":
        case "á":
        case "ấ":
        case "ắ":
        case "à":
        case "ầ":
        case "ằ":
        case "ã":
        case "ẫ":
        case "ẵ":
        case "ả":
        case "ẩ":
        case "ẳ":
        case "ạ":
        case "ậ":
        case "ặ":
        case "e":
        case "ê":
        case "é":
        case "ế":
        case "è":
        case "ề":
        case "ẽ":
        case "ễ":
        case "ẻ":
        case "ể":
        case "ẹ":
        case "ệ":
        case "i":
        case "í":
        case "ì":
        case "ĩ":
        case "ỉ":
        case "ị":
        case "o":
        case "ô":
        case "ơ":
        case "ó":
        case "ố":
        case "ớ":
        case "ò":
        case "ồ":
        case "ờ":
        case "õ":
        case "ỗ":
        case "ỡ":
        case "ỏ":
        case "ổ":
        case "ở":
        case "ọ":
        case "ộ":
        case "ợ":
        case "u":
        case "ú":
        case "ù":
        case "ũ":
        case "ủ":
        case "ụ":
        case "y":
        case "ý":
        case "ỳ":
        case "ỹ":
        case "ỷ":
        case "ỵ":
            return true;
            break;
        default:
            return false;
            break;
    }
    return false;
}


function transformLetter2Num(letter) {
    switch(letter) {
        case "a":
        case "â":
        case "ă":
        case "á":
        case "ấ":
        case "ắ":
        case "à":
        case "ầ":
        case "ằ":
        case "ã":
        case "ẫ":
        case "ẵ":
        case "ả":
        case "ẩ":
        case "ẳ":
        case "ạ":
        case "ậ":
        case "ặ":
        case "j":
        case "s":
            return 1;
            break;
        case "b":
        case "k":
        case "t":
            return 2;
            break;
        case "c":
        case "l":
        case "u":
        case "ú":
        case "ù":
        case "ũ":
        case "ủ":
        case "ụ":
            return 3;
            break;
        case "d":
        case "m":
        case "v":
            return 4;
            break;
        case "e":
        case "ê":
        case "é":
        case "ế":
        case "è":
        case "ề":
        case "ẽ":
        case "ễ":
        case "ẻ":
        case "ể":
        case "ẹ":
        case "ệ":
        case "n":
        case "w":
            return 5;
            break;
        case "f":
        case "o":
        case "ô":
        case "ơ":
        case "ó":
        case "ố":
        case "ớ":
        case "ò":
        case "ồ":
        case "ờ":
        case "õ":
        case "ỗ":
        case "ỡ":
        case "ỏ":
        case "ổ":
        case "ở":
        case "ọ":
        case "ộ":
        case "ợ":
        case "x":
            return 6;
            break;
        case "g":
        case "p":
        case "y":
        case "ý":
        case "ỳ":
        case "ỹ":
        case "ỷ":
        case "ỵ":
            return 7;
            break;
        case "h":
        case "q":
        case "z":
            return 8;
            break;
        case "i":
        case "í":
        case "ì":
        case "ĩ":
        case "ỉ":
        case "ị":
        case "r":
            return 9;
            break;
        default:
            return 0;
    }

}
