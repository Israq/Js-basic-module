function factorial(N) 
{
    var i = 1;
    var Multi =1;
    while (i<=N) {
        Multi = Multi * i;
        i++;
        
    }
    return Multi;
    
}
result = factorial(5);
console.log(result);
