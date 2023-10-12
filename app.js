const express = require("express");

const app = express();
const PORT = 3000;

app.all("/secret", (req, res) => {
    res.send("Secret section");
    console.log("Accessing the secret section");
});

app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));
