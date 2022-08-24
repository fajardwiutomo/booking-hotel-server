import express from "express";
import { allRoom, createRoom, deleteRoom, oneRoom, updateRoom } from "../controllers/room.js";
import { createError } from "../utils/errorFiles.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin,  createRoom);

//UPDDATE
router.put("/:id",  verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelId",  verifyAdmin, deleteRoom);

//GET ALL
router.get("/", allRoom);

//GET Room BY ID
router.get("/:id", oneRoom);

export default router;
