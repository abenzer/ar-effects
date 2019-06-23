var FaceTracking = require("FaceTracking");
var IrisTracking = require("IrisTracking");
var Scene = require("Scene");
    
var leftIris = Scene.root.find("left iris");
var rightIris = Scene.root.find("right iris");
    
var leftEyeballInfo = IrisTracking.leftEyeball(FaceTracking.face(0));
var rightEyeballInfo = IrisTracking.rightEyeball(FaceTracking.face(0));
    
leftIris.transform.position = leftEyeballInfo.iris;
rightIris.transform.position = rightEyeballInfo.iris;
    
leftIris.transform.rotation = leftEyeballInfo.rotation;
rightIris.transform.rotation = rightEyeballInfo.rotation; 

var emitter0 = Scene.root.find("emitter0");
emitter0.transform.position = leftEyeballInfo.iris.add(0.3);
// emitter0.transform.rotation = leftEyeballInfo.rotation;

var emitter1 = Scene.root.find("emitter1");
emitter1.transform.position = rightEyeballInfo.iris.add(0.3);
// emitter1.transform.rotation = rightEyeballInfo.rotation;