const jwt = require("jsonwebtoken");
const { blacklist } = require("../blacklist");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      if (blacklist.includes(token)) {
        res.json({ msg: "Please Login Again" });
      }
      const decoded = jwt.verify(token, "arivu");
      if (decoded) {
        next();
      } else {
        res.status(200).json({ msg: "not authorized" });
      }
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else {
    res.json({ msg: "Please Login" });
  }
};

module.exports = {
  auth,
};