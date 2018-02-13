import Vector2d from '../../../app/js/math/Vector2d';
import InvalidArgumentException from '../../../app/js/exceptions/InvalidArgumentException';

let vec1,
    vec2,
    x = 5,
    y = 10,
    a = 20,
    b = 30,
    test_int = 11,
    wrong = "wrong";

beforeEach(() => {
    vec1 = new Vector2d(x, y);
    vec2 = new Vector2d(a, b);
});

describe("Testing class Vector2d", () => {

    // HAPPY PATH
    describe("Happy Path Testing", () => {
        test('constructor()', () => {
            expect.objectContaining(vec1);
        });

        test('getX()', () => {
            expect(vec1.getX()).toBe(x);
        });

        test('setX()', () => {
            vec1.setX(test_int);
            expect(vec1.getX()).toBe(test_int);
        });

        test('getY()', () => {
            expect(vec1.getY()).toBe(y);
        });

        test('setY()', () => {
            vec1.setY(test_int);
            expect(vec1.getY()).toBe(test_int);
        });

        test('getLength()', () => {
            let length = Math.sqrt(x*x + y*y);
            expect(vec1.getLength()).toBe(length);
        });

        test('setLength()', () => {
            let angle = vec1.getAngle();
            let _x = Math.cos(angle) * test_int;
            let _y = Math.sin(angle) * test_int;
            vec1.setLength(test_int);
            expect(vec1.getX()).toBe(_x);
            expect(vec1.getY()).toBe(_y);
        });

        test('getAngle()', () => {
            let angle = Math.atan2(y, x);
            expect(vec1.getAngle()).toBe(angle);
        });

        test('setAngle()', () => {
            let length = vec1.getLength();
            let _x = Math.cos(test_int) * length;
            let _y = Math.sin(test_int) * length;
            vec1.setAngle(test_int);
            expect(vec1.getX()).toBe(_x);
            expect(vec1.getY()).toBe(_y);
        });

        test('addTo()', () => {
            vec1.addTo(vec2);
            expect(vec1.getX()).toBe(x + a);
            expect(vec1.getY()).toBe(y + b);
        });

        test('substractFrom()', () => {
            vec1.subtractFrom(vec2);
            expect(vec1.getX()).toBe(x - a);
            expect(vec1.getY()).toBe(y - b);
        });

        test('multiplyBy()', () => {
            vec1.multiplyBy(test_int);
            expect(vec1.getX()).toBe(x * test_int);
            expect(vec1.getY()).toBe(y * test_int);
        });

        test('divideBy()', () => {
            vec1.divideBy(test_int);
            expect(vec1.getX()).toBe(x / test_int);
            expect(vec1.getY()).toBe(y / test_int);
        });

        test('add()', () => {
            let obj = Vector2d.add(vec1, vec2);
            expect(obj.getX()).toBe(x + a);
            expect(obj.getY()).toBe(y + b);
        });

        test('substract()', () => {
            let obj = Vector2d.substract(vec1, vec2);
            expect(obj.getX()).toBe(x - a);
            expect(obj.getY()).toBe(y - b);
        });

        test('multiply()', () => {
            let obj = Vector2d.multiply(vec1, test_int);
            expect(obj.getX()).toBe(x * test_int);
            expect(obj.getY()).toBe(y * test_int);
        });

        test('divide()', () => {
            let obj = Vector2d.divide(vec1, test_int);
            expect(obj.getX()).toBe(x / test_int);
            expect(obj.getY()).toBe(y / test_int);
        });
    });

    // SAD PATH
    describe("Sad Path Testing", () => {
        test('setX() with wrong param', () => {
            expect(() => {
                vec1.setX(wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a number!"));
        });

        test('setY() with wrong param', () => {
            expect(() => {
                vec1.setY(wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a number!"));
        });

        test('setLength() with wrong param', () => {
            expect(() => {
                vec1.setLength(wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a number!"));
        });

        test('setAngle() with wrong param', () => {
            expect(() => {
                vec1.setAngle(wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a number!"));
        });

        test('addTo() with wrong param', () => {
            expect(() => {
                vec1.addTo(wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a Vector2d!"));
        });

        test('substractFrom() with wrong param', () => {
            expect(() => {
                vec1.subtractFrom(wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a Vector2d!"));
        });

        test('multiplyBy() with wrong param with wrong param', () => {
            expect(() => {
                vec1.multiplyBy(wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a number!"));
        });

        test('divideBy() with wrong param', () => {
            expect(() => {
                vec1.divideBy(wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a number!"));
        });

        test('add() with wrong first param', () => {
            expect(() => {
                Vector2d.add(wrong, vec1);
            }).toThrow(new InvalidArgumentException(wrong + " is not a Vector2d!"));
        });

        test('add() with wrong second param', () => {
            expect(() => {
                Vector2d.add(vec1, wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a Vector2d!"));
        });

        test('substract() with wrong first param', () => {
            expect(() => {
                Vector2d.add(wrong, vec1);
            }).toThrow(new InvalidArgumentException(wrong + " is not a Vector2d!"));
        });

        test('substract() with wrong second param', () => {
            expect(() => {
                Vector2d.add(vec1, wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a Vector2d!"));
        });

        test('multiply() with wrong first param', () => {
            expect(() => {
                Vector2d.multiply(wrong, vec1);
            }).toThrow(new InvalidArgumentException(wrong + " is not a Vector2d!"));
        });

        test('multiply() with wrong second param', () => {
            expect(() => {
                Vector2d.multiply(vec1, wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a number!"));
        });

        test('divide()  with wrong first param', () => {
            expect(() => {
                Vector2d.divide(wrong, vec1);
            }).toThrow(new InvalidArgumentException(wrong + " is not a Vector2d!"));
        });

        test('divide()  with wrong second param', () => {
            expect(() => {
                Vector2d.divide(vec1, wrong);
            }).toThrow(new InvalidArgumentException(wrong + " is not a number!"));
        });
    });
});