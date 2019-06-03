import http from "http";
import app from "./../app";

// import logger from "./../lib/// logger";


/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = val => {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};


/**
 * Event listener for HTTP server "error" event.
 */
const onError = error => {
    if (error.syscall !== "listen") {
        throw error;
    }

    let bind = typeof port === "string"
        ? "Pipe " + port
        : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case "EACCES":
        // logger.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
    case "EADDRINUSE":
        // logger.error(bind + " is already in use");
        process.exit(1);
        break;
    default:
        throw error;
    }
};

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
    let addr = server.address();
    let bind = typeof addr === "string"
        ? "pipe " + addr
        : "port " + addr.port;
    console.log("Listening on " + bind);
};

const port = normalizePort("3000");
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
