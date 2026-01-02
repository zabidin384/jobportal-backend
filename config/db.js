const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {});
		mongoose.connection.on("connected", () => console.log("Database connected!"));
		mongoose.connection.off("disconnected", () => console.log("Database off!"));
	} catch (error) {
		console.error("Error connecting to MongoDB", error);
		process.exit(1);
	}
};

module.exports = connectDB;
