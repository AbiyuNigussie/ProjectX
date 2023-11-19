const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signupValidation = require("../validation/signupValidation");
const loginValidation = require("../validation/loginValidation");
router.post("/signup", async (req, res) => {
  const payload = req.body;

  const { error } = signupValidation(payload);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ where: { email: payload.email } });
  //   console.log(payload.email);
  //   console.log(emailExist);
  if (emailExist) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = User.build({
    firstName: payload.firstName,
    lastName: payload.lastName,
    userName: payload.userName,
    email: payload.email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user.id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const payload = req.body;
  const { error } = loginValidation(payload);

  const user = await User.findOne({ where: { userName: payload.userName } });
  if (!user) return res.send(400).send("Email is not Found!");

  const validPass = await bcrypt.compare(payload.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password!");

  const token = jwt.sign({ id: user.id }, process.env.TOKENSECRET);
  res.json({
    user: {
      userId: user._id,
      username: user.useName,
      email: user.email,
      profile: {
        firstName: user.firstName,
        lastName: user.lastName,
        accessToken: token,
      },
    },
  });
});

module.exports = router;
