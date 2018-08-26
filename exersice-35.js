function palindrome(kata) {
    var temp=''
for(i=kata.length-1; i>=0; i--){
    temp+=kata[i]
}
    if (temp==kata){
        return true  //jika sesuai dengan if, memanggil true
    }
        return false //di saat tidak sesuai dengan if,memanggil false
}

  // TEST CASES
 console.log(palindrome('katak')); // true
 console.log(palindrome('blanket')); // false
 console.log(palindrome('civic')); // true
 console.log(palindrome('kasur rusak')); // true
 console.log(palindrome('mister')); // false
  