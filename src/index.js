"use strict";
const Hapi=require("hapi");
const port=8080;
const server=Hapi.server({port});

server.route({
    method:"GET",
    path:"/",
    handler:()=>{
        return "My first hapi server!";
    }
});

const start=async()=>{
    try{
        await server.start();
        console.log(`Server running at http://localhost:${port}`);
    }catch (err){
        console.log(err);
        process.exit(1);
    }
}
start();