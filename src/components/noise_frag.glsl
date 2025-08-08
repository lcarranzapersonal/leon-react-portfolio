varying vec2 vUv;
uniform float u_time;
varying vec3 v_normal;
varying vec3 hoverArea;

vec2 random2( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

void main() {
    float osc = 250.1 * abs(cos(u_time));
    float osc2 = 50.0 * abs(cos(u_time));
    vec3 oscLightPos = vec3(20.0, osc, osc2) * 0.01;
    
    vec2 st = vUv;  // Use UV coordinates instead of gl_FragCoord
    vec3 color = vec3(0.0);

    // Scale the space to see the grid
    st *= 50.0;

    // Show the 2D grid
    // color.rg = fract(st);

    // Tile the space
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);

    vec2 point = random2(i_st);
    vec2 diff = point - f_st;

    float dist = length(diff);

    float m_dist = 1.;  // minimum distance

    for (int y= -1; y <= 1; y++) {
        for (int x= -1; x <= 1; x++) {
            // Neighbor place in the grid
            vec2 neighbor = vec2(float(x),float(y));

            // Random position from current + neighbor place in the grid
            vec2 point = random2(i_st + neighbor);

			// Animate the point
            point = 0.5 + 0.5*sin(u_time + 6.2831*point);

			// Vector between the pixel and the point
            vec2 diff = neighbor + point - f_st;

            // Distance to the point
            float dist = length(diff);

            // Keep the closer distance
            m_dist = min(m_dist, dist);
        }
    }

    // Draw the min distance (distance field)
    color += m_dist;

    // Draw cell center
    // color += 1.-step(.02, m_dist);

    // Draw grid
    // color.r += step(.98, f_st.x) + step(.98, f_st.y);

    color = smoothstep(0.4, 0.9, color);
    color*=color;
    

    vec3 waterColor = vec3(0.0, 0.29, 0.73);
    vec3 diffuseColor = vec3(0.02, 0.66, 0.5);

    // Apply the color to the fragment
    color = mix(color, waterColor, 0.7);

    float diffuseAmount = dot(oscLightPos, normalize(v_normal));
    diffuseAmount = clamp(diffuseAmount, 0.3, 2.0);
    color = mix(color, diffuseColor, diffuseAmount * 0.3);

    gl_FragColor = vec4(color * diffuseAmount, 1.0);
}