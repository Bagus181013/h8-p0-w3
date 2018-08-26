function pasanganTerbesar(num) {
    var str = String(num)
    var list = [] 
    for(var i = 0; i < str.length;i++){
        var temp = ''
        if(str[i+1] === undefined){
            break
        }
        temp += str[i] + str[i+1]
        list.push(temp)
    }
    var result = list.sort(function(a,b){
        return b-a
    });
    return parseInt(result)
}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99