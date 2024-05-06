const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: String,
    color: String,
    chassis: String,
    engine: String,
    driveTrain: String,
    weightSaving: String,
    craftsmanship: String
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;