

const synthesisText=document.getElementById('text-area-for-synthesis');

var synthesis = new SpeechSynthesisUtterance();
synthesis.lang='en-US';
synthesis.text=synthesisText.value;
synthesis.rate=1.2;

function playSpeech(){
    synthesis.text=synthesisText.value;
    speechSynthesis.speak(synthesis);
}
function stopSpeech(){
    speechSynthesis.cancel();
} 
function pauseSpeech(){
    speechSynthesis.pause();
}
function resumeSpeech(){
    speechSynthesis.resume();
}