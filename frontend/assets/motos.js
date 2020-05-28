import axios from "axios";

export default {
  data() {
    return {
      message: "crud motos",
      enEdicion: false,
      showTable: true,
      validacion: "",
      validacion_actualizar: "",
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
      lista_motos: []
    };
  },
  created() {
    this.cargarMotos();
  },
  computed: {
    validacionPlaca() {
      if (this.validacion_actualizar) return true;
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
      validacionNro_tecno() {
        return this.validar_condicion(this.motos.nro_tecno.length > 0);
      },
      validacionVencimiento_tecno() {
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

    cargarMotos() {
      axios
          .get("http://127.0.0.1:3001/api/v1/motos")
          .then(response => {
              console.log(response);
              this.lista_motos = response.data.info;
              for (let i in this.lista_motos) {
                  this.lista_motos[i].acciones = true;
              }
              console.log(this.lista_motos);
          })
          .catch(error => {
              console.log(error);
          });
  },
  crearMotos() {
    if (this.validacion == true) {
        axios
            .post("http://127.0.0.1:3001/api/v1/motos", this.motos, {
              headers: { token: this.token }
            })
            .then(response => {
                this.lista_motos.push(response.data.info);
                console.log(response);
                this.motos = {
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
                };
                this.cargarMotos();
                alert("Moto Insertada Correctamente");                
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        alert("Llene todos los campos correctamente");
    }
},
eliminarMotos({ item }) {
  axios
    .delete(`http://127.0.0.1:3001/api/v1/motos/${item.placa}`, {
      headers: { token: this.token }
    })
    .then(response => {
      let posicion = this.lista_motos.findIndex(
        lista_motos => lista_motos.placa == item.placa
      );
      this.lista_motos.splice(posicion, 1);
      alert("Moto Eliminada");
    })
    .catch(error => {
      console.log(error);
    });
},
cargarMoto({ item }) {
  this.validacion_actualizar = true;
  axios
    .get(`http://127.0.0.1:3001/api/v1/motos/${item.placa}`, {
      headers: { token: this.token }
    })

    .then(response => {
      var array = response.data.info;
      console.log(array)
      this.enEdicion = true;
      this.motos.placa = array[0].placa;
      this.motos.estado = array[0].estado;
      this.motos.clase = array[0].clase;
      this.motos.marca = array[0].marca;
      this.motos.modelo = array[0].modelo;
      this.motos.color = array[0].color;
      this.motos.cilindraje = array[0].cilindraje;
      this.motos.id_propietario = array[0].id_propietario;
      this.motos.nro_soat = array[0].nro_soat;
      this.motos.vencimiento_soat = array[0].vencimiento_soat;
      this.motos.nro_tecno = array[0].nro_tecno;
      this.motos.vencimiento_tecno = array[0].vencimiento_tecno;
    })
    .catch(error => {
      console.log(error);
    });
},
actualizarMotos() {
  if (
    this.validacion &&
    this.motos.placa.length < 7 &&
    this.motos.cilindraje.length < 5 &&
    this.motos.modelo.length < 5
  ) {
    axios
      .put(`http://127.0.0.1:3001/api/v1/motos/${this.motos.placa}`, this.motos, {
        headers: { token: this.token }
      })
      .then(response => {
        console.log(response)
        let posicion = this.lista_motos.findIndex(
          motos => motos.placa == this.motos.placa
        );
        this.lista_motos.splice(posicion, 1, this.motos);
        this.enEdicion = false;
        this.motos = {
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
          vencimiento_tecno: ""
        };
        alert("Moto Actualizada Correctamente");
        this.validacion_actualizar = false;
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    alert("LLene todos los campos correctamente");
  }
}
  }
  
};





