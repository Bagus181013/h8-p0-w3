function groupAnimals(animals){
    var group_abjad = [];
    var group_huruf = [];
    for(var i = 0; i < animals.length; i++){
        var cek = false;
        for(var j = 0; j < group_abjad.length; j++){
            if(group_abjad[j] === animals[i][0]){
                cek = true;
            }
        }
        if(cek === false){
            group_abjad.push(animals[i][0]);
        }
    }
    for(var i = 0; i < group_abjad.length; i++){
        group_huruf.push([]);
        for(var j = 0; j < animals.length; j++){
            if(group_abjad[i] === animals[j][0]){
                group_huruf[i].push(animals[j]);
            }
        }
    }
    group_huruf.sort();
    return group_huruf;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]