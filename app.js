const express = require("express");

const app = express();
const PORT = 3000;

app.all("/secret", (req, res) => {
    res.send("Secret section");
    console.log("Accessing the secret section");
});

// app.get("/data/([$])book", (req, res) => {
//     res.send("Accessing /data/$book");
// });

// app.get("/random.txt", (req, res) => {
//     res.send("random.txt");
// });

// app.get("/ab?cd", (req, res) => {
//     res.send("Response for /abcd and /acd");
// });

// app.get("/abc+", (req, res) => {
//     res.send("Response for /abc+");
// });

// app.get("/abcde*", (req, res) => {
//     res.send("Response for /abcde*");
// });

// app.get("/ab(cd)?efg", (req, res) => {
//     res.send("Response for /abcdefg and /abefg");
// });

// app.get(/a/, (req, res) => {
//     res.send("Response for any path that has letter 'a'")
// })

// app.get(/.*fly$/, (req, res) => {
//     res.send("Response for /.*fly$");
// });

app.get("/users/:userId/books/:bookId", (req, res) => {
    res.send(req.params);
});

app.get("/flights/:from-:to", (req, res) => {
    res.send(req.params);
});

app.get("/organism/:genus.:species", (req, res) => {
    res.send(req.params);
});

app.get("/user/:userId(\\d+)", (req, res) => {
    res.send(req.params);
});

app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));
