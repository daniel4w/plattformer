import Vector2d from './math/Vector2d';
import Particle from './renderable/Particle';
import Pool from './pool/Pool';

require(__dirname + "/../css/style.scss");

let canvas = document.getElementById('screen'),
    ctx = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let vec1 = new Vector2d(245, 110);

let p = new Particle("par", vec1, 22);
p.setFillColor('green');
p.setBorderColor('red');
p.setBorderWidth(15);
p.setVelocity(new Vector2d(0.1, 0.1));
let pool = new Pool();
pool.addToPool(p);
function update()
{
    ctx.clearRect(0, 0, width, height);
    pool.drawPool(ctx);
    requestAnimationFrame(update);
}

update();
