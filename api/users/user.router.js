const { createUser, getUserByID, getUsers, UpdateUser, DeleteUser, login } = require('./user.controller');
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
router.post("/", createUser);
router.get("/:id", checkToken, getUserByID);
router.get("/", checkToken, getUsers);
router.patch("/", checkToken, UpdateUser);
router.delete("/", checkToken, DeleteUser);
router.post("/login", login);
module.exports = router;