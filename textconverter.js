<script>
    const text = document.querySelector("#textarea");
    const convertButton = document.querySelector("#btn");
    const voiceSelect = document.querySelector("#voiceSelect");
    const speechSynth = window.speechSynthesis;

    let voices = [];

    function populateVoices() {
        voices = speechSynth.getVoices();
        voiceSelect.innerHTML = "";

        voices.forEach((voice, index) => {
            const option = document.createElement("option");
            option.value = index;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }

    // Some browsers load voices late, so listen to this event:
    speechSynth.addEventListener("voiceschanged", populateVoices);
    populateVoices();  // also call once

    convertButton.addEventListener("click", () => {
        const enteredText = text.value.trim();
        const error = document.querySelector("#error-para");

        if (!speechSynth.speaking && enteredText.length === 0) {
            error.textContent = "Nothing to convert!";
            return;
        }

        if (!speechSynth.speaking && enteredText.length > 0) {
            error.textContent = "";

            const newUtter = new SpeechSynthesisUtterance(enteredText);

            // Set the selected voice
            const selectedVoiceIndex = voiceSelect.value;
            newUtter.voice = voices[selectedVoiceIndex];

            newUtter.onstart = () => {
                convertButton.textContent = "Sound is playing...";
            };

            newUtter.onend = () => {
                convertButton.textContent = "Play Converted Sound";
            };

            speechSynth.speak(newUtter);
        }
    });
</script>
