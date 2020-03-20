module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var turns = Math.pow(2,disksNumber) - 1;
    var seconds = turns/(turnsSpeed/3600);
    var res = {
        turns,
        seconds
    }
    return res;
}