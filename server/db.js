const mongoose = require("mongoose");

module.exports = () => {
	const connection_url = "mongodb+srv://saurabh_175:saurabh_175@cluster0.pcgfhei.mongodb.net/?retryWrites=true&w=majority"



//Db config

mongoose.connect(connection_url, {}).catch((err) => console.log(err));
mongoose.connection.once("open", () => {
    console.log("db connected");
});

};
