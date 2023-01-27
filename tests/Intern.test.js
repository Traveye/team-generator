const Intern = require("../lib/intern");

describe('obj build error', () => {
    it('should throw error if no name provided', () => {
        expect(() => new Intern()).toThrowError();
    })
})

describe('getRole()', () => {
    it('should return correct role', () => {
        const employee = new Intern("Ted", '5', "ted@ted.com", 'FSU');
        expect(employee.getRole()).toBe('Intern');
    })
})

describe('getGithub()', () => {
    it('should return correct role', () => {
        const employee = new Intern("Ted", '5', "ted@ted.com", 'UNF');
        expect(employee.getSchool()).toBe('UNF');
    })
})