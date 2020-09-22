import { Router } from "express";
import { getTodos } from "../controllers/todo";
const router: Router = Router();

// Routes
/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request all todos
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *        description: Request failed
 */
router.route("/").get(getTodos);

export { router };
