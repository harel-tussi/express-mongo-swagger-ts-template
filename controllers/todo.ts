import { Request, Response, NextFunction } from "express";
import { ITodo } from "../types/todo";
import { TodoModel } from "../models/todo";

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos: ITodo[] = await TodoModel.find({});
    return res.send(todos);
  } catch (error) {
    return res.status(500).send([]);
  }
};
