const jwt = require("jsonwebtoken");
const { BlacklistModel } = require("../models/blacklist.model");

const auth = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    // const token = req.cookies.token
    if (token) {
      let checkToken = await BlacklistModel.find({ token });
      if (checkToken.length > 0) {
        return res.status(400).send({ error: "please login again" });
      }

      let decrypt = jwt.verify(token, "masai");
      req.body.userID = decrypt.userID;
      return next();
    } else {
      return res.status(400).send({ msg: "Please login again" });
    }
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};

module.exports = {
  auth,
};
