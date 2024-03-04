function shortestWordLength(str) {
    const words = str.split(" ");
    let shortestLength = 99; 
    for (let i = 0; i < words.length; i++) {
        const wordLength = words[i].length; 
        if (wordLength < shortestLength) {
        shortestLength = wordLength;
        }
    }
    return shortestLength;
    }
console.log(shortestWordLength("Why is it so hard"));
console.log(shortestWordLength("I'm too stupid for this")); 
console.log(shortestWordLength("blob"));