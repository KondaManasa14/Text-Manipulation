// Function to perform search using regex
function performSearch() {
    const inputText = document.getElementById('inputText').value;
    const searchPattern = document.getElementById('searchPattern').value;
    const resultText = document.getElementById('resultText');

    try {
        const regex = new RegExp(searchPattern, 'g');
        const matches = inputText.match(regex);
        resultText.value = matches ? matches.join('\n') : 'No matches found.';
    } catch (e) {
        resultText.value = 'Invalid regular expression.';
    }
}

// Function to perform replace using regex
function performReplace() {
    const inputText = document.getElementById('inputText').value;
    const searchPattern = document.getElementById('searchPattern').value;
    const replacePattern = document.getElementById('replacePattern').value;
    const resultText = document.getElementById('resultText');

    try {
        const regex = new RegExp(searchPattern, 'g');
        const replacedText = inputText.replace(regex, replacePattern);
        resultText.value = replacedText;
    } catch (e) {
        resultText.value = 'Invalid regular expression.';
    }
}

// Function to perform formatting (e.g., capitalizing first letter of each word)
function performFormatting() {
    const inputText = document.getElementById('inputText').value;
    const resultText = document.getElementById('resultText');

    // Example formatting: Capitalize the first letter of each word
    const formattedText = inputText.replace(/\b\w/g, char => char.toUpperCase());
    resultText.value = formattedText;
}
