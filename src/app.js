const express = require('express');
const app = express();
const hbs = require("hbs")
const path = require("path");
const viewPath = path.join(__dirname, "../template/views");
const partialPath = path.join(__dirname, "../template/partials");
require("./db/mongoose");
const User = require("./db/model/user");


app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("", (req, res) => {
    res.render("index");
});

app.post("/register", async (req, res) => {
    const user = new User(req.body);
    console.log(user);
    try {
         await user.save();
        res.send(user);
    } catch (e) {
        res.status(404).send(e)
    }
})

app.listen(3000, () => {
    console.log("running at port 3000");
})