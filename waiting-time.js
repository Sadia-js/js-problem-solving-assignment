function  waitingTime(waitingTimes, serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length){
        return "Invalid Input";
    }
    let sum = 0;
    for(const time of waitingTimes){
        sum = sum + time;
    }
    const avg = Math.round(sum / waitingTimes.length);
    const vivaDone = waitingTimes.length;
    const haveRest = (serialNumber - 1) - vivaDone;
    const avgTime = avg * haveRest;
    return avgTime;
}

