function targetTerdekat(arr){
var getO = 0;
var getX = 0;
var temp = 0;
var distance = arr.length;

if(arr.indexOf('x') === -1){
  return 0;
}

for(var i = 0; i < arr.length; i++){
  if(arr[i] === 'o'){
    getO = i;
  }
}

for(var i = 0; i < arr.length; i++){
  if(arr[i] === 'x'){
    getX = i;
    temp = Math.abs(getX - getO);
    if(distance > temp){
      distance = temp;
    }
  }
}
return distance;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2