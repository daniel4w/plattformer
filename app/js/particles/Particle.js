import Vector2d from '../math/Vector2d';
/**
 * Class Particle.
 * Represent one particle.
 *
 * @author Daniel Weise <daniel4w@gmx.de>
 */
export default class Particle
{
    /**
     * Constructor of the class Particle.
     *
     * @param {Vector2d} position
     * @param {number} radius
     */
    constructor(position, radius)
    {
        this.position = position;
        this.radius = radius;
    }

    /**
     * Update this. Runs before every draw() call.
     *
     * @returns {void}
     */
    update(context)
    {
        if (typeof(this.velocity) != 'undefined') {
            this.position.addTo(this.velocity);
        }

        if (this.fillColor != 'undefined') {
            context.fillStyle = this.fillColor;
            context.fill();
        }

        if (this.borderColor != 'undefined') {
            context.strokeStyle = this.borderColor;
        }

        if (this.borderWidth != 'undefined') {
            context.lineWidth = this.borderWidth;
        }
    }

    /**
     * Draw the particle on the given context.
     *
     * @param {object} context 
     */
    draw(context)
    {
        if (typeof (context) !== 'object') {
            throw new InvalidArgumentException(context + " is not an object!");
        }

        this.update(context);

        context.beginPath();
        context.arc(
            this.position.getX(),
            this.position.getY(),
            this.radius,
            0,
            2 * Math.PI
        );
        
        context.stroke();
    }

    /**
     * Get the actual position of the particle.
     *
     * @returns {Vector2d}
     */
    getPosition()
    {
        return this.position;
    }

    /**
     * Set the postion of a particle.
     *
     * @param {Vector2d} vector
     * @returns {void}
     */
    setPostion(vector)
    {
        if (!(vector instanceof Vector2d)) {
            throw new InvalidArgumentException(vector + " is not a Vector2d!");
        }
        this.postion = position;
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
        if (typeof (radius) !== 'number') {
            throw new InvalidArgumentException(radius + " is not a number!");
        }
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
        // TODO: encapsulate this into an utility class or smth. else.
        if (!(vector instanceof Vector2d)) {
            throw new InvalidArgumentException(vector + " is not a Vector2d!");
        }
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
        if (typeof (color) !== 'string') {
            throw new InvalidArgumentException(color + " is not a string!");
        }
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
        if (typeof (borderWidth) !== 'number') {
            throw new InvalidArgumentException(borderWidth + " is not a number!");
        }
        this.borderWidth = borderWidth;
    }

    /**
     * Get the color for the border of the particle.
     *
     * @returns {string}
     */
    getFillColor() {
        return this.borderColor;
    }

    /**
     * Set the color for the border of the particle.
     *
     * @param {string} color
     * @return {void}
     */
    setBorderColor(color) {
        if (typeof (color) !== 'string') {
            throw new InvalidArgumentException(color + " is not a string!");
        }
        this.borderColor = color;
    }
}