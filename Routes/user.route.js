const express = require("express")
const router = express.Router()
const { getUser, createUser, updateUser, deleteUser } = require("../Controller/user.controller")

router.get("/",getUser)
router.post("/",createUser)
router.patch("/:id",updateUser)
router.delete("/:id",deleteUser)

module.exports = router