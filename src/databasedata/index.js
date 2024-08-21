import { db_Connection } from "@/database/connection";
import { ProductModel } from "@/models";


db_Connection()

export const ProductData = async () => {

    const data = await ProductModel.find({  })
    return data
    
}