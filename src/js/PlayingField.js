export default class PlayingField {
  constructor() {
    this.playingField;
    this.character = undefined;
    this.rowCharacter = undefined;
    this.colCharacter = undefined;
    this.createPlayingField();
  }

  createPlayingField() {
    const playingField = document.createElement("div");
    playingField.classList.add("playing-field");
    for (let i = 0; i < 4; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let i = 0; i < 4; i++) {
        const col = document.createElement("div");
        col.classList.add("col");
        row.appendChild(col);
      }
      playingField.appendChild(row);
    }
    document.documentElement.children[1].appendChild(playingField);
    this.playingField = playingField;
  }

  static getRandomInRage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createCharacter() {
    this.character = document.createElement("img");
    this.character.src = require("../img/character.png");
    this.character.classList.add("character");
    this.character.alt = "Персонаж";
    this.placeCharacter();
  }

  placeCharacter() {
    if (!this.character) {
      throw new Error("Персонаж не создан!");
    }
    let positionRow;
    let positionCol;
    do {
      positionRow = PlayingField.getRandomInRage(0, 3);
      positionCol = PlayingField.getRandomInRage(0, 3);
    } while (
      positionRow === this.rowCharacter &&
      positionCol === this.colCharacter
    );
    this.rowCharacter = positionRow;
    this.colCharacter = positionCol;
    const cellParent =
      this.playingField.children[positionRow].children[positionCol];
    cellParent.appendChild(this.character);
  }
}
