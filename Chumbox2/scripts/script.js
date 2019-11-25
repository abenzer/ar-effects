
// How to load in modules
const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const Materials = require('Materials');
const Textures = require('Textures');
const TouchGestures = require('TouchGestures');
var Patches = require('Patches');

textures = [1, 2, 3, 4, 4, 6, 7, 8, 9, 4];
setTextures();

var triggerIn = Patches.getPulseValue('triggerIn');
triggerIn.subscribe( function(e) {
  setTextures();
});


function setTextures() {
  shuffle(textures);
  for(i=0;i<10;i++) {
    if(i != 5) {
      Diagnostics.log(i + ' | ' + textureIndex);
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
