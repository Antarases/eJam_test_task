const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/deployment");
require("./models/deploymentTemplate");

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useFindAndModify: false})
    .catch(error => console.log("First connection attempt failed: ", error));
mongoose.connection.on('error', err => {
    console.log("Sequent connection attempt failed: ", err);
});

const app = express();
const httpServer = require("http").createServer(app);

app.use(bodyParser.json({limit: '5120kb'}));

require("./routes/deploymentRoutes")(app);
require("./routes/deploymentTemplateRoutes")(app);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT);
