import { NextFunction, Request, Response, Router } from "express";

import {default as taskController} from "../controllers/task";
class Contact {
  public router: Router;
  public constructor() {
    this.router = Router();
    this.init();
  }
  private init() {
    this.router.get("/read", taskController.read);
    this.router.post("/add", taskController.add);
    this.router.put("/update", taskController.update);
    this.router.delete("/remove", taskController.remove);
  }
}

const contactRoutes = new Contact();
export default contactRoutes.router;
