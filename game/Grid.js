const Tile = require("./Tile.js");

class Grid{
  constructor(options){
    const xx = options.x;
    const yy = options.y;

    this.grid = [];
    for(let x = 0; x < xx; x++){
      if(typeof this.grid[x] == "undefined") this.grid[x] = [];
      for(let y = 0; y < yy; y++) this.grid[x][y] = new Tile();
    }
  }
}

module.exports = Grid;