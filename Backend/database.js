const mongoose = require("mongoose");
require("dotenv").config();


const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`❌ Database connection failed: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

const getConnection = () => {
    return mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
};

module.exports = { connectDatabase, getConnection };
