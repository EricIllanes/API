const categoryRouter = require('express').Router();
const { getCategories, getCategoriesByName, createCategory, deleteCategory } = require('./categoriesFunctions')

categoryRouter.get('/', getCategories)

categoryRouter.get('/:name', getCategoriesByName)

categoryRouter.post('/create', createCategory)

categoryRouter.delete('/delete/:name', deleteCategory)

    

module.exports = categoryRouter;




















// Category.findOne({ name })
        // .then(products =>{
        //     if(products) {
        //         return res.json(products)
        //     } else {
        //         res.status(404).end()
        //     }
        // })// busca nota por id mas facil xd