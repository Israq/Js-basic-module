function factorial(N) {
    var factorial = 1;
for(var i=1; i<=N; i++){
    factorial = factorial * i;
    
}
    return factorial;
    
}
var result = factorial(10);
console.log(result);
