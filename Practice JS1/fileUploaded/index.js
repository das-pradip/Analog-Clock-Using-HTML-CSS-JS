const path = require("path");
const express = require("express");
const multer = require("multer");

const app  = express();
const PORT = 8000;


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./uploads");
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({ storage: storage });

// const upload is middleware and dest: upload is file
// const upload = multer({ dest: "uploads/"});


app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
 
// To parse form data we use express.urlencoded
app.use(express.urlencoded({extended: false }));

// app.use(express.json());

app.get("/", (req, res) => {
    return res.render("home");
})

app.post("/upload", upload.single("profileImage"), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");
});


app.listen(PORT, () => console.log('Server started at PORT:8000'));