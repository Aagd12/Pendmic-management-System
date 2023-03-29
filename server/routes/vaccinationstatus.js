const router = require("express").Router();
const Vaccination = require("../models/vaccination");
router.post("/", async (req, res) => {
  try {
    const vaccination = await Vaccination.findOne({ email: req.body.email });
    // console.log(vaccination);
    if ((vaccination===null )|| (vaccination.password!==req.body.password))
      return res.status(401).send({ message: "Invalid Email or Password" });
    // console.log("User ", vaccination);
    // const token = user.generateAuthToken();
    res.status(200).send({ message: "Your get your vaccination succesfully" });

  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const vaccination = await Vaccination.find();
    if (vaccination===null)
      return res.status(401).send({ message: "Invalid Email or Password" });
    // console.log("User vaccination status => ", vaccination);
    // const token = user.generateAuthToken();
    res.status(200).send(vaccination);

  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});


module.exports=router;