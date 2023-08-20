const express = require('express');
const router = express.Router();

// Require the controller that exports To-Do CRUD functions
const skillsCtrl = require('../controllers/skills');

 // GET /skills
 router.get('/', skillsCtrl.index);

 
//all actual paths start with "/skills"


module.exports = router;
