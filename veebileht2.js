const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs")

http.createServer(function(req, res){
	console.log(url.parse(req.url, true));
	let currentURL = url.parse(req.url, true);
	if(currentURL.pathname === "/"){
	//määrame tagastatavate andmete päise, et on veebileht
	res.writeHead(200, ("Content-Type", "Text/html"));
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Ken Rasmus Kuning</title></head><body>');
	res.write('<hr><h1>Koerte värvimine</h1><p>Tere! Minu nimi on Ken Rasmus Kuning. Olen igati lõbus ja tore tüüp. Olen eesti parimate kabetajate ja kokkade hulgas omas valuseklassis. Oman ettevõtet mis tegeleb kodumasinate parandamisega. Vabal ajal meeldib mulle teha sporti ja õhtul peole minna.</p><p> kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs</h1><hr><p>Kursus on lahe aga kus mu koerad on. </p></body></html>');
	return res.end();
	}else if (currentURL.pathname === "/banner.png"){
		console.log("tahan pilti!");
		let filePath = path.join(_dirname, "public", "banner/banner.png");
		fs.readFile(filePath, (err, data)=>{
			if(err){
				throw err;
			}
			else {
				res.writeHead(200, {"Content-Type": "image/png"});
			}
		});
	}
	}).listen(5020);

//5020 kuning