/**
 * Class ArrayNullException.
 * If an array holds no item and you cant iterate over it throw this.
 *
 * @author Daniel Weise <daniel4w@gmx.de>
 */
export default class ArrayNullException extends Error {
    constructor(message) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = "ArrayNullException";
        this.message = message;
    }
}