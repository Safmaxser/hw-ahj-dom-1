import PlayingField from './PlayingField';

document.addEventListener('DOMContentLoaded', () => {
  const playingField = new PlayingField(document.querySelector('.playing-field'));
  playingField.createCharacter();
  setInterval(() => {
    playingField.placeCharacter();
  }, 1000);
});
