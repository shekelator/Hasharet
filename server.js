var http = require("http");
var socketIo = require("socket.io");
var express = require("express");
var app = express();

app.use("/public", express.static("public"));

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.send(500, "Error occurred in server");
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