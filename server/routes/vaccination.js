const router =require("express").Router();
const Vaccionation =require("../models/vaccination");

router.post("/",async(req,res)=>{
    try {
		let vaccination = await new Vaccionation({ ...req.body }).save();
			res.status(200)
			.send({ message: "Your vaccination Slot Booked Successfully " });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
})
module.exports=router;