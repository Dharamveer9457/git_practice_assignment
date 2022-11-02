function checkprime(num) {
  
    let count=0; 
    
    for (i=0 ; i<=13 ; i++){
    if (num % i == 0){
    count++;
    }
    }
    
    if (count == 2){
        console.log(num,"is prime")
    }else{
        console.log(num," is not prime")
    }
    }
    checkprime(10)