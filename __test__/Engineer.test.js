const Engineer = require('../lib/Engineer.js');

test('creates Engineer object', () => {
    const engineer = new Engineer('kelia', 002, 'kelia@email.com', 'shagens');
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
  });
  
  test('name', () => {
    const name = 'kelia';
    const engineer = new Engineer(name, 002, 'kelia@email.com', 'shagens');
    expect(engineer.name).toEqual(name);
  });
  
  test('id', () => {
    const id = '002';
    const engineer = new Engineer('kelia', id, 'kelia@email.com', 'shagens');
    expect(engineer.id).toEqual(id);
  });
  
  test('email', () => {
    const email = 'kelia@email.com';
    const employee = new Engineer('kelia', 002, email, 'shagens');
    expect(employee.getEmail()).toEqual(email);
  });

  test('github', () => {
    const github = 'shagens';
    const engineer = new Engineer('kelia', 333, 'kelia@email.com', github);
    expect(engineer.getGitHub()).toEqual(github);
  });
  
  test('role', () => {
    const role = 'Engineer';
    const engineer = new Engineer('kelia', 002, 'kelia@email.com', 'shagens');
    expect(engineer.getRole()).toEqual(role);
  });