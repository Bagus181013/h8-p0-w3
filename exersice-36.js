//Angka Palindrome
function angkaPalindrome(num){
  var angka = num + 1;   
  var reverse = '';
  while(true) {var i = String(angka);
    reverse = i.split('').reverse().join('');
    if(angka === Number(reverse)){
      return angka;
    }
    angka++;
  }
}

  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(11)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(64)); // 181
  console.log(angkaPalindrome(1000)); // 1001