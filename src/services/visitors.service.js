const axios = require('axios').default;
const {getDateFormat}  = require('../utils/common.utils');

const {VisitorsTransform} = require('./visitors.transform');

class VisitorsService {
    constructor() {
        this.visitorsTransform = new VisitorsTransform();
    }

    /**
     * 
     * @param {*} params 
     * request to visitors API on the basis of date filter
     */
    requestVisitorsAPI(params={}){
        return new Promise(async(resolve,reject) =>{
            try {
              const date = new Date(Number(params.date));
              if(date == 'Invalid Date')
                 return resolve({error:'Invalid Date Format'});

              const dateFormat = getDateFormat(date);
              const query = `https://data.lacity.org/resource/trxm-jn3c.json?month=${dateFormat}`
              const visitorsList =  await axios.get(query);
       
              const resToSend = this.visitorsTransform.transformResponseData(visitorsList.data,params.ignore)
              return resolve(resToSend);
            } catch (error) {
                reject(error);
            }

        })
    }


}

module.exports.VisitorsService = VisitorsService;