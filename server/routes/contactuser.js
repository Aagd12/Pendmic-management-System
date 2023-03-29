const router=require("express").Router();
const  Contact =require ('../models/contact');

router.post("/",async(req,res) => {
    try {
		let contact = await new Contact({ ...req.body }).save();
			res.status(200)
			.send({ message: "You Contact Successfully " });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
})
module.exports =router;
