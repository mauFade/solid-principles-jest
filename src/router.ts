import { Router } from "express";

import UserController from "./controllers/UserController";

const router = Router();

router.post("/v1/users", UserController.create);
router.get("/v1/users", UserController.read);

export default router;
