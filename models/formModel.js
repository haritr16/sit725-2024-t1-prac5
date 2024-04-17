const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    name: String,
    email: String,
    car: String
});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;
