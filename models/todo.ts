import { Schema, model, Document, Model } from "mongoose";
import { ITodo } from "../types/todo";
const TodoSchema: Schema = new Schema({
  description: {
    type: String,
    required: true,
  },
});

type TodoType = ITodo & Document;

const TodoModel = model<TodoType>("Todo", TodoSchema);

export { TodoModel };
