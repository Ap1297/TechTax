const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const Contact  = require("./models/ContactUs.js");

mongoose.connect("mongodb+srv://dbUser:dbUser@cluster0.3flln.mongodb.net/TechTax?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/api/contactUs", async (req, res) => {
    try {
        const contact = await Contact.find();
        res.json(contact);
    } catch(error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));