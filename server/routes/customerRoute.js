const express = require('express');
const router = express.Router();

// import Customer model
const Customer = require('../models/Customer');


// @route GET api/
// @description Get all customer
// @access Public
router.get('/', (req, res) => {
    Customer.find()
        .then((customer) => res.json(customer))
        .catch((err) =>
            res.status(404).json({ nocustomerfound: 'No Customer found' })
        );
});

// @route GET api/:id
// @description Get single customer by id
// @access Public
router.get('/:id', (req, res) => {
    Customer.findById(req.params.id)
        .then((customer) => res.json(customer))
        .catch((err) => res.status(404).json({ nocustomerfound: 'No Customer found' }));
});

// @route POST api/
// @description add/save customer
// @access Public
router.post('/new-customer', (req, res) => {
    Customer.create(req.body)
        .then((customer) => res.json({ msg: 'Customer added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this customer' })
        );
});

// @route PUT api/:id
// @description Update customer
// @access Public
router.put('/:id', (req, res) => {
    Customer.findByIdAndUpdate(req.params.id, req.body)
        .then((customer) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete customer by id
// @access Public
router.delete('/:id', (req, res) => {
    Customer.findByIdAndRemove(req.params.id)
        .then(customer => res.json({ mgs: 'Customer entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such customer' }));
});

module.exports = router;
