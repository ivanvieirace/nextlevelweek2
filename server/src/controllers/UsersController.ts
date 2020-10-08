import { Request, Response } from "express";
import db from "../database/connection";

export default class UsersController {
  async index(request: Request, response: Response) {
    const results = await db("users");

    return response.json({ results });
  }

  async update(request: Request, response: Response) {
    const { id, name, avatar } = request.body;

    await db("users").update({ name }).where({ id });
    await db("users").update({ avatar }).where({ id });

    return response.send();
  }
}
