// module.exports = {
//   port: 3000,
//   jwtSecret: "!!CryptoCat@!!",
//   jwtExpirationInSeconds: 60 * 60, // 1 hour
//   roles: {
//     USER: "user",
//     ADMIN: "admin",
//   },
// };

const mailer = {
  service: "gmail",
  auth: {
    user: "abiyprogramer221@gmail.com",
    pass: "",
    // pass: "dfbq rxsj ipqw yyct",
  },
};

module.exports = {
  mailer,
};
