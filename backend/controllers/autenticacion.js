const servicePg = require("../services/postgres");
const jwt = require("jsonwebtoken");

const SECRET_KEY =
  "62dd9f018fdcfae7e7f1c8c7c8d253c7ddadbe85a3e20a57fc4003d9477fe093";

let validar_login = (usuario) => {
  if (!usuario) {
    throw {
      ok: false,
      mensaje: "La información es obligatoria",
    };
  } else if (!usuario.documento) {
    throw {
      ok: false,
      mensaje: "La cedula es obligatoria",
    };
  } else if (!usuario.clave) {
    throw {
      ok: false,
      mensaje: "La contraseña es obligatoria",
    };
  }

  let consultar_usuario = async (usuario) => {
    let _service = new ServicioPg();
    let sql = `SELECT * FROM public.usuarios WHERE id = $1 AND clave = md5($2)`;
    let valores = [usuario.id, usuario.clave]
    let respuesta = await _service.ejecutarSql(sql, valores);
    return respuesta;
  };
  
  let generar_token = (usuario) => {
    delete usuario.clave;
    let token = jwt.sign(usuario, SECRET_KEY, { expiresIn: "1h" });
    return token;
  };
  
  let verificar_token = (token) => {
    return jwt.verify(token, SECRET_KEY);
  };
  
  module.exports = {
    validar_login,
    consultar_usuario,
    generar_token,
    verificar_token,
  };
};