const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require("../controllers/user.controller");

var sessionChecker = (req, res, next) => {
  if (!req.cookies.emailId) {
    res.status(404).redirect("/sign-in");
  }
  next();
};
router.post("/createuser", user_controller.create_user);
router.post("/loginuser", user_controller.login_user);

router
  .route("/logoutuser")
  .get(sessionChecker)
  .get(user_controller.logout_user);

module.exports = router;
