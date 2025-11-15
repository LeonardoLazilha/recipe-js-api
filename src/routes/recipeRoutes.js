import {Router} from "express";
import { create, get, update, remove } from "../controllers/recipeController.js";

const router = Router();

router.post("/", create)
router.get("/", get)
router.put("/:id", update)
router.delete("/:id", remove)

export default router;
