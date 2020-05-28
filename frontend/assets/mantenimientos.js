import axios from "axios";

export default {
  data() {
    return {
      message: "crud mantenimientos",
      enEdicion: false,
      showTable: true,
      validacion: "",
      mantenimientos: {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados: "",
        horas_invertidas: "",
        acciones: true
      },
      lista_mantenimientos : [],
    };
  },
  created() {
   
  },
  computed: {
    validacionId_mecanico() {
      return this.validar_condicion(this.mantenimientos.id_mecanico.length > 0);
    },
    validacionPlaca() {
      return this.validar_condicion(this.mantenimientos.placa.length > 0);
    },
    validacionFecha() {
      return this.validar_condicion(this.mantenimientos.fecha.length > 0);
    },
    validacionTrabajos_realizados() {
      return this.validar_condicion(this.mantenimientos.trabajos_realizados.length > 0);
    },
    validacionHoras_invertidas() {
      return this.validar_condicion(this.mantenimientos.horas_invertidas.length > 0);
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
    
    cargarMantenimientos() {
      axios
          .get("http://127.0.0.1:3001/api/v1/mantenimientos")
          .then(response => {
              console.log(response);
              this.lista_mantenimientos = response.data.info;
              for (let i in this.lista_mantenimientos) {
                  this.lista_mantenimientos[i].acciones = true;
              }
              console.log(this.lista_mantenimientos);
          })
          .catch(error => {
              console.log(error);
          });
  },

    crearMantenimientos() {
      if (this.validacion == true) {
          axios
              .post("http://127.0.0.1:3001/api/v1/mantenimientos", this.mantenimientos)
              .then(response => {
                  this.lista_mantenimientos.push(response.data.info);
                  console.log(response);
                  this.mantenimientos = {
                    tipo_documento: "",
                    id_mecanico: "",
                    placa: "",
                    fecha: "",
                    trabajos_realizados: "",
                    horas_invertidas: "",
                    acciones: true,
                  };
                  this.cargarMantenimientos();
                  alert("Mantenimiento Insertado Correctamente");                
              })
              .catch(error => {
                  console.log(error);
              });
      } else {
          alert("Llene todos los campos correctamente");
      }
  },

  eliminarMantenimientos({ item }) {
    axios
        .delete(`http://127.0.0.1:3001/api/v1/mantenimientos/${item.placa}`)
        .then(response => {
            let posicion = this.lista_mantenimientos.findIndex(
              lista_mantenimientos => lista_mantenimientos.placa == item.placa
            );
            this.lista_mantenimientos.splice(posicion, 1);
            alert("Usuario Eliminado");
        })
        .catch(error => {
            console.log(error);
        });
  },
  cargarMantenimiento({ item }) {
    axios
        .get(`http://127.0.0.1:3001/api/v1/mantenimientos/${item.documento}`)
        .then(response => {
            var array = response.data.info;
            this.enEdicion = true;
           
            this.mantenimientos.tipo_documento = array[0].tipo_documento;
            this.mantenimientos.id_mecanico = array[0].id_mecanico;
            this.mantenimientos.placa = array[0].placa;
            this.mantenimientos.fecha = array[0].fecha;
            this.mantenimientos.trabajos_realizados = array[0].trabajos_realizados;
            this.mantenimientos.horas_invertidas = array[0].horas_invertidas;       
            this.mantenimientos.acciones = true;
        })
        .catch(error => {
            console.log(error);
        });
  },
  actualizarMantenimientos() {
    if (this.validacion == true) {
        axios
            .put(
                `http://127.0.0.1:3001/api/v1/mantenimientos/${this.mantenimientos.placa}`,
                this.mantenimientos
            )
            .then(response => {
                let posicion = this.lista_mantenimientos.findIndex(
                  mantenimientos => mantenimientos.placa == this.mantenimientos.placa
                );
                this.lista_mantenimientos.splice(posicion, 1, this.mantenimientos);
                this.enEdicion = false;
                this.mantenimientos = {
                  id_mecanico: "",
                  placa: "",
                  fecha: "",
                  trabajos_realizados: "",
                  horas_invertidas: "",
                    acciones: true
                };
                alert("Mantenimiento Actualizada Correctamente");
                location.reload();
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
