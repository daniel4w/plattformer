import Vector2d from '../math/Vector2d';
import InvalidArgumentException from '../exceptions/InvalidArgumentException';

/**
 * Class Renderable.
 * Base class foreach renderable.
 *
 * @author Daniel Weise <daniel4w@gmx.de>
 */
export default class Renderable
{
    constructor(name, position)
    {
        if (typeof(name) != 'string') {
            throw new InvalidArgumentException(name + ' is not a string!');
        }
        if (!(position instanceof Vector2d)) {
            throw new InvalidArgumentException(position + ' is not a Vector2d!');
        }
        this.name = name;
        this.position = position;
    }

    /**
     * Get the name of the Renderable.
     *
     * @returns {string}
     */
    getName()
    {
        return this.name;
    }

    /**
     * Get the actual position of the particle.
     *
     * @returns {Vector2d}
     */
    getPosition() {
        return this.position;
    }

    /**
     * Set the postion of a particle.
     *
     * @param {Vector2d} vector
     * @returns {void}
     */
    setPosition(vector) {
        if (!(vector instanceof Vector2d)) {
            throw new InvalidArgumentException(vector + ' is not a Vector2d!');
        }
        this.position = vector;
    }
}