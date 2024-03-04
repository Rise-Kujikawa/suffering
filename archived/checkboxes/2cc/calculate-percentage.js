function calculateCharacterPercentage(text) {
    const characterCount = {};
    const totalCharacters = text.length;
    for (let char of text) {
        characterCount[char] = (characterCount[char] || 0) + 1;
    }
    for (let char in characterCount) {
        characterCount[char] = (characterCount[char] / totalCharacters) * 100;
    }
    return characterCount;
}
const inputText = "Hello, World!";
const characterPercentage = calculateCharacterPercentage(inputText);
console.log(characterPercentage);