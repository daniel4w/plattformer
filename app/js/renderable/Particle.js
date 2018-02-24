import Vector2d from '../math/Vector2d';
import Renderable from './Renderable';

const assert = require('assert');

/**
 * Class Particle.
 * Represent one particle.
 *
 * @author Daniel Weise <daniel4w@gmx.de>
 */
export default class Particle extends Renderable
{
    /**
     * Constructor of the class Particle.
     * Initialize the position and the radius of the particle in a 2d context.
     *
     * @param {string}  name
     * @param {number}  x
     * @param {number}  y
     * @param {number}  radius
     */
    constructor(name, x, y, radius)
    {
        assert(typeof (radius) == 'number');
        super(name, x, y);
        this.radius = radius;
        this.velocity = new Vector2d(0, 0);
    }

    /**
     * Get the radius of the particle.
     *
     * @returns {number}
     */
    getRadius()
    {
        return this.radius;
    }

    /**
     * Set the radius of the particle.
     *
     * @param {number} radius
     * @returns {void}
     */
    setRadius(radius)
    {
        assert(typeof (radius) == 'number')
        this.radius = radius;
    }

    /**
     * Get the velocity for the particle.
     *
     * @returns {Vector2d}
     */
    getVelocity()
    {
        return this.velocity;
    }

    /**
     * Set the velocity for the particle.
     *
     * @param {Vector2d} vector
     * @returns {void}
     */
    setVelocity(vector)
    {
        assert(vector instanceof Vector2d);
        this.velocity = vector;
    }

    /**
     * Get the fill color for the particle.
     *
     * @returns {string}
     */
    getFillColor()
    {
        return this.fillColor;
    }

    /**
     * Set the fill color for the particle.
     *
     * @param {string} color
     * @return {void}
     */
    setFillColor(color)
    {
        assert(typeof (color) == 'string');
        this.fillColor = color;
    }

    /**
     * Get the border width of the particle.
     *
     * @return {number}
     */
    getBorderWidth()
    {
        return this.borderWidth;
    }

    /**
     * Set the border width of the particle.
     *
     * @param {number} borderWidth
     * @return {void}
     */
    setBorderWidth(borderWidth)
    {
        assert(typeof(borderWidth) == 'number');
        this.borderWidth = borderWidth;
    }

    /**
     * Get the color for the border of the particle.
     *
     * @returns {string}
     */
    getBorderColor()
    {
        return this.borderColor;
    }

    /**
     * Set the color for the border of the particle.
     *
     * @param {string} color
     * @return {void}
     */
    setBorderColor(color)
    {
        assert(typeof (color) == 'string');
        this.borderColor = color;
    }
}