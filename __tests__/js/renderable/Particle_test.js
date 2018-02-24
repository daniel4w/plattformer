import Vector2d from '../../../app/js/math/Vector2d';
import Particle from '../../../app/js/renderable/Particle';
const AssertionError = require('assert').AssertionError;

let x = 5,
    y = 10,
    test_number1 = 50,
    test_number2 = 100,
    name1 = 'name1',
    name2 = 'name2',
    color_string = "#656477",
    particle1,
    particle2;

beforeEach(() => {
    particle1 = new Particle(name1, x, y, test_number1);
    particle2 = new Particle(name2, x, y, test_number2);
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

        test('getX()', () => {
            expect(particle1.getX()).toBe(x);
        });

        test('setX()', () => {
            particle1.setX(test_number1);
            expect(particle1.getX()).toBe(test_number1);
        });

        test('getY()', () => {
            expect(particle1.getY()).toBe(y);
        });

        test('setY()', () => {
            particle1.setX(test_number1);
            expect(particle1.getX()).toBe(test_number1);
        });

        test('getRadius()', () => {
            expect(particle1.getRadius()).toBe(test_number1);
        });

        test('setRadius()', () => {
            particle1.setRadius(test_number2);
            expect(particle1.getRadius()).toBe(test_number2);
        });

        // test('getVelocity()', () => {
        //     expect(particle1.getVelocity()).toBeUndefined();
        // });

        // test('setVelocity()', () => {
        //     particle1.setVelocity(position1);
        //     expect(particle1.getVelocity()).toBe(position1);
        // });

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
                let p = new Particle(test_number1, x, y, test_number1);
            }).toThrow(AssertionError);
        });

        test('constructor() with wrong second param', () => {
            expect(() => {
                let p = new Particle(name1, name1, y, test_number1);
            }).toThrow(AssertionError);
        });

        test('constructor() with wrong third param', () => {
            expect(() => {
                let p = new Particle(name1, x, name1, test_number1);
            }).toThrow(AssertionError);
        });

        test('constructor() with wrong fourth param', () => {
            expect(() => {
                let p = new Particle(name1, x, y, name1);
            }).toThrow(AssertionError);
        });

        test('setX() with wrong first param', () => {
            expect(() => {
                particle1.setX(name1);
            }).toThrow(AssertionError);
        });

        test('setY() with wrong first param', () => {
            expect(() => {
                particle1.setY(name1);
            }).toThrow(AssertionError);
        });

        test('setRadius() with wrong first param', () => {
            expect(() => {
                particle1.setRadius(name1);
            }).toThrow(AssertionError);
        });

        // test('setVelocity() with wrong first param', () => {
        //     expect(() => {
        //         particle1.setVelocity(test_number1);
        //     }).toThrow(AssertionError);
        // });

        test('setFillColor() with wrong first param', () => {
            expect(() => {
                particle1.setFillColor(test_number1);
            }).toThrow(AssertionError);
        });

        test('setBorderWidth() with wrong first param', () => {
            expect(() => {
                particle1.setBorderWidth(name1);
            }).toThrow(AssertionError);
        });

        test('setBorderColor() with wrong first param', () => {
            expect(() => {
                particle1.setBorderColor(test_number1);
            }).toThrow(AssertionError);
        });
    });  
});