const express = require('express');
const router = express.Router();

// import Menu model
const Menu = require('../models/Menu');


// @route GET api/
// @description Get all Menu
// @access Public
router.get('/', (req, res) => {
    Menu.find()
        .then((menu) => res.json(menu))
        .catch((err) =>
            res.status(404).json({ nomenufound: 'No Menu found' })
        );
});

// @route GET api/:id
// @description Get single Menu by id
// @access Public
router.get('/:id', (req, res) => {
    Menu.findById(req.params.id)
        .then((menu) => res.json(menu))
        .catch((err) => res.status(404).json({ nomenufound: 'No Menu found' }));
});

// @route POST api/
// @description add/save Menu
// @access Public
router.post('/new-menu', (req, res) => {
    Menu.create(req.body)
        .then((menu) => res.json({ msg: 'Menu added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this menu' })
        );
});

// @route PUT api/:id
// @description Update Menu
// @access Public
router.put('/:id', (req, res) => {
    Menu.findByIdAndUpdate(req.params.id, req.body)
        .then((menu) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete customer by id
// @access Public
router.delete('/:id', (req, res) => {
    Menu.findByIdAndRemove(req.params.id)
      .then(menu => res.json({ mgs: 'Menu entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such menu' }));
  });

  module.exports = router;
