const skills = [
    {id: 1, skill: 'watching lessons', done: true},
    {id: 2, skill: 'complete code-alongs', done: false},
    {id: 3, skill: 'complete SEI immersive', done: false},
    {id: 4, skill: 'HTML', done: true},
    {id: 5, skill: 'CSS', done: true},
    {id: 6, skill: 'javascript',done: true},
];
function getAll() {
  return skills;
};


  module.exports = {
    getAll,
   // getOne,
    create,
    deleteOne
};
	
function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
};
      
function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.level = "beginner";
    skills.push(skill);
  };
	