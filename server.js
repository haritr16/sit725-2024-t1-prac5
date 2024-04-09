const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connection to MongoDB
const mongoURI = 'mongodb+srv://s223295149:cMLGEplq4XoycbeA@cluster0.uus7rft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

//  a mongoose schema
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    name: String,
    email: String,
    car: String
});

// Define a scheam called form to store form data
const Form = mongoose.model('Form', FormSchema);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// API to handle form submission
app.post('/submit', (req, res) => {
    const { name, email, car } = req.body;
    const newForm = new Form({ name, email, car });
    newForm.save()
        .then(() => res.send('Form submitted successfully'))
        .catch(err => console.log(err));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));






