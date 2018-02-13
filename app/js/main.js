require(__dirname + "/../css/style.scss");
import Vec from './math/Vector2d';

let canvas = document.getElementById('screen'),
    ctx = canvas.getContext('2d');

let vec1 = new Vec(5, 10);
let vec2 = new Vec(15, 12);

let vec3 = Vec.substract(vec1, vec2);
vec3.subtractVector
console.log(vec3);