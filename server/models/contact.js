const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	number: { type: Number, required: true },
    text: { type: String, required: true }
	
});

const Contact = mongoose.model("contact", contactSchema);
module.exports =Contact;