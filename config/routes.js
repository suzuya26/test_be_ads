const express = require('express');
const controllers = require('../app/controllers');
const uploadOnMemory = require("../app/middleware/uploadOnMemory");

const apiRouter = express.Router();

apiRouter.get('/', controllers.api.v1.landingController.home);
apiRouter.post('/upload-assets', uploadOnMemory.single("picture"),controllers.api.v1.productController.uploadAssets);
apiRouter.delete('/delete-assets',controllers.api.v1.productController.deleteAssets);


apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
