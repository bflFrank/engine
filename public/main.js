/* globals io, id, Game */
const socket = io();
const game = new Game({id: id, socket: socket});
socket.emit("startup", {id: id});

window.onkeydown = event => game.keydown(event);
window.onkeyup = event => game.keyup(event);