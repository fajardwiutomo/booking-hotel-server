import express from "express";
import { allHotel, countByCity, countByType, createHotel, deleteHotel, oneHotel, updateHotel } from "../controllers/hotel.js";
import { createError } from "../utils/errorFiles.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/", verifyAdmin,  createHotel);

//GET ALL
router.get("/", allHotel);

//Count By city
router.get("/countByCity", countByCity);

//count By Type
router.get("/countByType", countByType);
//UPDDATE
router.put("/:id",  verifyAdmin, updateHotel);

//DELETE
router.delete("/:id",  verifyAdmin, deleteHotel);


//GET HOTEL BY ID
router.get("/:id", oneHotel);


export default router;
