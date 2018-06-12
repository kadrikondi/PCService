var express = require('express');
var router = express.Router();
const homeController =require('../controllers/homeController')
const aboutController =require('../controllers/aboutController')
const serviceController =require('../controllers/serviceController')
const contactController =require('../controllers/contactController')

/* GET home page. */
router.get('/', homeController.Homepage );
router.get('/about', aboutController.Aboutpage );

router.get('/service', serviceController.Servicepage );
router.post('/contact/send', contactController.MessageFromCustomer );
router.get('/contact', contactController.ContactUs );






module.exports = router;
