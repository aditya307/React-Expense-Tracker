const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // const conn = await mongoose.connect('mongodb+srv://adi1234:adi1234@cluster0-i4pgz.gcp.mongodb.net/test?retryWrites=true&w=majority',{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {
        console.log(`Error: ${err.message}`. red);
        process.exit(1);
        
    }
}
module.exports = connectDB;