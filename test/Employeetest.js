const Employee = require('../lib/Employee.js');

test('creates Employee object', () => {
  const employee = new Employee('jake', 004, 'jake@email.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('name', () => {
  const name = 'jake';
  const employee = new Employee(name, 004, 'jake@email.com');
  expect(employee.name).toEqual(name);
});

test('id', () => {
  const id = '004';
  const employee = new Employee('jake', id, 'jake@email.com');
  expect(employee.id).toEqual(id);
});

test('email', () => {
  const email = 'jake@email.com';
  const employee = new Employee('jake', 004, email);
  expect(employee.getEmail()).toEqual(email);
});

test('role', () => {
  const role = 'Employee';
  const employee = new Employee('jake', 004, 'jake@email.com');
  expect(employee.getRole()).toEqual(role);
});