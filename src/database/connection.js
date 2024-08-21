import mongoose from 'mongoose'



export const db_Connection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI , {
            dbName: process.env.DBNAME
        })

        console.log("Database connection established")
    
    } catch (error) {
        console.log('Failed to establish database connection' , error)
    }


    
}