const mongoose=require("mongoose");
const vaccinationSchema= new mongoose.Schema({
    firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	age: { type: Number, required: true },
	verified: { type: Boolean, default: false },
    gender: { type: String,required:true},
    address:  { type: String,required:true},
    phoneNumber: { type: Number, required: true },
})
const Vaccination=new mongoose.model("vaccination",vaccinationSchema);

module.exports= Vaccination;