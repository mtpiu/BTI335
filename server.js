/*********************************************************************************
* BTI325 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Mimia Tabssum Piu Student ID: 167782234 Date: 09/27/20224
*
* Online (Vercel) URL: _______________________________________________________
*
********************************************************************************/

const http = require('http');
http.createServer((req,res) => {
    res.writeHead(200, { 'Cpntent-Type': 'text/plain'});
    res.write("Mimia Tabssum Piu -167782234");
    res.end();
}).listen(8080,() => {
 console.log("Server running at http://localhost:8080");
});