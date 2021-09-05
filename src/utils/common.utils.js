/**
 * 
 * @param {*} date 
 * get date and format it to yyyy-mm-dd
 */
const getDateFormat = (date)=>{
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

/**
 * 
 * @param {*} date 
 * get date and return the month code in alpha
 */
const getMonthCode = (date)=>{
    date = new Date(date);
    const monthCode = {'1':'Jan','2':'Feb','3':'Mar','4':'Apr','5':'May','6':'Jun','7':'Jul','8':'Aug','9':'Sep','10':'Oct','11':'Nov','12':'Dec'};
    return monthCode[date.getMonth()+1];
}

module.exports.getDateFormat = getDateFormat;
module.exports.getMonthCode = getMonthCode;