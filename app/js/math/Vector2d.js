import InvalidArgumentException from '../exceptions/InvalidArgumentException';
/**
 * Class Vector2d
 *
 * Provides 2d vector functionality.
 *
 * @author Daniel Weise <daniel4w@gmx.de>
 */
export default class Vector2d
{
    constructor(x, y)
    {
        if (typeof (x) !== 'number') {
            throw new InvalidArgumentException(x + " is not a number!");
        }
        if (typeof (y) !== 'number') {
            throw new InvalidArgumentException(y + " is not a number!");
        }
        this.x = x;
        this.y = y;
    }

    /**
     * Set x.
     *
     * @param {number} value
     * @throws {InvalidArgumentException}
     * @returns {void}
     */
    setX(value)
    {
        if (typeof (value) !== 'number') {
            throw new InvalidArgumentException(value + " is not a number!");
        }
        this.x = value;
    }

    /**
     * Get x.
     *
     * @returns {number}
     */
    getX()
    {
        return this.x;
    }

    /**
     * Set y.
     *
     * @param {number} value
     * @throws {InvalidArgumentException}
     * @returns {void}
     */
    setY(value)
    {
        if(typeof(value) !== 'number') {
            throw new InvalidArgumentException(value + " is not a number!");
        }
        this.y = value;
    }

    /**
     * Get y.
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
     * @throws {InvalidArgumentException}
     * @returns {void}
     */
    setLength(length)
    {
        if (typeof (length) !== 'number') {
            throw new InvalidArgumentException(length + " is not a number!");
        }
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
     * @throws {InvalidArgumentException}
     * @returns {void}
     */
    setAngle(angle)
    {
        if (typeof (angle) !== 'number') {
            throw new InvalidArgumentException(angle + " is not a number!");
        }
        let length = this.getLength();
        this.setX(Math.cos(angle) * length);
        this.setY(Math.sin(angle) * length);
    }

    /**
     * Add a vector to this vector.
     *
     * @param {Vector2d} vector
     * @throws {InvalidArgumentException}
     * @returns {void}
     */
    addTo(vector)
    {
        if (!(vector instanceof Vector2d)) {
            throw new InvalidArgumentException(vector + " is not a Vector2d!");
        }
        this.x += vector.getX();
        this.y += vector.getY();
    }

    /**
     * Substract a vector from this vector.
     *
     * @param {Vector2d} vector
     * @throws {InvalidArgumentException}
     * @returns {void}
     */
    subtractFrom(vector)
    {
        if (!(vector instanceof Vector2d)) {
            throw new InvalidArgumentException(vector + " is not a Vector2d!");
        }
        this.x -= vector.getX();
        this.y -= vector.getY();
    }

    /**
     * Multiply a vector with this value.
     *
     * @param {number} value
     * @throws {InvalidArgumentException}
     * @returns {void}
     */
    multiplyBy(value)
    {
        if (typeof (value) !== 'number') {
            throw new InvalidArgumentException(value + " is not a number!");
        }
        this.x *= value;
        this.y *= value;
    }

    /**
     * Divide this vector by a value.
     *
     * @param {number} value
     * @throws {InvalidArgumentException}
     * @returns {void}
     */
    divideBy(value)
    {
        if (typeof (value) !== 'number') {
            throw new InvalidArgumentException(value + " is not a number!");
        }
        this.x /= value;
        this.y /= value;
    }

    /**
     * Add a vector to another vector.
     *
     * @param {Vector2d} vector1
     * @param {Vector2d} vector2
     * @throws {InvalidArgumentException}
     * @returns {Vector2d}
     */
    static add(vector1, vector2)
    {
        if (!(vector1 instanceof Vector2d)) {
            throw new InvalidArgumentException(vector1 + " is not a Vector2d!");
        }
        if (!(vector2 instanceof Vector2d)) {
            throw new InvalidArgumentException(vector2 + " is not a Vector2d!");
        }
        let x = vector1.getX() + vector2.getX(),
            y = vector1.getY() + vector2.getY();

        return new Vector2d(x, y);
    }

    /**
     * Substract a vector from another vector.
     *
     * @param {Vector2d} vector1
     * @param {Vector2d} vector2
     * @throws {InvalidArgumentException}
     * @returns {Vector2d}
     */
    static substract(vector1, vector2)
    {
        if (!(vector1 instanceof Vector2d)) {
            throw new InvalidArgumentException(vector1 + " is not a Vector2d!");
        }
        if (!(vector1 instanceof Vector2d)) {
            throw new InvalidArgumentException(vector2 + " is not a Vector2d!");
        }
        let x = vector1.getX() - vector2.getX(),
            y = vector1.getY() - vector2.getY();

        return new Vector2d(x, y);
    }

    /**
     * Multiplicate a vector with a value.
     *
     * @param {Vector2d} vector
     * @param {number} value
     * @throws {InvalidArgumentException}
     * @returns {Vector2d}
     */
    static multiply(vector, value)
    {
        if (!(vector instanceof Vector2d)) {
            throw new InvalidArgumentException(vector + " is not a Vector2d!");
        }
        if (typeof (value) !== 'number') {
            throw new InvalidArgumentException(value + " is not a number!");
        }
        let x = vector.getX() * value,
            y = vector.getY() * value;

        return new Vector2d(x, y);
    }

    /**
     * Divide a vector with a value.
     *
     * @param {Vector2d} vector
     * @param {number} value
     * @throws {InvalidArgumentException}
     * @returns {Vector2d}
     */
    static divide(vector, value)
    {
        if (!(vector instanceof Vector2d)) {
            throw new InvalidArgumentException(vector + " is not a Vector2d!");
        }
        if (typeof (value) !== 'number') {
            throw new InvalidArgumentException(value + " is not a number!");
        }
        let x = vector.getX() / value,
            y = vector.getY() / value;

        return new Vector2d(x, y);
    }
}
