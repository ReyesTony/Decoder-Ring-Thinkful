// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // console.log(shift)
    // checks to make sure the shift is a valid entry, if not returns false
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    // if set to decode (encode parameter set to false) it makes the shift number negative to decode the input
     else if (!encode) {
      shift = -shift;
    }
    // sets the input to lowercase, changes every char to its charcode and pushes it to an array
    // console.log(shift)
    // console.log(input)
    let encodee = input.toLowerCase();
    let charcoded = [];
    // console.log(encodee.length)
    for (let i = 0; i < encodee.length; i++) {
      let code = encodee.charCodeAt(i);
      charcoded.push(code);
    }
    // console.log(charcoded)
    // loops through the charcoded array then checks if the charcodes coincide with the lowercase latin characters, if it does
    // it sets its index to zero plus the shift then shifts and loops the index as needed then readds the subtracted index to give new charcode
    // then pushes that charcode as a string into shiftedArr array
    // if the charcode doesn't fall into the lowercase latin char range then its left alone and pushed into shiftArr as its string value
    let shiftedArr = [];
    for (let i = 0; i < charcoded.length; i++) {
      if (charcoded[i] >= 97 && charcoded[i] <= 122) {
        let shiftee = charcoded[i] - 97 + shift;
        // console.log(shift)
        // console.log(shiftee)
        let shifted = (((shiftee % 26) + 26) % 26) + 97;
        // console.log(shifted)
        shiftedArr.push(String.fromCharCode(shifted));
      } else {
        shiftedArr.push(String.fromCharCode(charcoded[i]));
      }
      // console.log(shiftedArr)
    }
    // console.log(shiftedArr)
    // At the end the shiftedArr array is joined into a string with no spaces between values, taking care of shifted letters and 
    // any other nonalphabetic chars that were in the orignal input
    let encoded = shiftedArr.join("");
    // console.log(encoded)
    return encoded;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
