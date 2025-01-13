const express = require ('express');
const router = express.Router();
const cors = require("cors");

const ctrlUser = require('../controller/controller.js');
router.use(cors({
    origin: "http://localhost:3000", // Allow this specific origin
    methods: ["GET", "POST"],       // Allow these HTTP methods
    allowedHeaders: ["Content-Type"] // Allow these headers
}));
router.post('/contactDetails',ctrlUser.addContactDetails);
module.exports = router;   