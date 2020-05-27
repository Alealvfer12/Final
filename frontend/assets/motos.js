import axios from "axios";

export default {
  data() {
    return {
      message: "crud motos",
      enEdicion: false,
      showTable: true,
      validacion: "",
      motos: {
        placa: "",
        estado: "",
        clase: "",
        marca: "",
        modelo: "",
        color: "",
        cilindraje: "",
        id_propietario: "",
        nro_soat: "",
        vencimiento_soat: "",
        nro_tecno: "",
        vencimiento_tecno: "",
        acciones: true
      },
      
    };
  },
  created() {
   
  },
  computed: {
    validacionPlaca() {
      return this.validar_condicion(this.motos.placa.length > 0);
    },
    validacionEstado() {
      return this.validar_condicion(this.motos.estado.length > 0);
    },
    validacionClase() {
      return this.validar_condicion(this.motos.clase.length > 0);
    },
    validacionMarca() {
      return this.validar_condicion(this.motos.marca.length > 0);
    },
    validacionModelo() {
      return this.validar_condicion(this.motos.modelo.length > 0);
    },
    validacionColor() {
      return this.validar_condicion(this.motos.color.length > 0);
    },
    validacionCilindraje() {
      return this.validar_condicion(this.motos.cilindraje.length > 0);
    },
    validacionId_propietario() {
        return this.validar_condicion(this.motos.id_propietario.length > 0);
      },
      validacionNro_soat() {
        return this.validar_condicion(this.motos.nro_soat.length > 0);
      },
      validacionVencimiento_soat() {
        return this.validar_condicion(this.motos.vencimiento_soat.length > 0);
      },
      validacionNro_tecnomecanica() {
        return this.validar_condicion(this.motos.nro_tecno.length > 0);
      },
      validacionVencimiento_tecnomecanica() {
        return this.validar_condicion(this.motos.vencimiento_tecno.length > 0);
      },
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
