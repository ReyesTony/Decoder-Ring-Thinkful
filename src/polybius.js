// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // sets two objects to use for encoding and decoding since a polybius square is a fixed cipher. 
  const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42','j' : '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43' , 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
  const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '21': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };
  function polybius(input, encode = true) {
  // your solution code here
  // gets rid of any spaces if given numbers to decode then checks if they're even, if odd returns false
    if(!encode && input.split(" ").join("").length % 2 !== 0){
      return false
    }
    input = input.toLowerCase()

  // checks if we're encoding or decoding and sets the direction object accordingly
    const direction = encode ? encoder : decoder;
  // console.log(direction)
   
  // uses .match regex expression to give an array with every letter char if encoding or an array with pairs of numbers to decode from the input string, matches spaces in either situation
  // then maps a new array using the values in the .match array to match with the matching key in the direction object, if there is no key:value pair with matching key it just maps the char accounting for spaces
  // then joins the array into a string with no spaces between values, returning the en/decoded string 
    return input
      .match(/[0-9]{2}|[a-z]|\s/g)
      .map(character => direction[character] || character)
      .join('');
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
