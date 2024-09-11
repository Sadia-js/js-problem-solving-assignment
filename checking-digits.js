function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }

    for(const item of name){
        if(!isNaN(item) && item !== ' '){
            return true;
        }
    } 
    return false;
}
