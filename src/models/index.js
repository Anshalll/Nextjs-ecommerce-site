
import mongoose from "mongoose";



const ProductSchema = new mongoose.Schema({ 
    name: String,
    description: String,
    rating: Number,
    mainimage: String,
    price: Number,
    category: String,
    subcategory: String,
    discount: Boolean,
    discountValue: Number,
    relatedimage: String

})

export const ProductModel = mongoose.model('product' , ProductSchema)


