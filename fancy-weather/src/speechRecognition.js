const grammar = '#JSGF V1.0; public <color>;';

// eslint-disable-next-line
const recognition = new webkitSpeechRecognition();
// eslint-disable-next-line
const speechRecognitionList = new webkitSpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

export default function handleRecognition() {
  recognition.start();
}

recognition.onresult = e => {
  const input = document.querySelector('.input');
  const submit = document.querySelector('.submit');
  const last = e.results.length - 1;
  const city = e.results[last][0].transcript;

  input.value = city;
  submit.click();
};

recognition.onspeechend = () => {
  recognition.stop();
};
