
const FaceTracking = require('FaceTracking');
const Scene = require('Scene');
const Diagnostics = require('Diagnostics');

const face = FaceTracking.face(0);
const nose = face.nose.tip;
const emitter = Scene.root.find('emitter0');

Diagnostics.log(emitter);
// const mouthOpenness = face.mouth.openness.mul(4).add(1);