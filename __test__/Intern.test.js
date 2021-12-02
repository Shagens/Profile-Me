const Intern = require('../lib/Intern.js');

test('creates Intern object', () => {
    const intern = new Intern('kayla', 3, 'kayla@email.com', 'uncc');
  
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
  });
  
  test('name', () => {
    const name = 'kayla';
    const intern = new Intern(name, 3, 'kayla@email.com', 'uncc');
    expect(intern.name).toEqual(name);
  });
  
  test('id', () => {
    const id = '3';
    const intern = new Intern('kayla', id, 'kayla@email.com', 'uncc');
    expect(intern.id).toEqual(id);
  });
  
  test('email', () => {
    const email = 'kayla@email.com';
    const intern = new Intern('kayla', 3, email, 'uncc');
    expect(intern.getEmail()).toEqual(email);
  });

  test('school', () => {
    const school = 'uncc';
    const intern = new Intern('kayla', 3, 'kayla@email.com', school);
    expect(intern.getSchool()).toEqual(school);
  });
  
  test('role', () => {
    const role = 'Intern';
    const intern = new Intern('kayla', 3, 'kayla@email.com', 'uncc');
    expect(intern.getRole()).toEqual(role);
  });