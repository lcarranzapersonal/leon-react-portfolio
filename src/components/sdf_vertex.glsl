uniform float u_time;
uniform vec3 u_mousePosition;
uniform bool u_click;

varying vec2 vUv;
varying vec3 v_normal;
varying float v_hoverArea;

void main() {
    v_normal = normal;
    vUv = uv;
    
    v_hoverArea = distance(u_mousePosition, position);
    

    // Declare mod outside the conditional
    float mod;
    
    if (u_click) {
        mod = 0.2;  // No displacement when clicked
    } else {
        mod = 0.0; // Large displacement when not clicked
    }

    float modHover = 1.0- clamp((1.0/v_hoverArea * (0.05+mod * fract(u_time))), 0.1, 0.52);

    vec3 newPosition = position + normal * modHover;


    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}