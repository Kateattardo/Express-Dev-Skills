const skills = [
    {skill: 'watching lessons', done: true},
    {skill: 'complete code-alongs', done: true},
    {skill: 'complete SEI immersive', done: false}
];

module.exports = {
    getAll: function() {
      return skills;
    }
  };
