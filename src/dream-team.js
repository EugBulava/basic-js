module.exports = function createDreamTeam(members) {
    if(members == [] || members == null){
        return false;
    }else{
        var result ='';
        var mass = [];
        for(var i = 0; i<= members.length-1; i++){
            if(typeof members[i] == "string"){
                members[i] = members[i].replace(/\s/g, '');
                mass.push(members[i][0].toUpperCase())
            }
        }
        mass.sort();
        for(var i = 0; i<= mass.length-1; i++){
            result += mass[i];
        }
        return result;
        }
};

//createDreamTeam(['Kevin', 'Timothy', 'Jeffrey', 'Albert', 'Laura', 'Karen', 'Steven', 'Diana', 'Sandra', 'Emma'])