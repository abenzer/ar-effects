
// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Materials = require('Materials');
const Textures = require('Textures');
const TouchGestures = require('TouchGestures');

textures = [1, 2, 3, 4, 4, 6, 7, 8, 9];
setTextures();


const screen = Scene.root.find('Camera');
TouchGestures.onTap(screen).subscribe(function (gesture) {
  Diagnostics.log('reset');
  setTextures();
});


function setTextures() {
  shuffle(textures);
  for(i=1;i<9;i++) {
    if(i != 5) {
      var material = Materials.get('material' + i);
      var textureIndex = textures[i];
      var texture = Textures.get('Slice ' + textureIndex);
      material.diffuse = texture;
    }
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
