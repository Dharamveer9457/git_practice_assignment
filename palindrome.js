function checkpalindrome(string){

    let rev="";
    
    for (i= string.length-1; i >= 0; i--){
    rev+=string[i];
    }
    if (rev == string){
      console.log(true)
    }else{
      console.log(false)
    }
    }
    checkpalindrome("dharma")
    checkpalindrome("naman")