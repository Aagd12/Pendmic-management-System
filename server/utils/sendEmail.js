const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			secure:true,
			auth: {
			  user: 'medicinewala13@gmail.com', // Change this to your email address
			  pass: 'obgnbityicxuzwqi', // Change this to your email password or use environment variable
			},
		});

		await transporter.sendMail({
			from: 'medicinewala13@gmail.com', // Change this to your email address
			to: email,
			subject: 'Email Verification',
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};