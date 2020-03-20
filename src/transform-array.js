module.exports = function transform(arr) {
    var counter = 0;
    if(Array.isArray(arr) == false){
        throw('error');
    } else if(arr.length == 0){
        Error('error');
    }
    for(var k = 0; k<=0 ; k++){
        for(var i = 0; i<= arr.length-1; i++){
            if(arr[i] == '--discard-next'){
                if(arr[i+1] == undefined){
                    arr.splice(i,1);
                } else{
                    arr.splice(i,2);
                    i--;
                }
            }else if(arr[i] == '--discard-prev'){
                console.log(arr[i-1]);
                console.log(arr);
                if(arr[i-1] == undefined){
                    arr.splice(i,1);
                    i--;
                } else {
                    arr.splice(i-1,2);
                    i--;
                    i--;
                }
            }else if(arr[i] == '--double-next'){
                if(arr[i+1] == undefined){
                    arr.splice(i,1);
                } else{
                    arr[i] = arr[i+1];
                }
            }else if(arr[i] == '--double-prev'){
                if(arr[i-1] == undefined){
                    arr.splice(i,1);
                    i--;
                } else{
                    arr[i] = arr[i-1];
                }
            }
        }
        for(var i = 0; i<=arr.length-1;i++){
            if(arr[i] == '--discard-next' || arr[i] == '--discard-prev' || arr[i] == '--double-next' || arr[i] == '--double-prev'){
                k = 0;
                break;
            }
        }
    }
    
    return arr;
};

//console.log(transform(['--discard-prev','2', '4','8' ,'--discard-prev','3','--double-prev','--double-next','--discard-next','14', '18','--discard-next','22', '--discard-next']));