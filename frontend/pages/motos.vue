<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <br />
      <b-row cols="2">
        <b-col>
          <br />
          <b-card title="Crear motos">
            <b-card-text>A continuación inserte los datos de su moto :</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearUsuario()">
              <br />

  
              <b-form-group label="Placa" label-for="placa">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="motos.placa"
                  :disabled="enEdicion"
                  placeholder="Ingrese placa"
                  id="placa"/>
                <b-form-invalid-feedback :state="validacionPlaca">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Estado" label-for="estado">
                <b-form-input
                  class="form-control"
                  v-model="motos.estado"
                  required
                  placeholder="Ingrese estado"
                  id="estado" />
                <b-form-invalid-feedback :state="validacionEstado">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Clase" label-for="clase">
                <b-form-input
                  class="form-control"
                  v-model="motos.clase"
                  id="clase"
                  required
                  placeholder="Ingrese clase "/>
                <b-form-invalid-feedback :state="validacionClase">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>

             <b-form-group label="Marca" label-for="marca">
                <b-form-input
                  class="form-control"
                  required
                  v-model="motos.marca"
                  :disabled="enEdicion"
                  placeholder="Ingrese marca"
                  id="marca"/>
                <b-form-invalid-feedback :state="validacionMarca">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>
              
              <b-form-group label="Modelo" label-for="modelo">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="motos.modelo"
                  :disabled="enEdicion"
                  placeholder="Ingrese modelo"
                  id="modelo"/>
                <b-form-invalid-feedback :state="validacionModelo">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>

             <b-form-group label="Color" label-for="color">
                <b-form-input
                  class="form-control"
                  required
                  v-model="motos.color"
                  :disabled="enEdicion"
                  placeholder="Ingrese color"
                  id="color"/>
                <b-form-invalid-feedback :state="validacionColor">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Cilindraje" label-for="cilindraje">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="motos.cilindraje"
                  :disabled="enEdicion"
                  placeholder="Ingrese cilindraje"
                  id="cilindraje"/>
                <b-form-invalid-feedback :state="validacionCilindraje">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Id propietario" label-for="id_propietario">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="motos.id_propietario"
                  :disabled="enEdicion"
                  placeholder="Ingrese id del propietario"
                  id="id_propietario"/>
                <b-form-invalid-feedback :state="validacionId_propietario">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Numero soat" label-for="nro_soat">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="motos.nro_soat"
                  :disabled="enEdicion"
                  placeholder="Ingrese numero del soat"
                  id="nro_soat"/>
                <b-form-invalid-feedback :state="validacionNro_soat">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>
               <b-form-group label="Vencimiento soat" label-for="vencimiento_soat">
                <b-form-input
                  class="form-control"
                  type="date"
                  required
                  v-model="motos.Vencimiento_soat"
                  :disabled="enEdicion"
                  placeholder="Ingrese vencimiento del soat"
                  id="vencimiento_soat"/>
                <b-form-invalid-feedback :state="validacionVencimiento_soat">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>
               <b-form-group label="Numero tecnomecánica" label-for="nro_tecno">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="motos.nro_tecno"
                  :disabled="enEdicion"
                  placeholder="Ingrese numero de la tecnomecánica"
                  id="nro_tecno"/>
                <b-form-invalid-feedback :state="validacionNro_tecno">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="Vencimiento tecnomecánica" label-for="vencimiento_tecno">
                <b-form-input
                  class="form-control"
                  type="date"
                  required
                  v-model="motos.Vencimiento_tecno"
                  :disabled="enEdicion"
                  placeholder="Ingrese vencimiento de la tecnomecánica"
                  id="vencimiento_tecno"/>
                <b-form-invalid-feedback :state="validacionVencimiento_tecno">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>
            

              <b-button type="submit" variant="danger" v-if="!enEdicion">Crear usuario</b-button>
              <b-button @click="actualizar_usuario()" variant="primary" v-else>Actualizar usuario</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col>
          <br />
          <b-table
            striped
            responsive
            hover
            :items="lista_usuario"
            v-show="showTable"
            class="border border-danger text-center">
            <template v-slot:cell(acciones)="row">
              <b-button size="sm" @click="cargarUsuario(row)" class="mr-2" variant="outline-primary">
                <b-img left  width="15" height="15"></b-img>Modificar
              </b-button>
              <br />
              <br />
              <b-button
                size="sm"
                @click="eliminar_usuario(row)"
                class="mr-2"
                variant="outline-danger">
                <b-img left width="15" height="15"></b-img>Eliminar
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="../assets/motos.js"/>