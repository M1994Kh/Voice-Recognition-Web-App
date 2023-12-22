const playBtn = document.getElementById("play-btn");
const textInput = document.getElementById("text");
const synth = window.speechSynthesis;

playBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(textInput.value);
    synth.speak(utterance);
});


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const recBtn = document.getElementById("rec-btn");
const output = document.getElementById("output");

recBtn.addEventListener("click", () => {
    recognition.start();
});

recognition.addEventListener("result", (event) => {
    let transcript = event.results[0][0].transcript;
    output.textContent = transcript;
    textInput.value = transcript;
})

recognition.addEventListener("error", (event) => {
    output.textContent = "Error: "+ event.error; 
})