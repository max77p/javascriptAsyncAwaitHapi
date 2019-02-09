"use strict";

module.exports = {
    name: "serverState",
    version: "1.0.0",
    register: async (server, {
        message
    }) => {
        server.events.on("start", () => {
            const msg = message || `Server running at ${server.info.uri}`;
            server.log(["info", "server"], msg);
        })
    }
}