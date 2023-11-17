const express = require("express");
const app = express();
const port = 8800; // Puedes cambiar el puerto según tus necesidades
const routes = require("./routes/router");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const morgan = require("morgan")


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", routes);
app.use(cookieParser());

dotenv.config({ path: "./env/.env" });

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
