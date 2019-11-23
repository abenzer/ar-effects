// Load in the required modules
 const NativeUI = require('NativeUI');
 const Scene = require('Scene');
 const TouchGestures = require('TouchGestures');

 // Create a variable to store the name of our text object
 const textNodeName  = 'captionCamera';

 // Access the text object in our scene
 const text = Scene.root.find(textNodeName);

 // Register a tap gesture on the text node
 TouchGestures.onTap(text).subscribe(function() {
 // Edit the text through the NativeUI module
 NativeUI.enterTextEditMode(textNodeName);
 });
