const Manager = require('../lib/Manager.js');

test('creates Manager object', () => {
    const manager = new Manager('Bob', 1, 'Bob@email.com', 704-555-5555);
  
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });
  
  test('name', () => {
    const name = 'Bob';
    const manager = new Manager(name);
    expect(manager.name).toEqual(name);
  });
  
  test('id', () => {
    const id = '1';
    const manager = new Manager('Bob', id, 'Bob@email.com', '704-555-5555', 'role');
    expect(manager.id).toEqual(id);
  });
  
  test('email', () => {
    const email = 'Bob@email.com';
    const manager = new Manager('Bob', '1', email, '704-555-5555', 'role');
    expect(manager.getEmail()).toEqual(email);
  });
  
  test('officeNumber', () => {
    const officeNumber = 704-555-5555;
    const intern = new Manager('Bob', 1, 'Bob@email.com', officeNumber, 'role');
    expect(intern.officeNumber).toEqual(officeNumber);
  });

  test('role', () => {
    const role = 'Manager';
    const manager = new Manager('Bob', 1, 'Bob@email.com', '704-555-555', role);
    expect(manager.getRole()).toEqual(role);
  });