
module.exports.getDate = getDate;

function getDate() {

    let today = new Date();

    let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
 };
 let date = today.toLocaleDateString("en-Us",options);
 return date;
}


module.exports.gateDay = gateDay;

function gateDay() {

    let today = new Date();

    let options = {
    weekday : "long",
   
 };
 let date = today.toLocaleDateString("en-Us",options);
 return date;
}