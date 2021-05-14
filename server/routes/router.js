const expres = require("express");
const route = expres.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
/**
 * @description Root Route
 * @method Get
 */
route.get("/", services.homeRoutes);
/**
 * @description Add Users
 * @method Get/add-users
 */

route.get("/add-user", services.add_user);

/**
 * @description update Users
 * @method Get/update-users
 */
route.get("/update-user", services.update_user);

//API
route.post("/api/users",controller.create)
route.get("/api/users",controller.find)
route.put("/api/users/:id",controller.update)
route.delete("/api/users/:id",controller.delete)




module.exports = route;
