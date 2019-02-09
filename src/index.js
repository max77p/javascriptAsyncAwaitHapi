"use strict";
const app=require("./app");

const port=8080;
const config={port};


const start=async()=>{
    try{
        const server=await app.createServer(config);
        await server.start();
        console.log(`Server running at http://localhost:${port}`);
    }catch (err){
        console.log(err);
        process.exit(1);
    }
}
start();