#version 150

// this is how we receive the texture
uniform sampler2DRect tex0;

in vec2 texCoordVarying;

out vec4 outputColor;

//One line rand function, not used here
float rand(vec2 n)
{
    return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}


void main()
{
    //Slowly reduce the amount of all colors other than blue
    vec4 col = texture(tex0, texCoordVarying);
    col = vec4(col.x + -0.02, col.y + -0.02, col.z, 1.0);
    outputColor = col;
    
}
