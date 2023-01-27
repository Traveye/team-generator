const Engineer = require("../lib/engineer");

describe('obj build error', () => {
    it('should throw error if no name provided', () => {
        expect(() => new Engineer()).toThrowError();
    })
})

describe('getRole()', () => {
    it('should return correct role', () => {
        const employee = new Engineer("Ted", '5', "ted@ted.com", 'ted05');
        expect(employee.getRole()).toBe('Engineer');
    })
})

describe('getGithub()', () => {
    it('should return correct role', () => {
        const employee = new Engineer("Ted", '5', "ted@ted.com", 'ted05');
        expect(employee.getGithub()).toBe('ted05');
    })
})