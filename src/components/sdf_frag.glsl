varying vec3 v_normal;
uniform float u_time;
varying float v_hoverArea;

void main() {
  vec3 color = vec3(0.64, 0.31, 0.31);
  color = vec3 (v_hoverArea, v_hoverArea, v_hoverArea);
  gl_FragColor = vec4(color, 1.0); 
}

