const btn = document.getElementById("btn");
const results = document.getElementById("results");
const speechRecognition = window.speechRecognition ||
window.webkitSpeechRecognition;
const recognition = new speechRecognition();
recognition.onstart = function(){
    console.log("You Can Speak Now");
}
recognition.onresult = function(event){
    var range = event.results[0][0].transcript;
    console.log("text");
    document.getElementById("result").innerHTML = text;
}
function copyDivToclipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("results"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Copied the Text:")
}
