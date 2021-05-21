if(process.env.NODE_ENV !== "production"){
    require("dotenv").config()
}

const express = require("express")
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const es6Renderer = require("express-es6-template-engine");
const initializedPassport = require("./passport-config")

initializedPassport(
    passport,
    (email) => users.find((user) => user.email === email),
    (id) => users.find((user) => user.id === id),
);
//PORT
const PORT = 2000

//THis is mimicking a database
const users = []

//middleware
//requires static files

app.use(express.static('../public'));
app.use(express.json());
app.use(cors());
// app.use(flash());

app.engine("html", es6Renderer);
app.set("views", "../views");
app.set("view engine", "html");

//access our form information inside of our req
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) =>  {
    res.render("index");
});


app.get("/login", (req, res) =>  {
    res.render("login");
});


app.get("/register", (req, res) =>  {
    res.render("register");
});

app.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = {
            id: Date.now().toString(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
         };
         users.push(user);

        res.status(200).redirect("/login");
    } catch (error) {
        res.status(401).redirect("/register")

    }
});

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));