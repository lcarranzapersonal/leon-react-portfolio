varying vec3 v_normal;
uniform float u_time;

void main() {

  float osc = 75.1 * abs(cos(u_time));
  float osc2 = 10.0 * abs(cos(u_time));



  vec3 lightPos = vec3(2.0, osc, osc2) * 0.02;

  float diffuseAmount = dot(lightPos, normalize(v_normal));
  gl_FragColor = vec4(0.0 * diffuseAmount, 1.0 * diffuseAmount, 0.83 , 1.0); 
}

