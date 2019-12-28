/**
*@param {string} letter
*@param {number} exponent
*@returns {number} returns single term from bijective function conversion formula
*/
function conversionFunction(letter:string,exponent:number):number{
    return letterToDecimal(letter)*Math.pow(26,exponent);
}

/**
*@param {string} letterToDecimal letter to be converted to a number 1-26
*@returns {number} number associated to letter in alphabet possible value 1-26
*/
function letterToDecimal(letter:string):number{
    return letter.charCodeAt(0)-64;
}

/**
*@param {string} input string containing only upper case letters
*@returns {number} returns decimal number conversion of bijective base-26 input
*wraper function for bb26 (upper case letter) to decimal conversion
*/
function bb26ToDecimal(input:string): number{
    if(!/[A-Z]/.test(input)) console.log("Input string may only contain upper case letters");
    return iteratebb26ToDecimal(input, 0);
}

/**
*@param {string} input string containing only upper case letters
*@param {number} iterative summation variable
*@returns {number} returns decimal number conversion of bijective base-26 input
*converts string containing only upper case letters to its equivalent decimal number using recursion
*/
function iteratebb26ToDecimal(input:string, sum:number):number{
    if(input.length > 0) {
        sum +=conversionFunction(input.charAt(0),input.length-1);
        return iteratebb26ToDecimal(input.substr(1),sum);
    }
    return sum;
}