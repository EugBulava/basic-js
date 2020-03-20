module.exports = function repeater( str, options ) {
    var middle ='';
    var res ='';
    var addition = '';
    if(options.repeatTimes == undefined){
        return str + options.addition;
    }else{
        if(options.separator == undefined){
            options['separator'] = '+';
        }
    
        if(options.additionSeparator == undefined){
            options['additionSeparator'] = '|';
        }
    
        for(k = 0; k<= options.additionRepeatTimes-1; k++){
            if(k == 0){
                middle += options.addition;
            }else {
                middle += options.additionSeparator + options.addition;
            }
        }
    
        for(var i =0; i<= options.repeatTimes-1; i++){
            if(i == options.repeatTimes-1){
                res += str + middle ;
            }else{
                res += str + middle + options.separator;
            }
        }
        return res;
    }
    //console.log('my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS?!my test stringPLUS))PLUS))PLUS))PLUS');
};
  
//console.log(repeater('TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' }));