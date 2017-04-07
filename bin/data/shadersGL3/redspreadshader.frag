#version 150

// this is how we receive the texture
uniform sampler2DRect tex0;

uniform sampler2DRect orig;

in vec2 texCoordVarying;

out vec4 outputColor;

uniform float random;

uniform float random2;

float rand(vec2 n)
{
    return fract(sin(dot(n.xy, vec2(12.9898, 78.233)))* 43758.5453);
}


void main()
{
    float g = rand(texCoordVarying*random2);
    float k = g * 5;
    
    float r = rand(texCoordVarying*random);
    
    vec2 new;

    
    //test for propagation
    //If neighboring cells have the right color, begin the process and change this pixel
    vec4 neighbor1 = texture(tex0, vec2(texCoordVarying.x-1, texCoordVarying.y));
    vec4 neighbor2 = texture(tex0, vec2(texCoordVarying.x+1, texCoordVarying.y));
    vec4 neighbor3 = texture(tex0, vec2(texCoordVarying.x, texCoordVarying.y+1));
    vec4 neighbor4 = texture(tex0, vec2(texCoordVarying.x, texCoordVarying.y-1));
    if(neighbor1.y<1.0||neighbor2.y<1.0||neighbor3.y<1.0||neighbor4.y<1.0){
        
        
        
        
        //Test for Color
        vec4 goalCol = texture(orig, texCoordVarying);
        vec4 curCol = texture(tex0, texCoordVarying);
        
        //Move towards the goal texture using the random increase
        //Based on current pixel or neigbor
        if(curCol.y<=goalCol.y){
            if(k<1){
                new = vec2(texCoordVarying.x-1, texCoordVarying.y);
            } else if(k<2){
                new = vec2(texCoordVarying.x, texCoordVarying.y-1);
            } else if(k<3){
                new = vec2(texCoordVarying.x, texCoordVarying.y+1);
            } else if(k<4){
                new = vec2(texCoordVarying.x+1, texCoordVarying.y);
            } else{
                new = vec2(texCoordVarying.x, texCoordVarying.y);
            }
            vec4 col;
            if(r>0.8){
                col = texture(orig, vec2(new.x, new.y));
            }   else{
                col = texture(tex0, new);
            }
            col = vec4(col.x + -0.001 + g/100, col.y + -0.01 +g/100, col.z + -0.01 +g/100, 1.0);
            
            outputColor = col;
            
        } else{
            
            
            
            
            //If the color has reached equilibrium, don't let it stay that way
            //Change color randomly based on current or neighboring pixel
            if(r>0.75){
                if(k<1){
                    new = vec2(texCoordVarying.x-1, texCoordVarying.y);
                } else if(k<2){
                    new = vec2(texCoordVarying.x, texCoordVarying.y-1);
                } else if(k<3){
                    new = vec2(texCoordVarying.x, texCoordVarying.y+1);
                } else if(k<4){
                    new = vec2(texCoordVarying.x+1, texCoordVarying.y);
                } else{
                    new = vec2(texCoordVarying.x, texCoordVarying.y);
                }
                vec4 col = texture(tex0, new);
                col = vec4(col.x, col.y + -0.02 +g/100, col.z + -0.02 +g/100, 1.0);
                
                outputColor = col;
                
            }
            //Goal texture
            else if(r<0)
            {
                outputColor = texture(orig, texCoordVarying);
            //No change, keep it at goal
            }else{
                outputColor = texture(tex0, texCoordVarying);
            }
            
            
            
        }
        
        
    }
    
    //else for no neighbors
    else{
        outputColor = texture(tex0, texCoordVarying);
        
    }
    

    
}
