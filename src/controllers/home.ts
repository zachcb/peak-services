import { Request, Response } from "express";

/**
 * GET /
 * Home page.
 */
export const index = (req: Request, res: Response) => {
  res.render("index", {
    title: "Home",
  });
};

/**
 * GET /example
 * Home page.
 */
export const example = (req: Request, res: Response) => {
  res.render("home", {
    title: "Home",
  });
};
