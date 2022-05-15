const Product = require('../models/product');
const shortid = require('shortid');
const slugify = require('slugify');

exports.createProduct = (req, res) => {

       const {

        name, price, description, category, quantity, createdBy

       } = req.body;
       let prodctPictures = [];

       if(req.files.length > 0){
            prodctPictures =  req.files.map(file => {
                return {img: file.filename}
            });
       }


  //  res.status(200).json({file: req.files, body: req.body});
      const product = new Product({

        name: name,
        slug:  slugify(name),
        price,
        quantity, 
        description,
        prodctPictures,
        category,
        createdBy: req.user._id



      });

      product.save(((error, product) => {
        if(error) return res.status(400).json({error})
        if(product){
            res.status(201).json({ product });
        }
      }));

};