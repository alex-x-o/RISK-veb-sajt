const express = require("express");
const userController = require("./userController");
const resetPasswordController = require("./resetPasswordController");

const router = express.Router();

router.get("/:id", userController.getProfileById);

router.post("/register", userController.register);

router.post("/login", userController.login);

router.put("/:id", userController.updateProfile);

router.post("/reset-password", resetPasswordController.resetPassword);

router.post("/validate-password-token/:resetToken", resetPasswordController.validPasswordToken);

router.post("/set-new-password", resetPasswordController.newPassword);

module.exports = router;


