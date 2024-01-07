import mongoose from 'mongoose';
const ConnectToDB = async () => {
    const MongoUri = 'mongodb://127.0.0.1:27017';
    try {
        await mongoose.connect(MongoUri, {
            dbName: 'Flamingo'
        });
        console.log("Database Connected");
    }
    catch (error) {
        console.log("Database connection error");
    }
};
export default ConnectToDB;
