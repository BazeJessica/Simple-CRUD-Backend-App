const Product = require("../models/product.model");



//to view all products in the database
const getProducts = async (req,res)=>{
    try{
        const products = await  Product.find({});
        res.status(201).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}


//to view a single product in the database
const getProduct = async (req,res)=>{
     try{
            const {id} = req.params;
            const product = await Product.findById(id);
            res.status(201).json(product);
        }catch(err){
            res.status(500).json({message: err.message});
        }
}

//craete a product
const createProduct = async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({message: err.message})
    }
}


//update a product in the database
const updatedProduct = async (req,res)=>{
    try{
            const {id} = req.params;
    
            const product = await Product.findByIdAndUpdate(id, req.body);
    
            if(!product){
               return res.status(404).json({message: "Product not found"});
            };
    
           const updatedProduct = await Product.findById(id);
            res.status(201).json(updatedProduct);
    
        }catch(error){
            res.status(500).json({message: error.message});
        }
}

//delete a product in the database
const deleteProduct = async(req,res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
           return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product deleted successfully"});
    }catch(err){
        res.status(500).json({message: err.message});
    }
}
module.exports = {getProducts, getProduct,createProduct,updatedProduct,deleteProduct};