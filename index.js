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


mongoose.connect('mongodb+srv://ennorbaze202:YhjK5xDh9HENuvb8@cluster0.ulq3aq4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0',{
}).then(()=>{
    console.log("Connected to database!"); 
    app.listen(5000,()=>{
        console.log("Server is running on port 5000"); 
    });
}).catch(()=>{
    console.log("Error connecting to databae!");
});



