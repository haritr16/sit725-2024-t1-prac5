const Form = require('../models/formModel');

exports.form_submit = (req, res) => {
    const { name, email, car } = req.body;
    const newForm = new Form({ name, email, car });
    newForm.save()
        .then(() => res.send('Form submitted successfully'))
        .catch(err => console.log(err));
};


exports.get_forms = (req, res) => {
    Form.find()
        .then(forms => res.json(forms))
        .catch(err => console.log(err));
};