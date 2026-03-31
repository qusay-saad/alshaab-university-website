const app = require("./server");

const http = require("http");

const server = app.listen(4000, () => {

http.get("http://localhost:4000/health", (res) => {

if(res.statusCode === 200){

console.log("Test passed: Health endpoint working");

process.exit(0);

}else{

console.log("Test failed");

process.exit(1);

}

});

});