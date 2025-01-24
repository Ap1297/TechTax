const express = require ('express');
const router = express.Router();
const cors = require("cors");

const ctrlUser = require('../controller/controller.js');
const corsOptions = {
    origin: ["http://localhost:3000", "https://techtax.netlify.app"], // Allow localhost and Netlify
    methods: ["GET", "POST"],      // Allow these HTTP methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
};
router.use(cors(corsOptions));

router.post('/contactDetails',ctrlUser.addContactDetails);
module.exports = router;   