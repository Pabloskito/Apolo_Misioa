this.load.image('Gato', 'Images\R (13).png');
var personaje = {
    sprite: 'Gato',
    x: 100,
    y: 100
};
var cursors;
cursors = this.input.keyboard.createCursorKeys();
if (cursors.up.isDown) {
    personaje.y -= 2;
}
