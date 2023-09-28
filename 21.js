const firstName = "ken";
const lastName = "Kuning";
const dateInfo = require("./date_et");
//lisame failisüsteemi mooduli
const fs = require("fs");
let folkWisdom = [];
fs.readFile("txt_files/vanasonad.txt", "utf8", (err, data)=>{
	if(err){
	console.log(err);
}
else {
	//console.log(data);
	folkWisdom = data.split(";");
	console.log(folkWisdom);
	console.log("vanasõnu on" + folkWisdom.length);
	onScreen();
	}
});//readFile lõppeb

const onScreen = function(){
	console.log(firstName + " " + lastName);
	console.log(dateInfo.dateNowET());
	//console.log("tänane tarkusetera: " + folkWisdom[Math.floor(Math.random() * folkWisdom.length)];
	for(let i = 0; i < folkWisdom.length; i ++){
		console.log(i + 1) + ( ") " + folkWisdom[i]);
	}
	console.log("Kell on: " + dateInfo.timeNowET());
	console.log("on " +dateInfo.timeOfDayET() + ":");
	//console.log(dateInfo.monthsET);
}
//console.log(Date());
console.log(dateInfo.dateNowET());