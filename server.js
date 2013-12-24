var http = require("http");
var socketIo = require("socket.io");
var express = require("express");
var app = express();
var calendar = require("./calendar");
var hebCal = require("./hebCalWrapper");
var moment = require("moment");

app.use("/public", express.static("public"));
app.use(express.json());

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.send(500, "Error occurred in server");
});

app.get("/api/calendar", function(req, res) {
	hebCal.getShabbatot(moment().year(), function(err, data) {
		var cal = new calendar(Date());
		var body = cal.getUpcoming(data);
		res.setHeader("Content-Type", "application/json");
		res.send(body);
	});
});

app.post("/api/calendar", function(req, res) {
	var data = req.body;
	console.log("saving " + JSON.stringify(data));
	res.location("/api/calendar/3443");
	res.send(201, data);
});

var server = http.createServer(app);
var io = socketIo.listen(server);

io.sockets.on("connection", function(socket) {
	console.log("made connection");
	socket.on("add", function(data) {
		console.log("added: " + data.mesharet);
	});
});

server.listen(8085);

console.log("server running");