const Grid = require("./Grid.js");

class Game{
  constructor(options){
    this.grid = new Grid(options.grid);
  }
}

module.exports = Game;