"use strict";

module.exports.register = async server => {
    server.route( {
        method: "GET",
        path: "/",
        handler: () => {
            // a handler can return text, HTML, JSON,
            // a file, or just about anything
            return "My first hapi server!";
        }
    } );
};