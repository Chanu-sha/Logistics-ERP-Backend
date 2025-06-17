import express from "express";
import {
  createStatement,
  getStatements,
  getStatementById,
  updateStatement,
  deleteStatement,
} from "../controllers/statementController.js";

const router = express.Router();

router.route("/").post(createStatement).get(getStatements);

router
  .route("/:id")
  .get(getStatementById)
  .put(updateStatement)
  .delete(deleteStatement);

export default router;
