
import { Response, Request } from "express";

/**
 * GET /api
 * List of API examples.
 */
export const getApi = (req: Request, res: Response) => {
  res.render("api/index", {
    title: "API Examples",
  });
};

/**
 * GET /api2
 * List of API examples.
 */

export const getApi2 = (req: Request, res: Response) => {
  res.render("api/index", {
    title: "API Examples",
  });
};
