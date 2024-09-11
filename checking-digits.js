function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }
    let digitsInStr = /\d/;
    if(digitsInStr.test(name)){
       return true;
    }
    return false;
}