const axios = require("axios");
export default {
  data() {
    return {
      Permisos: []
    };
  },
  mounted() {
    this.Opciones();
  },
  methods: {
    /**
     * Se muestran las opciones que tiene el usuario dependiendo de su rol
     */
    Opciones() {
      let rol = localStorage.getItem("rol");
      //admin
      if (rol == 2) {
        this.Permisos = [
          {nombre: "Usuarios",url: "/usuarios" },
          {nombre: " Motos", url: "/motos" },
          { nombre: "Mantenimientos", url: "/mantenimientos"},
          {nombre: " SALIR", url: "/login" }
        ];

        //mecanico 
      } else {
        this.Permisos = [
          {nombre: "Mantenimientos", url: "/mantenimientos"},
          { nombre: "Motos", url: "/motos"},  
          {nombre: " SALIR", url: "/login" },      
        ];
      }
    }
  }
};