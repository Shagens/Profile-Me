const Intern = require('../lib/Engineer.js');

test('creates Engineer object', () => {
    const engineer = new Engineer('kayla', 003, 'kayla@email.com', 'uncc');
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.school).toEqual(expect.any(String));
  });
  
  test('name', () => {
    const name = 'kayla';
    const engineer = new Engineer(name, 003, 'kayla@email.com', 'uncc');
    expect(engineer.name).toEqual(name);
  });
  
  test('id', () => {
    const id = '003';
    const engineer = new Engineer('kayla', id, 'kayla@email.com', 'uncc');
    expect(engineer.id).toEqual(id);
  });
  
  test('email', () => {
    const email = 'kayla@email.com';
    const employee = new Engineer('kayla', 003, email, 'uncc');
    expect(employee.getEmail()).toEqual(email);
  });

  test('school', () => {
    const school = 'uncc';
    const engineer = new Engineer('kayla', 003, 'kayla@email.com', school);
    expect(engineer.getGitHub()).toEqual(github);
  });
  
  test('role', () => {
    const role = 'Engineer';
    const engineer = new Engineer('kayla', 003, 'kayla@email.com', 'uncc');
    expect(engineer.getRole()).toEqual(role);
  });