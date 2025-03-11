import PlayingField from "./PlayingField";

document.addEventListener("DOMContentLoaded", () => {
  const playingField = new PlayingField();
  playingField.createCharacter();
  setInterval(() => {
    playingField.placeCharacter();
  }, 1000);
});
