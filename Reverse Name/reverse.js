document.getElementById('inputText').addEventListener('input', function(){
    let inputText = this.value;
    let reversedText = inputText.split('').reverse().join('');
    document.getElementById('outputText').textContent = reversedText;
});