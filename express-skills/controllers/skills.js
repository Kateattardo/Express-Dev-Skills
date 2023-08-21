const Skills = require('../models/skill');

function index(req, res) {
    res.render('..views/skills/index', {
      skills: Skills.getAll()
    });
  };

  module.exports = {
    index
    new: newSkill,
    create,
    delete: deleteSkill
  };
	
  function deleteSkill(req, res) {
    Skills.deleteOne(req.params.id);
    res.redirect('/skills');
  };
    
  function create(req, res) {
    console.log(req.body);
    Skills.create(req.body);
    res.redirect('/skills');
  };
        
  function newSkill(req, res) {
      res.render('skills/new', { title: 'New Skill' });
    };
