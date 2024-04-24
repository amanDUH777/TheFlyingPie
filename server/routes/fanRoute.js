const express = require('express');
const router = express.Router();

// import Fan model
const Fan = require('../models/Fan');


// @route GET api/
// @description Get all Fan
// @access Public
router.get('/', (req, res) => {
    Fan.find()
        .then((fan) => res.json(fan))
        .catch((err) =>
            res.status(404).json({ nofanfound: 'No Fan found' })
        );
});

// @route GET api/:id
// @description Get single fan by id
// @access Public
router.get('/:id', (req, res) => {
    Fan.findById(req.params.id)
        .then((fan) => res.json(fan))
        .catch((err) => res.status(404).json({ nofanfound: 'No Fan found' }));
});

// @route POST api/
// @description add/save fan
// @access Public
router.post('/new-fan', (req, res) => {
    Fan.create(req.body)
        .then((fan) => res.json({ msg: 'Fan added successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to add this fan' })
        );
});

// @route PUT api/:id
// @description Update fan
// @access Public
router.put('/:id', (req, res) => {
    Fan.findByIdAndUpdate(req.params.id, req.body)
        .then((fan) => res.json({ msg: 'Updated successfully' }))
        .catch((err) =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route DELETE api/:id
// @description Delete customer by id
// @access Public
router.delete('/:id', (req, res) => {
    Fan.findByIdAndRemove(req.params.id)
      .then(fan => res.json({ mgs: 'Fan entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such fan' }));
  });

  module.exports = router;
