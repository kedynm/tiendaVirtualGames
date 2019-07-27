const express = require('express')
const router1 = express.Router()


const {Product} = require('../../models')

router1.get('/', async (req, res, next) => {

    Product.find().exec()
    .then(products => {
        res.send(products)
    }).catch(err => {
        res.status(409).send(err)
    });

    console.log('request ', req.query);
})

router1.get('/:productId' , async (req, res, next)=>{
    const { productId } = req.params;

    console.log('request ', req.params)

    Product.findById(productId).exec()
    .then(product => 
        product 
        ? 
        res.send(product) 
        : 
        res.status(404).send(
            {
                message : 'Product not found'
            }
        )
    ).catch(err =>
        res.status(409).send(err))

})

router1.post('/', (req, res, next) => {

    const {id,imgUrl,name,price} = req.body
    const newProduct = Product( {id,imgUrl,name,price})
    newProduct.save((err,product)=>{
        err ? res.status(409).send(err) : res.status(201).send(product)
    })

    console.log('request ', req.body);

})

router1.put('/:productId', async (req, res, next) => {

    const { profileId: productId } = req.params;
    
    console.log('req ', req.params, req.body);

    Product.findByIdAndUpdate(productId,{$set:req.body},{new:true}).exec()
    .then(product => res.send(product))
    .catch(err => res.status(409).send(err))
})

router1.delete('/:productId', async (req, res, next) => {
    const { productId } = req.params;

    console.log('req ', req.params);

    Product.findByIdAndDelete(productId).exec()
    .then(product => res.send({message : 'producto eliminado'}))
    .catch(err => res.status(409).send(err))

})

module.exports = router1;