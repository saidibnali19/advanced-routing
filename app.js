const express = require("express");

const app = express();
const PORT = 3000;

const birds = require("./birds")

app.use("/birds", birds)

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

app.get("/example/a", (req, res) => {
    res.send("Hello from A!");
});

app.get(
    "/example/b",
    (req, res, next) => {
        console.log("Response will be sent by the next function");
        next();
    },
    (req, res) => {
        res.send("Response from B!");
    }
);

function cb0(req, res, next) {
    console.log("CB0");
    next();
}

function cb1(req, res, next) {
    console.log("CB1");
    next();
}

function cb2(req, res) {
    res.send("Response from C");
}

app.get("/example/c", [cb0, cb1, cb2]);

app.get(
    "/example/d",
    [cb0, cb1],
    (req, res, next) => {
        console.log("Response will be sent by the next function");
        next();
    },
    (req, res) => {
        res.send("Response from D");
    }
);

app.route("/book")
    .get((req, res) => {
        res.send("Get random book");
    })
    .post((req, res) => {
        res.send("Add a book");
    })
    .put((req, res) => {
        res.send("Update the book");
    });

const blog = require("./blog")
app.use("/blog", blog)

app.listen(PORT, () => console.log(`App running at http://localhost:${PORT}`));
