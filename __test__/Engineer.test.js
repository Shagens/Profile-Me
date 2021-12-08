const Engineer = require('../lib/Engineer.js');

test('creates Engineer object', () => {
    const engineer = new Engineer('Shikelia', '2', 'hagensshik@gmail.com', 'Shagens');
  
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
  });
  
  test('name', () => {
    const name = 'Shikelia';
    const engineer = new Engineer(name, '2', 'hagensshik@gmail.com', 'Shagens');
    expect(engineer.name).toEqual('Shikelia');
  });
  
  test('id', () => {
    const id = '2';
    const engineer = new Engineer('Shikelia', id, 'hagensshik@gmail.com', 'Shagens');
    expect(engineer.id).toEqual('2');
  });
  
  test('email', () => {
    const email = 'hagensshik@gmail.com';
    const engineer = new Engineer('Shikelia', '2', email, 'Shagens');
    expect(engineer.getEmail()).toEqual(email);
  });

  test('gitHub', () => {
    const gitHub = 'Shagens';
    const engineer = new Engineer('Shikelia', '2', 'hagensshik@gmail.com', gitHub);
    expect(engineer.getGithub()).toEqual(gitHub);
  });
  
  test('role', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Shikelia', '2', 'hagensshik@gmail.com', 'Shagens', role);
    expect(engineer.getRole()).toEqual(role);
  });