function leapYear(year) {
    var Year = year%4;
    if(Year==0){
        console.log("It is leap year");
    }
    else{
        console.log("Not a leap year");
    }
    
}
var Letsee = leapYear(2021);
