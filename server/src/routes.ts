import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";
import UsersController from "./controllers/UsersController";

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const usersController = new UsersController();

routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);
routes.put("/classes", classesController.update);

routes.get("/connections", connectionsController.index);
routes.post("/connections", connectionsController.create);

routes.get("/users", usersController.index);
routes.put("/users", usersController.update);

export default routes;
