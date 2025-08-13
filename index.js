const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();


//middleware
app.use(express.json());



//routes
app.use('/api/products', productRoute);

app.get('/',(req,res)=>{
    res.send("Hello, World!");
    // const product = mongoose.connection.db.collection.find('products').toString();
    // res.json(product);
});


mongoose.connect(dbURI,{
}).then(()=>{
    console.log("Connected to database!"); 
    app.listen(5000,()=>{
        console.log("Server is running on port 5000"); 
    });
}).catch(()=>{
    console.log("Error connecting to databae!");
});



