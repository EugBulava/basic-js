module.exports = function countCats(backyard) {
var number = 0;
  for(var i = 0; i<=backyard.length-1; i++){
    for(var j = 0; j<=backyard[i].length-1; j++){
      if(backyard[i][j]=='^^'){
        number++;
      }
    }
  }
  return number;
};
