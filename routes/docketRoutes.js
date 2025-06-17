import express from "express";
import {
  createDocket,
  getAllDockets,
  getDocketById,
  updateDocket,
  deleteDocket,
  generateGRNNumber,
} from "../controllers/docketController.js";

const router = express.Router();

router.get("/generate/grn-number", generateGRNNumber);
router.post("/", createDocket);
router.get("/", getAllDockets);
router.get("/:id", getDocketById);
router.put("/:id", updateDocket);
router.delete("/:id", deleteDocket);

export default router;
