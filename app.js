const express = require("express");
const app = express();
const port = 2000; // Puedes cambiar el puerto según tus necesidades
const informesRoutes = require("./routes/informesRoutes");
const plantaRoutes = require("./routes/plantaRoutes");
const facturarRoutes = require("./routes/facturarRoutes");
const loginRoutes = require("./routes/loginRoutes");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.use("/", informesRoutes);
app.use("/", plantaRoutes);
app.use("/", plantaRoutes);
app.use("/", facturarRoutes);
app.use("/", loginRoutes);
