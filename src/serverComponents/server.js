const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const rtsIndex = require('../serverComponents/routes/index.router');
const cors = require("cors");

mongoose.connect("mongodb+srv://dbUser:dbUser@cluster0.3flln.mongodb.net/TechTax?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors({
    origin: "https://techtax.onrender.com",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));

app.use(bodyParser.json());
app.use('/api',rtsIndex);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));