const {getMonthCode} = require('../utils/common.utils');

class VisitorsTransform{

    /**
     * 
     * @param {*} data 
     * @param {*} museumToIgnore 
     * process the API data and tranform it to response to send
     */
    transformResponseData(data,museumToIgnore=''){
        const museumVisitorsCount = data[0];
        const month = getMonthCode(museumVisitorsCount.month);
        const year = new Date(museumVisitorsCount.month).getFullYear();

        const resObj = {attendance:{month:month,year:year,highest:{visitors:-Infinity},lowest:{visitors:Infinity},total:0}};
        if(museumToIgnore && museumToIgnore in museumVisitorsCount){
            resObj.attendance.ignore = {visitors:museumVisitorsCount[museumToIgnore],museum:museumToIgnore};
            delete museumVisitorsCount[museumToIgnore];
        }
        
        for(let museum in museumVisitorsCount){
             if(museum !== 'month'){
                 if(resObj.attendance.highest.visitors < Number(museumVisitorsCount[museum])){
                    resObj.attendance.highest.museum = museum;
                    resObj.attendance.highest.visitors = Number(museumVisitorsCount[museum]);
                 }
                 if(resObj.attendance.lowest.visitors > Number(museumVisitorsCount[museum])){
                    resObj.attendance.lowest.museum = museum;
                    resObj.attendance.lowest.visitors = Number(museumVisitorsCount[museum])
                 }
                 resObj.attendance.total += Number(museumVisitorsCount[museum]);
             }
        }

        return data.length ? resObj :{message:'no result found'};

    }
}

module.exports.VisitorsTransform = VisitorsTransform;