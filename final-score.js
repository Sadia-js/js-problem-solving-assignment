function calculateFinalScore(obj) {
    if(typeof obj !== 'object' || 
    typeof obj.name !== 'string' ||
    typeof obj.testScore !== 'number' ||
    typeof obj.schoolGrade !== 'number' ||
    typeof obj.isFFamily !== 'boolean' || 
    obj.testScore > 50 || 
    obj.schoolGrade > 30){
        return "Invalid Input";
    }
    let profScore = 0;
    if(obj.isFFamily === true){
        profScore = 20;
    }

    let totalScore = obj.testScore + obj.schoolGrade + profScore;
    if(totalScore >= 80){
        return true;
    }
    return false;
}

