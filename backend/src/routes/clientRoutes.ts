import express from 'express'
import { ClientController} from '../controllers/clientControllers';
import { petController } from '../controllers/petControllers';
import { ProductController } from '../controllers/productControllers';
import { ServiceController } from '../controllers/serviceControllers';
import { purchaseController } from '../controllers/purchaseControllers';
import { AnalyticsController } from '../controllers/analyticsControllers';

const router = express.Router();

router
    .route('/clients')
    .post(ClientController.createClient)
    .get(ClientController.getClients)
router
    .route('/clients/:id')
    .patch(ClientController.updateClient)
    .delete(ClientController.deleteClient)
    .get(ClientController.getClientById)

router.route('/pets')
    .post(petController.createPet)   
    .get(petController.getAllPets);     
  
router.route('/pets/:id')
    .get(petController.getPetById)   
    .patch(petController.updatePet)   
    .delete(petController.deletePet);

router.route('/products')
    .post(ProductController.createProduct)
    .get(ProductController.getProducts);
  
router.route('/products/:id')
    .get(ProductController.getProductById)
    .patch(ProductController.updateProduct)
    .delete(ProductController.deleteProduct);

router.route('/services')
    .post(ServiceController.createService)
    .get(ServiceController.getServices);
  
router.route('/services/:id')
    .get(ServiceController.getServiceById)
    .patch(ServiceController.updateService)
    .delete(ServiceController.deleteService);
  

router.post("/purchases", purchaseController.createPurchase);
    router.get("/purchases", purchaseController.getPurchases);
    router.get("/purchases/:id", purchaseController.getPurchaseById);
    router.delete("/purchases/:id", purchaseController.deletePurchase);
    
    router.get('/analytics/top-clients-products', AnalyticsController.getTopClientsByProducts);

    // Route to get top 5 clients by total spending
    router.get('/analytics/top-clients-spending', AnalyticsController.getTopClientsBySpending);
    
    // Route to get most popular products
    router.get('/analytics/popular-products', AnalyticsController.getMostPopularProducts);
    
    // Route to get most popular services
    router.get('/analytics/popular-services', AnalyticsController.getMostPopularServices);
    
    // Route to get most popular products/services by pet type and breed
    router.get('/analytics/popular-items-pets', AnalyticsController.getPopularItemsByPetTypeAndBreed);
export default router