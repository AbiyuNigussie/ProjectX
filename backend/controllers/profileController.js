const profile = (req, res) => {
  const userProfile = req.user;
  res.send(userProfile);
};

module.exports = {
  profile,
};
