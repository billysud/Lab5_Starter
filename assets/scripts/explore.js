// explore.js

window.addEventListener('DOMContentLoaded', init);



function init() {
  // TODO
  let butt = document.querySelector("button");
  let input = document.getElementById("text-to-speak");
  let utterance = new SpeechSynthesisUtterance("hello world!");
  var img = document.querySelector("img");

  //check input of text box
  if (input.addEventListener) {
    input.addEventListener('input', (event) =>{
      // event handling code for sane browsers
      utterance = new SpeechSynthesisUtterance(input.value);
    }, false);
  } else if (input.attachEvent) {
    input.attachEvent('onpropertychange', function() {
      // IE-specific event handling code
    });
  }

  //from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
  const synth = window.speechSynthesis;

  const inputTxt = document.querySelector('.txt');
  const voiceSelect = document.querySelector('select');
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
    
  butt.addEventListener('click', (event) => {
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    synth.speak(utterance);
    img.src = "assets/images/smiling-open.png"
    utterance.addEventListener('end', function(event) {
      img.src = "assets/images/smiling.png"
    });
  });

}