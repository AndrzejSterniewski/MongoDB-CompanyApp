const Employee = require('../employee.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {
    it('should throw an error if no arg provided', () => {
        const emp = new Employee({});

        emp.validateSync(err => {
            expect(err.errors).to.exist;
        });
    });
    it('should throw an error when no "firstName" arg', () => {
        const emp = new Employee({
            lastName: "Doe",
            department: "IT"
        });
        emp.validateSync(err => {
            expect(err.errors.firstName).to.exist;
        })
    });
    it('should throw an error when no "lastName" arg', () => {
        const emp = new Employee({
            firstName: "John",
            department: "IT"
        });
        emp.validateSync(err => {
            expect(err.errors.lastName).to.exist;
        })
    });
    it('should throw an error when no "department" arg', () => {
        const emp = new Employee({
            firstName: "John",
            lastName: "Doe"
        });
        emp.validateSync(err => {
            expect(err.errors.department).to.exist;
        })
    });
    it('should throw an error when "firstName" arg is not a string', () => {
        const cases = [{}, []];
        for (let firstName of cases) {
            const emp = new Employee({
                firstName,
                lastName: "Doe",
                department: "IT"
            });
            emp.validateSync(err => {
                expect(err.errors.firstName).to.exist;
            });
        }
    });
    it('should throw an error when "lastName" arg is not a string', () => {
        const cases = [{}, []];
        for (let lastName of cases) {
            const emp = new Employee({
                firstName: "John",
                lastName,
                department: "IT"
            });
            emp.validateSync(err => {
                expect(err.errors.lastName).to.exist;
            });
        }
    });
    it('should throw an error when "department" arg is not a string', () => {
        const cases = [{}, []];
        for (let department of cases) {
            const emp = new Employee({
                firstName: "John",
                lastName: "Doe",
                department
            });
            emp.validateSync(err => {
                expect(err.errors.department).to.exist;
            });
        }
    });
    it('should not throw an error if all args are okay', () => {
        const cases = [
            {
                firstName: "John",
                lastName: "Doe",
                department: "IT"
            },
            {
                firstName: "Amanda",
                lastName: "Doe",
                department: "Testing"
            },
            {
                firstName: "Thomas",
                lastName: "Jefferson",
                department: "Marketing"
            }
        ];
        for (let employee of cases) {
            const emp = new Employee({ employee });
            emp.validateSync(err => {
                expect(err).to.not.exist;
            });
        }
    });
});