// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    //checks if alphabet exists or isn't exactly 26 chars long, returns false if it does'nt
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    // checks if every char is unique, adding every char of the string to an array then checks if the letter being added is already included in the array. If it is, returns false
    let uniqueCheck = [];
    for (let letter of alphabet) {
      uniqueCheck.push(letter);
      if (
        uniqueCheck.includes(letter) &&
        uniqueCheck.length > alphabet.indexOf(letter) + 1
      ) {
        return false;
      }
    }
    // First attempt, it does work, setting the input into an array, checks the values are included in the first array,(actual if encoding, encoded if decoding) then grabbing its index in that array, 
    // referecing that in the second array (flipped), pushing that value at the index into a new array, then joins it into a string and returns. If the char in the input is not included in the first array
    // (spaces, nonalphabetic chars) then the char itself just gets pushed along into the arrays and final string
    //   input = input.toLowerCase()
    //   alphabet = alphabet.toLowerCase()
    //   let actualAlpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    //   let encodeAlpha = []
    //   let inputArray = []
    //   let encodedArray = []
    //   let encodedMsg = ""
    //   for (let letter of alphabet){
    //     encodeAlpha.push(letter)
    //   }
    //   for (let letter of input){
    //     inputArray.push(letter)
    //   }
    //   let firstArray = encode ? actualAlpha : encodeAlpha

    //   let indexArray = []
    //   for (let i = 0; i < inputArray.length; i++){
    //     if(firstArray.includes(inputArray[i])){
    //       // console.log(inputArray[i])
    //        let indexChar = firstArray.findIndex(index => index == `${inputArray[i]}`)
    //       //  console.log(indexChar)
    //        indexArray.push(indexChar)
    //        }
    //     else{
    //       indexArray.push(inputArray[i])
    //     }
    //   }
    //   let secondArray = encode ? encodeAlpha : actualAlpha

    // for (let i = 0; i < indexArray.length; i++){
    //   let index = indexArray[i]
    //   if(typeof index == 'number'){
    //     encodedArray.push(secondArray[index])
    //   }
    //   else{
    //     encodedArray.push(index)
    //   }
    // }
    //     // console.log(encodeAlpha)
    //     // console.log(inputArray)
    //     // console.log(indexArray)
    //     // console.log(encodedArray)
    //   encodedMsg = encodedArray.join("")
    //   return encodedMsg

    // second attempt after research. Sets the real and encoder alphabet to lowercase then strings. Checks for encode boolean value to set the first and second arrays for en/decoding. 
    // Uses while loop to loop through the input string, checking if the char is included in the first array. If it is then grabs the index of the first alpha where the char appears and then adds the char
    // of the index in the second array to match the encoded letter to the result string. If the char isn't in the first alpha string (spaces, nonalpha) then it simply just adds the char into the 
    // result string. Then returns the en/decoded result string
    
    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();
    let actualAlpha = "abcdefghijklmnopqrstuvwxyz";

    let result = "";
    let i = 0;
    let firstAlpha = encode ? actualAlpha : alphabet;
    let secondAlpha = encode ? alphabet : actualAlpha;

    while (i < input.length) {
      if (firstAlpha.includes(input.charAt(i))) {
        let ind = firstAlpha.indexOf(input.charAt(i));
        result = result + secondAlpha.charAt(ind);
      } else {
        result = result + input.charAt(i);
      }
      i++;
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
