var express = require('express');
const product_controller=require('../controllers/product.cotroller')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId: 'home' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { page: 'About Us', menuId: 'about' });
});

router.get('/contact', function(req, res, next) {
  res.render('index', { page: 'Contact US', menuId: 'contact' });
});


//crud operations
//It will show our products
router.get('/list',product_controller.product_list);

//It will show us insert form
router.get('/createform',product_controller.product_formcreate);
//It will perform insert operation
router.post('/create',product_controller.product_create);

//delete operation
router.post('/:id/delete',product_controller.product_delete);

//update form
router.post('/updateform/:id',product_controller.product_updateform);
router.post('/:id/update',product_controller.product_update);


module.exports = router;
