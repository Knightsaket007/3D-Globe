import * as Three from 'three';

export function getStarField({numStars=500}={}) {
function randomSpherePoint(radius) {
    const radius=Math.random()*25+25;
    const u=Math.random();
    const v=Math.random();
    const theta=2*Math.PI*u;
    const phi=Math.acos(2*v-1);
    let x=radius*Math.sin(phi)*Math.cos(theta);
    let y=radius*Math.sin(phi)*Math.sin(theta);
    let z=radius*Math.cos(phi);

    return {
        position:new Three.Vector3(x,y,z),
        hue:.6,
        minDistance:radius,

    };
}
}