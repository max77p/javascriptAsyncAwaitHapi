"use strict";

const Hapi=require("hapi");
const plugins=require("./plugins");
const routes=require("./routes");

module.exports.createServer=async config=>{
    const server=Hapi.server(config);
    await plugins.register(server);

    await routes.register(server);
    return server;
}