function leapYear(year) {
    var Year = year%4;
    if(Year==0){
       return true;
    }
    else{
        return false;
    }
    
}
var Letsee = leapYear(2021);
console.log(Letsee);