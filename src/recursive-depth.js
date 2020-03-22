module.exports = class DepthCalculator {

    calculateDepth(arr) {
        var max = 1;
        if(!Array.isArray(arr)){
            return 0;
        } 

        for(var i= 0; i<= arr.length-1; i++){
            if(Array.isArray(arr[i])){
                var k = this.calculateDepth(arr[i]) + 1;
                max = k > max ? k : max;
            }
        };

        return max;
    }
};

//console.log((new DepthCalculator()).calculateDepth([[],[[]]]));