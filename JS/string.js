var text = document.getElementById("text1");
var numberOfWords = document.getElementById("numberOfWords");
var numberOfLetters = document.getElementById("numberOfLetters");
var firstWord = document.getElementById("firstWord");
var lastWord = document.getElementById('lastWord');
var reverse = document.getElementById('reverse');
var sortString = document.getElementById('sortString');
var rep = document.getElementById('rep');

text.addEventListener("change", showTheFields);

function showTheFields() {
    if (text != null) {
        numberOfWords.textContent = countWords(text.value);
        numberOfLetters.textContent = countLetters(text.value);
        firstWord.textContent = getFirstWord(text.value);
        lastWord.textContent = getLastWord(text.value);
        reverse.textContent = reverseLetters(text.value);
        sortString.textContent = sortLettersDescending(text.value);
        rep.textContent = countLetterOccurrences(text.value);
    }
}
function openTheWindow() {
    var newWindow = window.open("", "_blank", "width=100vh,height=auto");
    newWindow.document.write("<h1>Valores</h1>");
    newWindow.document.write("<p>Text: " + text.value + "</p>");
    newWindow.document.write("<p>Number of Words: " + numberOfWords.textContent + "</p>");
    newWindow.document.write("<p>Number of Letters: " + numberOfLetters.textContent + "</p>");
    newWindow.document.write("<p>First Word: " + firstWord.textContent + "</p>");
    newWindow.document.write("<p>Last Word: " + lastWord.textContent + "</p>");
    newWindow.document.write("<p>Reverse: " + reverse.textContent + "</p>");
    newWindow.document.write("<p>Sort String: " + sortString.textContent + "</p>");
    newWindow.document.write("<p>Rep: " + rep.textContent + "</p>");
    newWindow.document.close();
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

function countLetters(str) {
    const stringWithoutSpaces = str.replace(/\s/g, '');
    return stringWithoutSpaces.match(/[a-zA-Z]/g).length;
}

function getFirstWord(str) {
    const totalWords = str;
    const firstWord = totalWords.replace(/ .*/, '');
    return firstWord;
}

function getLastWord(str) {
    const words = str.trim().split(/\s+/);
    return words[words.length - 1];
}

function reverseLetters(str) {
    const letters = str.split('');
    const reversedLetters = letters.reverse();
    return reversedLetters.join('');
}

function sortLettersDescending(str) {
    const letters = str.split('');
    const sortedLetters = letters.sort((a, b) => b.localeCompare(a));
    return sortedLetters.join('');
}

function countLetterOccurrences(str) {
    const letterCounts = {};
    for (let letter of str) {
        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
    }
    var formattedCounts = JSON.stringify(letterCounts, null, 2);
    return formattedCounts;
}