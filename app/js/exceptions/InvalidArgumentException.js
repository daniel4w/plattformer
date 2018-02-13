/**
 * 
 * @author Daniel Weise <daniel4w@gmx.de>
 */
export default class InvalidArgumentException extends Error {
    constructor(message) {
        super();
        Error.captureStackTrace(this, this.constructor);
        this.name = "InvalidArgumentException";
        this.message = message;
    }
}