function reverseWords(str) {
    return str
      .split(" ")                 
      .map(function(word) {       
        return word.split('').reverse().join('');
        })
      .join(" ");                 
    }
const inputString = "lets gooo";
const result = reverseWords(inputString);
console.log(result);  