import { Router } from "express";
import curso from "../../curso.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(curso);
});

export default router;
