

const textResult=document.getElementById('speech-result-text-area');
const mic_button=document.getElementById('mic-button');
var recognising;
var recognition= new webkitSpeechRecognition();


reset();
recognition.continuous=true;
recognition.interimResults=true;
recognition.onend=reset;

recognition.onresult=function(event){

    console.log('hello');
    var final_transcript="";
    var interim_transcript="";
    for(var i=0;i<event.results.length;i++){
        
        if(event.results[i].isFinal){
            final_transcript+=event.results[i][0].transcript;
        }
        else{
            interim_transcript+=event.results[i][0].transcript;
        }
    }
    textResult.innerHTML=final_transcript;
    console.log(final_transcript);
}

function reset(){
    recognising=false;
    mic_button.innerHTML='click to speak';
}

function toggleMic(){
    if(recognising){
        mic_button.style.backgroundColor="rgba(0, 128, 0, 0.6)";
        recognition.stop();
        reset();
    }
    else{
        recognition.start();
        mic_button.style.backgroundColor="red";
        recognising=true;
        mic_button.innerHTML="click to stop";
        textResult.innerHTML="";
    }
}

function copyToClipboard(){
    var content=textResult.select();
    document.execCommand("copy");

    alert("Copied to clipboard ! ");
}