#version 150

// these are for the programmable pipeline system and are passed in
// by default from OpenFrameworks
uniform mat4 modelViewProjectionMatrix;

in vec4 position;
in vec2 texcoord;

// this is something we're creating for this shader
out vec2 texCoordVarying;

// this is coming from our C++ code
//uniform float mouseX;


float rand(vec2 n)
{
    return 0.5 + 0.5 * fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}

float add(vec2 w){
    return w.x + 1.0;
}
 

void main()
{

    
    texCoordVarying = vec2(texcoord.x, texcoord.y);

	gl_Position = modelViewProjectionMatrix * position;
}
