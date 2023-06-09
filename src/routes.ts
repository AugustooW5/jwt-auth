import { Router, Request, Response } from "express";

import authMiddleware from "./app/middlewares/AuthMiddleware";

import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";

export const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.get('/users', authMiddleware, UserController.index)