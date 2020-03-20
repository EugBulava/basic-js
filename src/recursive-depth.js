module.exports = class DepthCalculator {
    calculateDepth(arr) {
        //console.log(typeof arr);
        if(typeof arr !== 'object' || arr == []){
            return 0;
        }else {
            for(var i= 0; i<= arr.length-1; i++){
                
            }
        }
    }
};

//(new DepthCalculator()).calculateDepth([[[[]]],[],[]]);