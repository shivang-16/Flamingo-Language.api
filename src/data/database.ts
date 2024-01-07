import mongoose, { mongo } from 'mongoose'

const ConnectToDB = async():Promise<void> => {
     const MongoUri:string = 'mongodb://127.0.0.1:27017'
     try {
        await mongoose.connect(MongoUri, {
            dbName: 'Flamingo'
        })
        console.log("Database Connected")
     } catch (error) {
        console.log("Database connection error")
     }
}

export default ConnectToDB