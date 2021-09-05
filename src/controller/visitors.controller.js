const {VisitorsService} = require('../services/visitors.service');

class VisitorsConroller {
    constructor(){
        this.visitorsService = new VisitorsService();
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * get all visitors from service 
     */
    async getVistors(req,res) {
        const visitorsAPIRes = await this.visitorsService.requestVisitorsAPI(req.query);
        res.json(visitorsAPIRes);
        
    }
    
}

module.exports.VisitorsConroller = VisitorsConroller;