/* exported Game */
class Game{
  constructor(options){
    this.start_time;
    this.frame = 0;
    this.id = options.id;
    this.keys_held = [];
    this.socket = options.socket;
    this.valid_keys = ["a", "s", "d", "w", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  }
  keydown(event){
    if(!this.valid_keys.includes(event.key)) return;
    const direction = this.key_translate(event.key);
    if(this.keys_held.includes(direction)) return;
    this.keys_held.push(direction);
    this.socket.emit("keydown", {direction: direction, id: this.id});
  }
  keyup(event){
    if(!this.valid_keys.includes(event.key)) return;
    const direction = this.key_translate(event.key);
    this.keys_held = this.keys_held.filter(element => element != direction);
    this.socket.emit("keyup", {direction: direction, id: this.id});
  }
  key_translate(key){
    key = key.toLowerCase();
    switch(key){
      case "a":
      case "arrowleft":
        return "left";
      case "s":
      case "arrowdown":
        return "down";
      case "d":
      case "arrowright":
        return "right";
      case "w":
      case "arrowup":
        return "up";
    }
  }
}