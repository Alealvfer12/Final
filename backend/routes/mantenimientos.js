const express = require("express");
const router = express.Router();

const {
  consultar_mantenimientos,
  consultar_mantenimiento,
  eliminar_mantenimiento,
  insertar_mantenimiento,
  actualizar_mantenimiento,
  validar_mantenimiento,
} = require("../controllers/mantenimientos");


router.get("/mantenimientos", (req, res) => {
    consultar_mantenimientos()
    .then((answerDB) => {
      let records = answerDB.rows;
      res.send({
        ok: true,
        info: records,
        mensaje: "Mantenimientos consultadas",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/mantenimientos/:id", (req, res) => {
  let info_mantenimiento = req.params.id;
  consultar_mantenimiento(info_mantenimiento)
    .then((answerDB) => {
      res.send({
        ok: true,
        info: answerDB,
        mensaje: "Mantenimientos consultada",
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.post("/mantenimientos", (req, res) => {
  try {
    let info_mantenimiento = req.body;
    validar_mantenimiento(info_mantenimiento);
    insertar_mantenimiento(info_mantenimiento)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Mantenimiento guardado",
          info: info_mantenimiento,
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

router.delete("/mantenimientos/:id", (req, res) => {
  try {
    let info_mantenimiento = req.params.id;
    eliminar_mantenimiento(info_mantenimiento)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Mantenimientos eliminada",
        });
      })
      .catch((error) => {
        res.send(error);
      });
  } catch (error) {
    res.send(error);
  }
});

router.put("/mantenimientos/:placa/:id_mecanico/:fecha", (req, res) => {
  try {
    let p= req.params.placa;
    let id_mec =req.params.id_mecanico;
    let fec =req.params.fecha;
    let info_mantenimiento = req.body;

    let asig ={
      placa: p,
      id_mecanico: id_mec,
      fecha : fec
    }
    // Actualiza el mantenimiento en base de datos

    actualizar_mantenimiento(info_mantenimiento, asig)
      .then((answerDB) => {
        res.send({
          ok: true,
          mensaje: "Mantenimientos editada",
          info: info_mantenimiento,
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