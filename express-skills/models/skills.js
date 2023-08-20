const skills = [
    {id: 125223, skill: 'watching lessons', done: true},
    {id: 127904, skill: 'complete code-alongs', done: true,
    {id: 139608, todo: 'complete SEI', done: false}
  ];
	
  module.exports = {
    getAll
    getOne
  };
	
  function getAll() {
    return skills;
  }
  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return skills.find(skill => skill.id === id);
  }