const express = require("express");
const router = express.Router();

const {
  consultar_motos,
  consultar_moto,
  eliminar_moto,
  insertar_moto,
  actualizar_moto,
  validar_moto,
} = require("../controllers/motos");


router.get("/motos", (req, res) => {
    consultar_motos()
    .then((answerDB) => {
      let records = answerDB.rows;
      res.send({
        ok: true,
        info: records,
        mensaje: "Motos consultadas",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/motos/:id", (req, res) => {
  let info_moto = req.params.id;
  consultar_moto(info_moto)
    .then((answerDB) => {
      res.send({
        ok: true,
        info: answerDB,
        mensaje: "Moto consultada",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post("/motos", (req, res) => {
  try {
    let info_moto = req.body;
    validar_moto(info_moto);
    insertar_moto(info_moto)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Moto guardada",
          info: info_moto,
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/motos/:placa", (req, res) => {
  try {
    let info_moto = req.params.placa;
    eliminar_moto(info_moto)
      .then((answerDB) => {
        res.send({
          ok: true,
          info: info_moto,
          mensaje: "Moto eliminada",
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

router.put("/motos/:placa", (req, res) => {
  try {
    //Capturar el body desde la solicitud
    let placa = req.params.placa;
    let info_moto = req.body;

    actualizar_moto(info_moto, placa)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Moto editada",
          info: info_usuario,
        });
      })
      .catch((error) => {
        res.send(error);
      });

    // Responder
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;