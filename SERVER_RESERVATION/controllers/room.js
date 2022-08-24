import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/errorFiles.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};


export const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        {
          new: true,
        }
      );
      res.status(200).json(updatedRoom);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const deleteRoom = async (req, res, next) => {
      const hotelId = req.params.hotelId;
    try {
      const room = await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (error) {
        next(error);
      }
      res.status(200).json("ROOM HAS BEEN DELETE");
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const allRoom = async (req, res, next) => {
    try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
    } catch (error) {
      next(error);
    }
  };
  
  export const oneRoom = async (req, res, next) => {
    try {
      const oneRoom = await Room.findById(req.params.id);
      res.status(200).json(oneRoom);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
