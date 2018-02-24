import InvalidArgumentException from '../exceptions/InvalidArgumentException';

const assert = require('assert');

/**
 * Class Vector2d
 *
 * Provides 2d vector functionality.
 *
 * @author Daniel Weise <daniel4w@gmx.de>
 */
export default class Vector2d
{
    /**
     * Constructor of the class Vector2d.
     * Initialize the x and y position of the Vector2d.
     *
     * @param {number} x
     * @param {number} y
     */
    constructor(x, y)
    {
        assert(typeof(x) === 'number');
        assert(typeof(y) === 'number');

        this.x = x;
        this.y = y;
    }

    /**
     * Set the x position of the Vector2d.
     *
     * @param {number} value
     * @returns {void}
     */
    setX(value)
    {
        assert(typeof(value) === 'number');
        this.x = value;
    }

    /**
     * Get the x position of the Vector2d.
     *
     * @returns {number}
     */
    getX()
    {
        return this.x;
    }

    /**
     * Set the y position of the Vector2d.
     *
     * @param {number} value
     * @returns {void}
     */
    setY(value)
    {
        assert(typeof(value) === 'number');
        this.y = value;
    }

    /**
     * Get the y position of the Vector2d.
     *
     * @returns {number}
     */
    getY()
    {
        return this.y;
    }

    /**
     * Get the length of the vector.
     * Mathematicaly the length of the hypertonuse.
     *
     * @returns {number}
     */
    getLength()
    {
        return Math.sqrt(this.getX() * this.getX() + this.getY() * this.getY());
    }

    /**
     * Set the length of a vector.
     *
     * @param {number} length
     * @returns {void}
     */
    setLength(length)
    {
        assert(typeof(length) === 'number');

        let angle = this.getAngle();
        this.setX(Math.cos(angle) * length);
        this.setY(Math.sin(angle) * length);
    }

    /**
     * Get the angle of the vector.
     *
     * @returns {number}
     */
    getAngle()
    {
        return Math.atan2(this.getY(), this.getX());
    }

    /**
     * Set the angle of a vector.
     *
     * @param {number} angle
     * @returns {void}
     */
    setAngle(angle)
    {
        assert(typeof(angle) === 'number');
        let length = this.getLength();
        this.setX(Math.cos(angle) * length);
        this.setY(Math.sin(angle) * length);
    }

    /**
     * Add a vector to this vector.
     *
     * @param {Vector2d} vector
     * @returns {void}
     */
    addTo(vector)
    {
        assert(vector instanceof Vector2d);
        this.x += vector.getX();
        this.y += vector.getY();
    }

    /**
     * Substract a vector from this vector.
     *
     * @param {Vector2d} vector
     * @returns {void}
     */
    subtractFrom(vector)
    {
        assert(vector instanceof Vector2d);
        this.x -= vector.getX();
        this.y -= vector.getY();
    }

    /**
     * Multiply a vector with this value.
     *
     * @param {number} value
     * @returns {void}
     */
    multiplyBy(value)
    {
        assert(typeof(value) === 'number');
        this.x *= value;
        this.y *= value;
    }

    /**
     * Divide this vector by a value.
     *
     * @param {number} value
     * @returns {void}
     */
    divideBy(value)
    {
        assert(typeof(value) === 'number');
        this.x /= value;
        this.y /= value;
    }

    /**
     * Add a vector to another vector.
     *
     * @param {Vector2d} vector1
     * @param {Vector2d} vector2
     * @returns {Vector2d}
     */
    static add(vector1, vector2)
    {
        assert(vector1 instanceof Vector2d);
        assert(vector2 instanceof Vector2d);

        let x = vector1.getX() + vector2.getX(),
            y = vector1.getY() + vector2.getY();

        return new Vector2d(x, y);
    }

    /**
     * Substract a vector from another vector.
     *
     * @param {Vector2d} vector1
     * @param {Vector2d} vector2
     * @returns {Vector2d}
     */
    static substract(vector1, vector2)
    {
        assert(vector1 instanceof Vector2d);
        assert(vector2 instanceof Vector2d);

        let x = vector1.getX() - vector2.getX(),
            y = vector1.getY() - vector2.getY();

        return new Vector2d(x, y);
    }

    /**
     * Multiplicate a vector with a value.
     *
     * @param {Vector2d} vector
     * @param {number} value
     * @returns {Vector2d}
     */
    static multiply(vector, value)
    {
        assert(vector instanceof Vector2d);
        assert(typeof(value) === 'number');

        let x = vector.getX() * value,
            y = vector.getY() * value;

        return new Vector2d(x, y);
    }

    /**
     * Divide a vector with a value.
     *
     * @param {Vector2d} vector
     * @param {number} value
     * @returns {Vector2d}
     */
    static divide(vector, value)
    {
        assert(vector instanceof Vector2d);
        assert(typeof(value) === 'number');

        let x = vector.getX() / value,
            y = vector.getY() / value;

        return new Vector2d(x, y);
    }
}
