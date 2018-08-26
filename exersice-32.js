function balikString(arr){
    var temp=''
    for ( var i=arr.length-1 ; i>=0; i--){
        temp= temp+arr[i]
    }
    console.log(temp)
    return temp
}

balikString('hello world!')
//input "hello world!"
//output
"!dlrow olleh"