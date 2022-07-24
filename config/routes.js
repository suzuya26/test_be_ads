const express = require('express');
const controllers = require('../app/controllers');
const uploadOnMemory = require("../app/middleware/uploadOnMemory");

const apiRouter = express.Router();

apiRouter.get('/', controllers.api.v1.landingController.home);

apiRouter.post('/upload-asset-to-cloud', uploadOnMemory.single("picture"),controllers.api.v1.productAssetsController.uploadAssetCloud);
apiRouter.delete('/delete-asset-from-cloud',controllers.api.v1.productAssetsController.deleteAssetCloud);

apiRouter.post('/upload-product',controllers.api.v1.productController.uploadProduct);
apiRouter.post('/edit-product/:id',controllers.api.v1.productController.editProduct);
apiRouter.get('/get-all-products',controllers.api.v1.productController.getAllProducts);
apiRouter.get('/get-product/:id',controllers.api.v1.productController.getProductsById);
apiRouter.delete('/delete-product/:id',controllers.api.v1.productController.deleteProduct);

apiRouter.post('/add-asset/:idproduct',controllers.api.v1.productAssetsController.addAsset);
apiRouter.delete('/delete-asset/:idasset',controllers.api.v1.productAssetsController.removeAsset);

apiRouter.get('/get-all-categories',controllers.api.v1.categoriesController.getAllCategories);
apiRouter.get('/get-most-categories',controllers.api.v1.categoriesController.getMostCategories);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
