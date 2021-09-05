var express = require('express');
var router = express.Router();

const visitorsRoutes = require('./routes/visitors.routes');

router.use(visitorsRoutes);

module.exports = router;