const express = require('express');
const cors = require('cors');
const router = express.Router();


const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
};

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use((req, res, next) => {
    console.log('Time:', new Date().toISOString());
    next();
});


router.get('/', (req, res) => {
    res.render("login");
});

router.get('/types', (req, res) => {
    res.render("types");
});

router.get('/statesform', (req, res) => {
    res.render("statesform");
});

router.get('/why', (req, res) => {
    res.render("why");
});

router.get('/requestblood', (req, res) => {
    res.render("requestblood");
});

router.get('/register', (req, res) => {
    res.render("register");
    console.log("successful");
});

router.post('/login', (req, res) => {
    res.render("dashboard");
});


router.get('/blocking', (req, res) => {
    const start = Date.now();
    while (Date.now() - start < 5000) {
      
    }
    res.send('Blocking route finished after 5 seconds');
});


router.get('/nonblocking', (req, res) => {
    setTimeout(() => {
        res.send('Non-blocking route finished after 5 seconds');
    }, 5000);
});

router.use(errorHandler);

module.exports = router;
