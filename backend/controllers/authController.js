const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

const { mailer } = require("../config");

const User = require("../models/User");

const signupValidation = require("../validation/signupValidation");
const loginValidation = require("../validation/loginValidation");
const { use } = require("../routes/profile");

const signup = async (req, res) => {
  const payload = req.body;

  const { error } = signupValidation(payload);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExist = await User.findOne({ where: { email: payload.email } });

  if (emailExist) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const verificationToken = Math.random().toString(36).substring(7);
  const user = User.build({
    firstName: payload.firstName,
    lastName: payload.lastName,
    userName: payload.userName,
    email: payload.email,
    password: hashedPassword,
    verificationToken: verificationToken,
  });
  const transporter = await nodemailer.createTransport(mailer);

  try {
    const savedUser = await user.save();

    const mailOptions = {
      from: "abiyprogramer221@gmail.com",
      to: payload.email,
      subject: "Account Verification",
      text: `Click the following link to verify your account:http://localhost:5173/user/verify/${verificationToken}`,
    };

    transporter
      .sendMail(mailOptions)
      .then(() => {
        res.status(201).json({ message: "Check your email for verification!" });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

const signin = async (req, res) => {
  const payload = req.body;
  const { error } = loginValidation(payload);

  const user = await User.findOne({ where: { email: payload.email } });
  if (!user) return res.status(400).send("Incorrect email or password.");

  const validPass = await bcrypt.compare(payload.password, user.password);
  if (!validPass) return res.status(400).send("Incorrect email or password.");

  const token = jwt.sign(
    {
      firstName: payload.firstName,
      lastName: payload.lastName,
      userName: payload.userName,
      email: payload.email,
    },
    process.env.TOKENSECRET
  );
  res.header("auth-token", token).send(token);
};

const verify = async (req, res) => {
  const { token } = req.query;
  try {
    const user = await User.findOne({ where: { verificationToken: token } });
    if (!user) {
      return res.status(404).send("Invalid verification token");
    }

    user.verified = true;
    user.verificationToken = null;
    await user.save();
    res.status(200).send("Email verified successfully!");
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

module.exports = {
  signin,
  signup,
  verify,
};
