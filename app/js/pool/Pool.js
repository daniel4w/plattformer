import ArrayNullException from '../exceptions/ArrayNullException';
import Renderable from '../renderable/Renderable';
import InvalidArgumentException from '../exceptions/InvalidArgumentException';

export default class Pool
{
    /**
     * Constructor of the class Pool.
     * Initialize a array holding Renderables.
     */
    constructor()
    {
        this.pool = new Map();
    }

    /**
     * Add a Renderable to the Pool if it isn`t allready in.
     *
     * @param {Renderable} renderable
     */
    addToPool(renderable)
    {
        if(!(renderable instanceof Renderable)) {
            throw new InvalidArgumentException(renderable + " is not an instance of Renderable!");
        }
        if(this.pool.has(renderable.getName())) {
            return;
        }
        this.pool.set(renderable.getName(), renderable);
    }

    /**
     * Update the pool. Runs before every draw() call.
     *
     * @returns {void}
     */
    update(context, renderable) {
        if (typeof (renderable.velocity) != 'undefined') {
            renderable.position.addTo(renderable.velocity);
        }

        if (renderable.fillColor != 'undefined') {
            context.fillStyle = renderable.fillColor;
            context.fill();
        }

        if (renderable.borderColor != 'undefined') {
            context.strokeStyle = renderable.borderColor;
        }

        if (renderable.borderWidth != 'undefined') {
            context.lineWidth = renderable.borderWidth;
        }
    }

    /**
     * Draw the particle on the given context.
     *
     * @param {object} context 
     */
    drawPool(context) {
        if (typeof (context) !== 'object') {
            throw new InvalidArgumentException(context + " is not an object!");
        }

        if (this.pool.size <= 0) {
            throw new ArrayNullException("No items in the pool!");
        }

        this.pool.forEach((renderable, name) => {
            this.update(context, renderable);

            context.beginPath();
            context.arc(
                renderable.position.getX(),
                renderable.position.getY(),
                renderable.radius,
                0,
                2 * Math.PI
            );

            context.stroke();
        });
    }
}