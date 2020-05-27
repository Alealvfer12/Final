import axios from "axios";

export default {
  data() {
    return {
      message: "crud Usuarios",
      enEdicion: false,
      showTable: true,
      validacion: "",
      usuarios: {
        
        documento: "",
        nombre: "",
        apellidos: "",
        celular: "",
        correo: "",
        clave: "",
        acciones: true
      },
       tipo_documento: [],
      opciones_documentos: [
        { value: null, text: "Seleccione el tipo de documento", disabled: true },
        { value: "01", text: "01 - CC" },
        { value: "02", text: "02 - CE" },
        { value: "03", text: "03 - NIT" },
        { value: "04", text: "04 - Pasaporte" },
      ],
      rol: [],
      opciones_roles: [
        { value: null, text: "Seleccione el rol del usuario", disabled: true },
        { value: "01", text: "01 - Mécanico" },
        { value: "02", text: "02 - Administrador" },
      ],
    };
  },
  created() {
   
  },
  computed: {
    validacionId() {
      return this.validar_condicion(this.usuarios.documento.length > 0);
    },
    validacionNombre() {
      return this.validar_condicion(this.usuarios.nombre.length > 0);
    },
    validacionApellido() {
      return this.validar_condicion(this.usuarios.apellidos.length > 0);
    },
    validacionCelular() {
      return this.validar_condicion(this.usuarios.celular.length > 0);
    },
    validacionCorreo() {
      return this.validar_condicion(this.usuarios.correo.length > 0);
    },
    validacionRol() {
      return this.validar_condicion(this.usuarios.rol.length > 0);
    },
    validacionClave() {
      return this.validar_condicion(this.usuarios.clave.length > 0);
    }
  },
  methods: {
    validar_condicion(bool) {
      if (bool == false) {
        this.validacion = false;
        return false;
      } else {
        this.validacion = true;
        return true;
      }
    },
  }
  
};

