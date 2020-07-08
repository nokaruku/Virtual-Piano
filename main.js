document.addEventListener("keydown", (e) => {
  let pianoKeys = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];

  let isPianoKey = false;
  for (const pianoKey of pianoKeys) {
    if (e.code == `Key${pianoKey}`) {
      let audio = new Audio(`./audio/${pianoKey}.mp3`);
      audio.play();
      isPianoKey = true;
      break;
    }
  }
  if (!isPianoKey) {
    console.log("A non-piano key is pressed.");
  }
});
