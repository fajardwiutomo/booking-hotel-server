import express from "express";
import { allUser, deleteUser, oneUser, updateUser } from "../controllers/User.js";
import { createError } from "../utils/errorFiles.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";


const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send('Heloo user you authentication')
// })

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send('You are user, you just login and can delete your account')
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send('You admin, you just login and can delete all account')
// })



//UPDDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET User BY ID
router.get("/:id", verifyUser, oneUser);

//GET ALL
router.get("/",verifyAdmin, allUser);


export default router;
