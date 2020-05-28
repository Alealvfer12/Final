const ServicePg = require("../services/postgres");

let validar_usuario = (usuario) => {
  if (!usuario) {
    throw {
      ok: false,
      mensaje: "Los datos son obligatorios",
    };
  } else if (!usuario.documento){
    throw {
      ok: false,
      mensaje: "La cedula es obligatoria",
    };
  } else if (!usuario.rol) {
    throw {
      ok: false,
      mensaje: "El rol es obligatorio",
    };
  }
};

let guardar_usuario = async (usuario) => {
  let _service = new ServicePg();
  let sql = `INSERT INTO public.usuarios(
        tipo_documento, documento, nombre, apellidos, celular, correo, rol, clave)
        VALUES ($1, $2, $3, $4, $5, $6, $7, md5($8))`;
  let values = [
    usuario.tipo_documento,
    usuario.documento,
    usuario.nombre,
    usuario.apellidos,
    usuario.celular,
    usuario.correo,
    usuario.rol,
    usuario.clave
  ];
  let respuesta = _service.runsql(sql, values);
  return respuesta;
};

let consultar_usuarios = async ()=>{
    let _service = new ServicePg();
    let sql = `SELECT tipo_documento, documento, nombre, apellidos, celular, correo, rol
    FROM public.usuarios`
    let respuesta = await _service.runsql(sql)
    return respuesta 
};

let consultar_usuario = async (documento) =>{
    let _service = new ServicePg();
    let sql = `SELECT * FROM public.usuarios WHERE documento = '${documento}'`;
    let respuesta = await _service.runsql(sql);
    return respuesta;
};

let eliminar_usuario = (usuario) => {
  let _service = new ServicePg();
  let sql = `DELETE FROM public.usuarios where documento = '${usuario}'`;
  let respuesta = _service.runsql(sql);
  return respuesta;
};

let actualizar_usuario = async (usuario, documento) => {
  let _service = new ServicePg();
  let sql = `UPDATE public.usuarios
	SET tipo_ documento=$1, nombre=$2, apellidos=$3, celular=$4, correo=$5, rol=$6, clave=md5($7)
    WHERE documento = $8`;
  let values = [
    usuario.tipo_documento,
    usuario.nombre,
    usuario.apellidos,
    usuario.celular,
    usuario.correo,
    usuario.rol,
    usuario.clave,
    documento
  ];
  let respuesta = await _service.runsql(sql,values);
  return respuesta;
};



module.exports = {
    actualizar_usuario,
    consultar_usuario,
    consultar_usuarios,
    guardar_usuario,
    eliminar_usuario,
    validar_usuario
}