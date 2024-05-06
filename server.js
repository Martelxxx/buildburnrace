//============ Module Imports ============//

const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const Car = require('./models/cars');
const chassis = require('./Data Arrays/chassis');
const driveTrain = require('./Data Arrays/driveTrain');
const engine = require('./Data Arrays/engine');
const weightSaving = require('./Data Arrays/weightSaving');
const craftsmanship = require('./Data Arrays/craftsmanship');
const Opponents = require('./Data Arrays/opponents');


const app = express();

//============ Database Connection ============//

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.once("connected", () => {
    console.log("Connected to MongoDB");
    });

//============ Middleware ============//

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));


//============ Routes ============//

//============ GET/POST New Car Route ============//

app.get('/', async (req, res) => {
    res.render('home.ejs');
    });

app.get('/cars/new', async (req, res) => {
    const cars = await Car.find();
    res.render("cars/newPage.ejs", { cars: cars, chassis: chassis, driveTrain: driveTrain, engine: engine, weightSaving: weightSaving, craftsmanship: craftsmanship }); 
    }); 

app.post('/new', async (req, res) => {
    await Car.create(req.body);
    res.redirect('cars/race');
    });     

//============ GET Race Route ============//

app.get('/cars/race', async (req, res) => {
const cars = await Car.find();

const lastCreatedVehicle = await Car.find().sort({ _id: -1 }).limit(1);


const randomOpponent = Opponents[Math.floor(Math.random() * Opponents.length)];

        res.render('cars/race.ejs', { cars: cars, opponents: randomOpponent, userCar: lastCreatedVehicle[0], chassis: chassis, driveTrain: driveTrain, engine: engine, weightSaving: weightSaving, craftsmanship: craftsmanship });
}); 

//============ GET Car Index Route ============// 

app.get('/cars', async (req, res) => {  
    const allCars = await Car.find();
    res.render('cars/index.ejs', { cars: allCars });
    });

//============ GET Car Show Route ============//

app.get('/cars/:carId', async (req, res) => {
    const foundCar = await Car.findById(req.params.carId);
    res.render('cars/show.ejs', { car: foundCar });
    });

//============ DELETE Car Route ============// 

app.delete('/cars/:carId', async (req, res) => {
    await Car.findByIdAndDelete(req.params.carId);
    res.redirect('/cars');
    });

//============ GET/POST Edit Car Route ============//

app.get('/cars/:carId/edit', async (req, res) => {
    const foundCar = await Car.findById(req.params.carId);
    res.render('cars/edit.ejs', { car: foundCar, chassis: chassis, driveTrain: driveTrain, engine: engine, weightSaving: weightSaving, craftsmanship: craftsmanship });
    }); 

app.put('/cars/:carId', async (req, res) => {
    await Car.findByIdAndUpdate(req.params.carId, req.body);
    res.redirect(`/cars/${req.params.carId}`);
    });     

app.post('/cars/:carId', async (req, res) => {
    const newbudget = req.body.budget;
    res.render('cars/edit.ejs', { budget: newbudget });
    });    

app.listen(3099, () => {
    console.log('Server is running on port 3099');
    });
