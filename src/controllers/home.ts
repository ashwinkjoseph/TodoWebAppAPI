import { Request, Response } from "express";
export class Home {
  /**
   * GET /
   * Home page.
   */
  public index(req: Request, res: Response) {
    res.render("home", {
      title: "Home",
    });
  }
}

const homeController = new Home();
export default homeController;
