const staticServer = require("static-server");

const server = new staticServer({
	rootPath: "./",
	port: 3000,
	open: true
});

server.start(function(){
	console.log("\nserver started on http://localhost:" + server.port + "\n\n");
});
