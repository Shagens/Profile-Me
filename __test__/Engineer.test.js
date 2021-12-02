const Engineer = require('../lib/Engineer.js');

test('creates Engineer object', () => {
    const engineer = new Engineer('kelia', 2, 'kelia@email.com', 'shagens');
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
  });
  
  test('name', () => {
    const name = 'kelia';
    const engineer = new Engineer(name, 2, 'kelia@email.com', 'shagens');
    expect(engineer.name).toEqual('kelia');
  });
  
  test('id', () => {
    const id = '2';
    const engineer = new Engineer('kelia', id, 'kelia@email.com', 'shagens');
    expect(engineer.id).toEqual('2');
  });
  
  test('email', () => {
    const email = 'kelia@email.com';
    const engineer = new Engineer('kelia', 2, email, 'shagens');
    expect(engineer.getEmail()).toEqual(email);
  });

  test('gitHub', () => {
    const gitHub = 'shagens';
    const engineer = new Engineer('kelia', 2, 'kelia@email.com', gitHub);
    expect(engineer.getGithub()).toEqual(gitHub);
  });
  
  test('role', () => {
    const role = 'Engineer';
    const engineer = new Engineer('kelia', 2, 'kelia@email.com', 'gitHub', role);
    expect(engineer.getRole()).toEqual(role);
  });