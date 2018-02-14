require(__dirname + "/../css/style.scss");
import Vec from './math/Vector2d';
import Particle from './particles/Particle';

let canvas = document.getElementById('screen'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let vec1 = new Vec(245, 110);

let p = new Particle(vec1, 22);
console.log(p);
console.log(typeof(ctx));
p.setFillColor('green');
p.setBorderColor('red');
p.setBorderWidth(15);
p.setVelocity(new Vec(0.1, 0.1));
function update()
{
    ctx.clearRect(0, 0, width, height);
    p.draw(ctx);
    requestAnimationFrame(update);
}

update();

// TODO: write test for Particle.js