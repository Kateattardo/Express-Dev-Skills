const skills = [
    {id: 1, skill: "watching lessons", level: advanced},
    {id: 2, skill: "complete code-alongs", level: advanced},
    {id: 3, skill: "complete SEI courses", level: basic},
    {id: 4, skill: "javascript", level: basic},
    {id: 5, skill: "html", level: intermediate},
    {id  6, skill: "CSS", level: intermediate},
    {id  7, skill: "node.js" level: basic},
    {id  8, skill: "express" level: basic},

  ];
  function getAll() {
    return skills;
  }
	
  module.exports = {
    getAll
    //getOne,
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
	

  //function getOne(id) {
    // URL params are strings - convert to a number
   // id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    //return skills.find(skill => skill.id === id);
  