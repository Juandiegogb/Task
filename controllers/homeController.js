const controller = {};

controller.home = (req, res) => {
  res.render("/tools/home");
};

module.exports = controller;
