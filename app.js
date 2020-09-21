const http = require("http");
const fs = require("fs");

const data = fs.readFileSync("./data.json", { encoding: "utf-8" });
const data_ob = JSON.parse(data);

console.log(typeof data);
const server = http.createServer((req, res) => {
  res.write(data_ob[1].name);
  res.end();
});

server.listen(3000, () => {
  console.log("server port 3000");
});
