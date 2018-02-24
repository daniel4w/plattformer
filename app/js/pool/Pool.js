import ArrayNullException from '../exceptions/ArrayNullException';
import Renderable from '../renderable/Renderable';

const assert = require('assert');

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
        assert(renderable instanceof Renderable);
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
        /*if (typeof (renderable.getVelocity()) != 'undefined') {
            renderable.getPosition().addTo(renderable.getVelocity());
        }*/

        if (renderable.getFillColor() != 'undefined') {
            context.fillStyle = renderable.getFillColor();
            context.fill();
        }

        if (renderable.getBorderColor() != 'undefined') {
            context.strokeStyle = renderable.getBorderColor();
        }

        if (renderable.getBorderWidth() != 'undefined') {
            context.lineWidth = renderable.getBorderWidth();
        }

    }

    /**
     * Draw the particle on the given context.
     *
     * @param {object} context 
     */
    drawPool(context) {
        assert(typeof (context) == 'object');

        if (this.pool.size <= 0) {
            throw new ArrayNullException("No items in the pool!");
        }

        this.pool.forEach((renderable, name) => {
            this.update(context, renderable);
            context.beginPath();
            context.arc(
                renderable.getX(),
                renderable.getY(),
                renderable.radius,
                0,
                2 * Math.PI
            );

            context.fill();
        });
    }
}