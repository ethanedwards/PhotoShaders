#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){

    
    
#ifdef TARGET_OPENGLES
    //ES shaders go here
#else
    if(ofIsGLProgrammableRenderer()){
        //GL3 shaders go here
        
        //blue example
        shader.load("shadersGL3/blueshader");
        
        //redspread example
        //shader.load("shadersGL3/redspreadshader");
    }else{
        //GL2 shaders go here
    }
#endif
    
    //Load images
    img1.loadImage("img/FlowerPhoto.jpg");
    
    //Origin image
    //Origin is not in fact just a white image, but has several pixels of red at the "start" point
    origin.loadImage("img/reddot.jpg");
    
    //Allocate FBO based on image sizes
    ping.allocate(img1.getWidth(), img1.getHeight());
    pong.allocate(img1.getWidth(), img1.getHeight());
    
    ranFirst = false;
    
}

//--------------------------------------------------------------
void ofApp::update(){
     
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    
    //Begin first fbo
    ping.begin();
    
    //Begin shader
    shader.begin();
    
    
    
    //Redspread example
    //shader.setUniform1f("random", ofRandom(0.0, 1.0));
    //shader.setUniform1f("random2", ofRandom(0.0, 5.0));
    //shader.setUniformTexture("orig", img1, 1);
    
    
    
    //This makes sure that the process is seeded with the image first. By drawing it here, it gets drawn into the buffer and can begin to be processed by the shader
    if(!ranFirst){
        
        //Blue example
        img1.draw(0, 0);
        
        //Redspread example
        //origin.draw(0, 0);
        
        
        
        ranFirst = true;
    } else{
        //Draw the previous image
        pong.draw(0, 0);
    }
    
    
    shader.end();
    
    ping.end();
    
    
    //Make pong the previous written to ping
    pong = ping;
    
    //Draw the processed image
    ping.draw(0, 0);
     
     
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
