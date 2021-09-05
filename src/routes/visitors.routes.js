const express = require('express');
const router = express.Router();

const {VisitorsConroller} = require('../controller/visitors.controller');

const visitorsController = new VisitorsConroller();

/**
 * all visitors routes go here
 */
router.get('/visitors', visitorsController.getVistors.bind(visitorsController));

module.exports = router;