const router = require("express").Router();
const Vaccination = require("../models/vaccination");

router.post("/", (req, res) => {
  Vaccination.findOne({ _id: req.body.id}, async (err, vaccination) => {
    if (err) throw err;
    if (vaccination) {
      (vaccination.verified = !vaccination.verified), await vaccination.save();
      console.log(vaccination);
      res.send("Saved");
      console.log("saved");
    }
  });
});
module.exports = router;
