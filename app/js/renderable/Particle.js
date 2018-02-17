import Vector2d from '../math/Vector2d';
import InvalidArgumentException from '../exceptions/InvalidArgumentException';
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
     * @param {string} name
     * @param {Vector2d} position
     * @param {number} radius
     */
    constructor(name, position, radius)
    {
        assert(typeof (radius) == 'number');
        super(name, position);
        this.radius = radius;
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
     * Get the x postion of a Particle.
     *
     * @returns {number}
     */
    getX()
    {
        return this.position.getX();
    }

    /**
     * Set the x position of a Particle.
     *
     * @param {number} x
     * @returns {void}
     */
    setX(x)
    {
        assert(typeof (x) == 'number');
        this.position.setX(x);
    }

    /**
     * Get the y postion of a Particle.
     *
     * @returns {number}
     */
    getY() {
        return this.position.getY();
    }

    /**
     * Set the y position of a Particle.
     *
     * @param {number} y
     * @returns {void}
     */
    setY(y) {
        assert(typeof (y) == 'number');
        this.position.setY(y);
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
        assert(typeof (borderWidth) == 'number');
        this.borderWidth = borderWidth;
    }

    /**
     * Get the color for the border of the particle.
     *
     * @returns {string}
     */
    getBorderColor() {
        return this.borderColor;
    }

    /**
     * Set the color for the border of the particle.
     *
     * @param {string} color
     * @return {void}
     */
    setBorderColor(color) {
        assert(typeof (color) == 'string');
        this.borderColor = color;
    }
}