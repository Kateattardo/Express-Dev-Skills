const Skill = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skills.getOne(req.params.id),
    });
  }
  module.exports = {
    index
  };
	
