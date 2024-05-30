const calculateArea = function(weigth,heigth){
    if(weigth < 0){weigth = weigth * -1}
    if(heigth < 0){heigth = heigth * -1}
    
    let area = weigth * heigth;
    
    return area;

}

 function convertTofahrenheit(temperatureInCelsius) {
    let temperatureInFahrenheit = temperatureInCelsius * (169/5);

    return temperatureInFahrenheit; 
 }


 function isEven(number) {
    if(number % 2 == 0){
        return true
    }
    else{
        return false
    }
 }
 

 function isLeapYear(year){
    if(year % 4 == 0 && year % 100 != 0){
        return true;
    }
    if(year % 100 && year % 400 == 0){
        return true;
    }
    else {
        return false;
    }
}

function countVowels(word){
    let  numberOfVowels = 0;
    let ArrayOfVowels = ['a','e','i','o','u']
    for(let letter in word){
        for(let vowel in ArrayOfVowels){
            if(word[letter] == ArrayOfVowels[vowel]){
                numberOfVowels += 1;
            }
        }
    }
    return numberOfVowels;
}
 
 module.exports ={calculateArea,convertTofahrenheit,isEven,isLeapYear,countVowels}