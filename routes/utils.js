const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact')


// Insert a contact
router.post('/', async (req, res) => {
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        note: req.body.note,
        resume: req.body.resume
    });

    try {
        const savedContact = await contact.save();
        res.json(savedContact);
    } catch (error) {
        res.json({ message: err })
    }
});
// Get all contacts
router.get('/', async (req, res) => {

    try{
        const contacts = await Contact.find();
        res.json(contacts);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router;