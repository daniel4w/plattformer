import Vector2d from '../math/Vector2d';
const assert = require('assert');

/**
 * Class Renderable.
 * Base class foreach renderable.
 *
 * @author Daniel Weise <daniel4w@gmx.de>
 */
export default class Renderable
{
    /**
     * Constructor of the class Renderable.
     * Initialize the name and the x and y Position.
     *
     * @param {string}  name     Name for the Renderable.
     * @param {number}  x        X postion of the Renderable.
     * @param {number}  y        Y postion of thr Renderable.
     */
    constructor(name, x, y)
    {
        assert(typeof(name) === 'string');
        assert(typeof(x) === 'number');
        assert(typeof(y) === 'number');

        this.name = name;
        this.position = new Vector2d(x, y);
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
     * Get the actual x postion of thr Renderable.
     *
     * @returns {number}
     */
    getX()
    {
        return this.position.getX();
    }

    /**
     * Set the x postion of a Renderable.
     *
     * @param {number}  x
     * @returns {void}
     */
    setX(x)
    {
        assert(typeof(x) === 'number');
        this.position.setX(x);
    }

    /**
     * Get the actual y postion of thr Renderable.
     *
     * @returns {number}
     */
    getY()
    {
        return this.position.getY();
    }

    /**
     * Set the y postion of a Renderable.
     *
     * @param {number}  y
     * @returns {void}
     */
    setY(y)
    {
        assert(typeof(y) === 'number');
        this.position.setY(y);
    }
}