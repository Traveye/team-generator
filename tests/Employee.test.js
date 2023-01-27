
const Employee = require("../lib/employee");

describe('obj build error', () => {
    it('should throw error if no name provided', () => {
        expect(() => new Employee()).toThrowError();
    })
})
describe('getName()', () => {
    it('should return correct name', () => {
        const employee = new Employee("Ted", '5', "ted@ted.com");
        expect(employee.getName()).toBe('Ted');
    })
})
describe('getId()', () => {
    it('should return correct ID', () => {
        const employee = new Employee("Ted", '5', "ted@ted.com");
        expect(employee.getId()).toBe('5');
    })
})
describe('getEmail()', () => {
    it('should return correct email', () => {
        const employee = new Employee("Ted", '5', "ted@ted.com");
        expect(employee.getEmail()).toBe('ted@ted.com');
    })
})
describe('getRole()', () => {
    it('should return correct role', () => {
        const employee = new Employee("Ted", '5', "ted@ted.com");
        expect(employee.getRole()).toBe('Employee');
    })
})

