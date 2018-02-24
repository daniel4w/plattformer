import Vector2d from './math/Vector2d';
import Particle from './renderable/Particle';
import Pool from './pool/Pool';

require(__dirname + "/../css/style.scss");

let canvas = document.getElementById('screen'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let p = new Particle("par", 245, 110, 55);
p.setFillColor('green');
let pool = new Pool();
pool.addToPool(p);
console.log(pool);
function update()
{
    ctx.clearRect(0, 0, width, height);
    pool.drawPool(ctx);
    requestAnimationFrame(update);
}

update();

// TODO: change param checking with if statements to assert
