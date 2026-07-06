const verifyToken = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");
const express = require("express");
const router = express.Router();
const { register,login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login",login);
// Admin Only Route
router.get(
  "/admin",
  verifyToken,
  authorize("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin"
    });
  }
);

// User and Admin Route
router.get(
  "/profile",
  verifyToken,
  authorize("admin", "user"),
  (req, res) => {
    res.json({
      message: "Welcome User"
    });
  }
);

module.exports = router;