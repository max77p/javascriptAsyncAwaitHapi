"use strict";
const boom = require("boom");

module.exports.register = async server => {
    server.route({
        method: "GET",
        path: "/",
        handler: (request, h) => {
            try {
                const message = request.auth.isAuthenticated ? `Hello, ${ request.auth.credentials.profile.firstName }!` : "My first hapi server!";
                return h.view("index", {
                    title: "Home",
                    message,
                    isAuthenticated: request.auth.isAuthenticated
                })
            } catch (err) {
                server.log(["error", "home"], err)
            }
        }
    });
};