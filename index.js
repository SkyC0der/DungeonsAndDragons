//restructure code accordingly

const abilityModifier = (c) => {
  //type code here
  if (c > 18 ) throw new Error("Ability scores can be at most 18");
  if (c < 3 ) throw new Error ("Ability scores must be at least 3");
  return Math.floor((c - 10) / 2);
};

class Character {
  static rollAbility() {
    const dice = () => Math.floor(Math.random() * 6) + 1;
    let popins = [];
    for (let index = 0; index < 4; index++) {
      let value = dice();
      popins.push(value);
    }
    popins.sort().shift();
    return popins.reduce((a, b) => a + b);
  }
  constructor() {
    this._strength = Character.rollAbility();
    this._dexterity = Character.rollAbility();
    this._constitution = Character.rollAbility();
    this._intelligence = Character.rollAbility();
    this._wisdom = Character.rollAbility();
    this._charisma = Character.rollAbility();
    this._hitpoints = abilityModifier(this.constitution) + 10;
  }

  get strength() {
    return this._strength;
  }

  get dexterity() {
    return this._dexterity;
  }

  get constitution() {
    return this._constitution;
  }

  get intelligence() {
    return this._intelligence;
  }

  get wisdom() {
    return this._wisdom;
  }

  get charisma() {
    return this._charisma;
  }

  get hitpoints() {
    return this._hitpoints;
  }
}

module.exports = { abilityModifier, Character };
