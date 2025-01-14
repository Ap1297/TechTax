const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const rtsIndex = require('../serverComponents/routes/index.router');
const cors = require("cors");
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors({
    origin: ["http://localhost:3000", "https://eloquent-kheer-619334.netlify.app"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));

app.options('*', cors());

app.use(bodyParser.json());
app.use('/api',rtsIndex);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));