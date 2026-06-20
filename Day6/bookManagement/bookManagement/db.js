import mongoose from 'mongoose'

const connection = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connection succesfull`)
    }
    catch(err){
        console.log(`MongoDB Connection error: ${err}`)
    }
}
export default connection;