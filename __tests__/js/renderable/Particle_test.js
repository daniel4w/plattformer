import Vector2d from '../../../app/js/math/Vector2d';
import Particle from '../../../app/js/renderable/Particle';
import InvalidArgumentException from '../../../app/js/exceptions/InvalidArgumentException';

let position1 = new Vector2d(5, 10),
    position2 = new Vector2d(20, 40),
    test_number1 = 50,
    test_number2 = 100,
    name1 = 'name1',
    name2 = 'name2',
    color_string = "#656477",
    particle1,
    particle2;

beforeEach(() => {
    particle1 = new Particle(name1, position1, test_number1);
    particle2 = new Particle(name2, position2, test_number2);
});

describe('Testing class Particle...', () => {

    // HAPPY PATH
    describe('Happy Path Testing', () => {
        test('constructor()', () => {
            expect.objectContaining(particle1);
        });

        test('getName()', () => {
            expect(particle1.getName()).toBe(name1);
        });

        test('getPosition()', () => {
            expect(particle1.getPosition()).toBe(position1);
        });

        test('setPosition()', () => {
            particle1.setPosition(position2);
            expect(particle1.getPosition()).toBe(position2);
        });

        test('getRadius()', () => {
            expect(particle1.getRadius()).toBe(test_number1);
        });

        test('setRadius()', () => {
            particle1.setRadius(test_number2);
            expect(particle1.getRadius()).toBe(test_number2);
        });

        test('getVelocity()', () => {
            expect(particle1.getVelocity()).toBeUndefined();
        });

        test('setVelocity()', () => {
            particle1.setVelocity(position1);
            expect(particle1.getVelocity()).toBe(position1);
        });

        test('getFillColor()', () => {
            expect(particle1.getFillColor()).toBeUndefined();
        });

        test('setFillColor', () => {
            particle1.setFillColor(color_string);
            expect(particle1.getFillColor()).toBe(color_string);
        });

        test('getBorderWidth()', () => {
            expect(particle1.getBorderWidth()).toBeUndefined();
        });

        test('setBorderWidth()', () => {
            particle1.setBorderWidth(test_number1);
            expect(particle1.getBorderWidth()).toBe(test_number1);
        });

        test('getBorderColor', () => {
            expect(particle1.getBorderColor()).toBeUndefined();
        });

        test('setBorderColor', () => {
            particle1.setBorderColor(color_string);
            expect(particle1.getBorderColor()).toBe(color_string);
        });
    });

    // SAD PATH
    describe('Sad Path Testing', () => {
        test('constructor() with wrong first param', () => {
            expect(() => {
                let p = new Particle(test_number1, position1, test_number1);
            }).toThrowError(new InvalidArgumentException(test_number1 + ' is not a string!'));
        });

        test('constructor() with wrong second param', () => {
            expect(() => {
                let p = new Particle(name1, test_number1, test_number1);
            }).toThrowError(new InvalidArgumentException(test_number1 + ' is not a Vector2d!'));
        });

        test('constructor() with wrong third param', () => {
            expect(() => {
                let p = new Particle(name1, position1, position2);
            }).toThrowError(new InvalidArgumentException(position2 + ' is not a number!'));
        });

        test('setPosition() with wrong first param', () => {
            expect(() => {
                particle1.setPosition(test_number1);
            }).toThrowError(new InvalidArgumentException(test_number1 + ' is not a Vector2d!'));
        });

        test('setRadius() with wrong first param', () => {
            expect(() => {
                particle1.setRadius(position1);
            }).toThrowError(new InvalidArgumentException(position1 + ' is not a number!'));
        });

        test('setVelocity() with wrong first param', () => {
            expect(() => {
                particle1.setVelocity(test_number1);
            }).toThrowError(new InvalidArgumentException(test_number1 + ' is not a Vector2d!'));
        });

        test('setFillColor() with wrong first param', () => {
            expect(() => {
                particle1.setFillColor(test_number1);
            }).toThrowError(new InvalidArgumentException(test_number1 + ' is not a string!'));
        });

        test('setBorderWidth() with wrong first param', () => {
            expect(() => {
                particle1.setBorderWidth(position1);
            }).toThrowError(new InvalidArgumentException(position1 + ' is not a number!'));
        });

        test('setBorderColor() with wrong first param', () => {
            expect(() => {
                particle1.setBorderColor(test_number1);
            }).toThrowError(new InvalidArgumentException(test_number1 + ' is not a string!'));
        });
    });  
});