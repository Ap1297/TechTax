const express = require ('express');
const router = express.Router();

const ctrlUser = require('../controller/controller.js');

router.post('/contactDetails',ctrlUser.addContactDetails);
module.exports = router;   