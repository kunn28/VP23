// date_et.js

exports.dateNowET = function() {
  const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
  let timeNow = new Date();
  let dateNow = timeNow.getDate();
  let monthNow = timeNow.getMonth() + 1; // Lisame 1, kuna kuu numbrid on vahemikus 0-11
  let yearNow = timeNow.getFullYear();

  return dateNow + "." + monthNamesET[monthNow - 1] + "." + yearNow;
}

exports.timeNowET = function(){
  let timeNow = new Date();
  return timeNow.getHours() + "." + timeNow.getMinutes() + "." + timeNow.getSeconds();
}

exports.timeOfDayET = function(){
  let dayPart = "suvaline aeg";
  const hourNow = new Date().getHours();
  if(hourNow > 6 && hourNow <= 11){
    dayPart = "hommik";
  }
  if(hourNow >= 12 && hourNow <= 14){
    dayPart = "keskpäev";
  }
  if(hourNow >= 15 && hourNow <= 18){
    dayPart = "pärastlõuna";
  }
  if(hourNow > 18){
    dayPart = "õhtu";
  }
  return dayPart;
}