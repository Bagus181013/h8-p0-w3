function groupAnimals(animals){
    var result=[]
    for ( var i=0; i< animals.length; i++){
        var isEmpty = true
        var temp=''
        for ( var j=0; j< result.length; j++){
            if ( animals[i][0]==result[j][0][0]){
                isEmpty= false
                temp=j
            }
        }
        if ( isEmpty === true){
            result.push([animals[i]])
        }else{
            result[temp].push(animals[i])
        }
    }
    return result.sort()
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
