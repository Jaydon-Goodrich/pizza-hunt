const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

//Set up GET all POST at /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// setup get one, put and delete
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;