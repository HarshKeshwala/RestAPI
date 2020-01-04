const mongoose = require('mongoose');
//Contact Model
const ContactSchema = mongoose.Schema({
        name: String,
        email: String,
        phone: String,
        note: String,
        resume: String,
})

module.exports = mongoose.model('Contacts', ContactSchema);
    