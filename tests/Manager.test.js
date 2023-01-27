const Manager = require("../lib/manager");

describe('obj build error', () => {
    it('should throw error if no name provided', () => {
        expect(() => new Manager()).toThrowError();
    })
})

describe('getRole()', () => {
    it('should return correct role', () => {
        const employee = new Manager("Ted", '5', "ted@ted.com", '3');
        expect(employee.getRole()).toBe('Manager');
    })
})

describe('getGithub()', () => {
    it('should return correct role', () => {
        const employee = new Manager("Ted", '5', "ted@ted.com", '3');
        expect(employee.getOffice()).toBe('3');
    })
})