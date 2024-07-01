function ClothingAdviser (temperature,){
    let temperature = prompt("write the current temperature")
    let IsitRainting = prompt("Write Yes or No").toUpperCase();
    let advice = "It is suggested to wear: ";
    
    switch(true) {
        case (temperature < 15):
            advice += "Heavy winter jacket, scarf, and gloves.";
            break;
        case (temperature < 25):
            advice += "Warm jacket or sweater.";
            break;
        case (temperature < 35):
            advice += "Light clothing like a T-shirt and pants.";
            break;
        default:
            advice += "Light clothing such as shorts and a T-shirt.";
    }

    if (isRaining === "yes") {
        advice += " Don't forget your umbrella or raincoat!";
    }

    return(advice);
}

function isLeapYear (Nyear){
    
    if(Nyear%4===0 && Nyear%100 !==0 && Nyear%400===0 ){
        return("this Year"+ Nyear+"is a leap Year")
    }
    else{
        return("this Year"+ Nyear+"isn't a leap Year")
    }
    
}

function isPalindrome (str){

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}



function power(number,exp){
        if (exp === 0) {
            return 1;
        }
        if (exp > 0) {
            return number * power(number, exp - 1);
        } else {
            // If exponent is negative 
            return 1 / (number* power(number, -exp - 1));
        }
    }











