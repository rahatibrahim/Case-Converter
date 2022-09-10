let text = document.getElementById('textarea');
let upper_button = document.getElementById('upper-case');
let lower_button = document.getElementById('lower-case');
let proper_button = document.getElementById('proper-case');
let sentence_button = document.getElementById('sentence-case');

upper_button.addEventListener('click', function() {
    text.value = text.value.toUpperCase();
});

lower_button.addEventListener('click', function () {
    text.value = text.value.toLowerCase();
});

proper_button.addEventListener('click', function () {
    let words = text.value.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    text.value = words.join(' ');
});

sentence_button.addEventListener('click', function() {
    let sentences = text.value.toLowerCase().split('. ');
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i][0].toUpperCase() + sentences[i].slice(1);
    }
    text.value = sentences.join('. ');
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function() {
    let filename = "text.txt"
    download(filename, text.value);
}, false);