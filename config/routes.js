const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

apiRouter.get("/", controllers.api.v1.landingController.home);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
