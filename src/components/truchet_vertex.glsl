varying vec2 vUv;
uniform float u_time;
varying vec3 v_normal;
uniform float thickness;
varying vec3 fragcol;

uniform int uvMultiplier;

float hash21(vec2 p) {
  bool animate = false;
  float animateFactor = animate ? 0.1 * sin(u_time) : 0.0;

  return fract(sin(dot(p,  vec2(127.1, 311.7)) ) * 43758.0 + u_time);
}

void main() {
    v_normal = normal;
    vUv = uv;

    float thickness = 0.25;
  vec2 uv = vUv *0.5;
  vec3 col = vec3(0);

  //create grid cells

  uv += u_time * 0.025;
  uv *= 100.0;
  vec2 gv = fract(uv) - 0.5;
  vec2 id = floor(uv);

  // col.rg +=id *0.05;
  float n = hash21(id);

  // col.rg = gv;

  //red grid
  // if(gv.x > .48  || gv.y > .48) col = vec3(1.0,0.0, 0.0);

  if(n < 0.5) {
    gv.x *= -1.0;
  }


  // gv.x *=-1.0;
  float d = abs(abs(gv.x + gv.y) - 0.5);
  float mask = smoothstep(-0.1, 0.1, d-thickness);

  col+= mask;

  vec3 fragcol = col;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position + col * normal * .2, 1.0);
}