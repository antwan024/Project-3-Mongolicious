// const express = require("express"); Anthony's code
// const mongoose = require("mongoose");
// const routes = require("./routes"); Anthony's code
// const app = express(); Anthony's code
const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3003;

const server = http.createServer(app);

server.listen(port);



// // Define middleware here  Anthony's code
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB Anthony's code
// mongoose.connect(process.env.MONGODB || process.env.MONGODB_ROSE||"mongodb://localhost/bestLife");

// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
