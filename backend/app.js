// Importar express
const express = require("express");
const cors = require("cors");

// Inicializar la librería
const app = express();
app.use(express.json());
app.use(cors());
// VERSION del api
const vs = "/api/v1/";


const route_motos = require("./routes/motos");
const route_usuario = require("./routes/usuarios"); 
const route_mantenimientos = require("./routes/mantenimientos"); 
const route_Autenticacion = require("./routes/autenticacion")


app.use(vs,route_usuario);
app.use(vs,route_motos);
app.use(vs,route_mantenimientos);
app.use(vs, route_Autenticacion)

app.use("/", (req, res) => {
  res.status(404).send({
    ok: false,
    message: "El recurso que busca no existe",
  });
});

// Puerto
const port = 3001;
app.listen(port, () => {
  console.log(
    `Escuchando API en http://localhost:${port}/api/v1`
  );
});