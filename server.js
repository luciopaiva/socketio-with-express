
const
    express = require("express");

const
    SERVER_PORT = 3000;

function generateRandomNumber() {
    return (Math.floor(Math.random() * 1000)).toString();
}

const app = express();
app.get("/random", (req, res) => res.send(generateRandomNumber()));
app.use(express.static("public"));
app.listen(SERVER_PORT, () => console.info(`Listening on port ${SERVER_PORT}.`));
