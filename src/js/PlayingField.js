export default class PlayingField {
  constructor(element) {
    this.element = element;
    this.character = undefined;
    this.rowCharacter = undefined;
    this.colCharacter = undefined;
  }

  static getRandomInRage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createCharacter() {
    this.character = document.createElement('img');
    this.character.src = require('../img/character.png');
    this.character.classList.add('character');
    this.character.alt = 'Персонаж';
    this.placeCharacter();
  }

  placeCharacter() {
    if (!this.character) {
      throw new Error('Персонаж не создан!');      
    }
    let positionRow;
    let positionCol;   
    do {
      positionRow = PlayingField.getRandomInRage(0, 3);
      positionCol = PlayingField.getRandomInRage(0, 3);
    } while (positionRow === this.rowCharacter && positionCol === this.colCharacter);
    this.rowCharacter = positionRow;
    this.colCharacter = positionCol;
    console.log(`positionRow = ${positionRow}   positionCol = ${positionCol}`);
    const rowList = this.element.querySelectorAll('.row');
    const colList = rowList[positionRow].querySelectorAll('.col');
    const cellParent = colList[positionCol];
    cellParent.appendChild(this.character);
  }
}
