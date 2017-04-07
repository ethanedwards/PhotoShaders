#include "ofMain.h"
#include "ofApp.h"

//========================================================================
int main( ){
    
    //Commented out of original, default OF
//	ofSetupOpenGL(1024,768,OF_WINDOW);			// <-------- setup the GL context
    
    //These lines set up which shaders to use
    
    ofGLWindowSettings settings;
    settings.setGLVersion(3,2);
    ofCreateWindow(settings);
	// this kicks off the running of my app
	// can be OF_WINDOW or OF_FULLSCREEN
	// pass in width and height too:
	ofRunApp(new ofApp());

}
