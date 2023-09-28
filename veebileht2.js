const http = require("http");

http.createServer(function(req, res){
	//määrame tagastatavate andmete päise, et on veebileht
	res.writeHead(200, ("Content-Type", "Text/html"));
	res.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Ken Rasmus Kuning</title></head><body>');
	res.write('<hr><h1>Koerte värvimine</h1><p>Tere! Minu nimi on Ken Rasmus Kuning. Olen igati lõbus ja tore tüüp. Olen eesti parimate kabetajate ja kokkade hulgas omas valuseklassis. Oman ettevõtet mis tegeleb kodumasinate parandamisega. Vabal ajal meeldib mulle teha sporti ja õhtul peole minna.</p><p> kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs  kukk on mu BMWs</h1><hr><p>Kursus on lahe aga kus mu koerad on. </p></body></html>');
	return res.end();
	}).listen(5020);
	
//5020 kuning