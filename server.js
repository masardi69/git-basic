const http = require("http");
let server = http.createServer(function (req, res) {
  res.end("aku sedang bercinta dengan Leony ");
});
server.listen(8000);
console.log("server berjalan di port 8000");
