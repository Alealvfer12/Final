<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <br />
      <b-row cols="2">
        <b-col>
          <br />
          <b-card title="Crear mantenimientos">
            <b-card-text>A continuación inserte datos :</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearMantenimientos()">
              <br />

              <b-form-group label="Mecanico" label-for="id_mecanico">
                <b-form-select
                  v-model="mantenimiento.id_mecanico"
                  :options="lista_empleados"
                  required
                  id="id_mecanico"
                ></b-form-select>
                <b-form-invalid-feedback :state="validacionId_mecanico"
                  >Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Placa" label-for="placa">
                <b-form-select
                  v-model="mantenimiento.placa"
                  :options="lista_motos"
                  required
                  id="placa"
                ></b-form-select>
                <b-form-invalid-feedback :state="validacionPlaca"
                  >Campo obligatorio</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group label="Fecha" label-for="fecha">
                <b-form-input
                  class="form-control"
                  required
                  v-model="mantenimiento.fecha"
                  placeholder="dd-mm-aaaa"
                  id="fecha"
                />
                <b-form-invalid-feedback :state="validacionFecha"
                  >Campo obligatorio</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group
                label="Trabajos realizados"
                label-for="trabajos_realizados"
              >
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  v-model="mantenimiento.trabajos_realizados"
                  placeholder="Ingrese los trabajos realizados"
                  id="trabajos_realizados"
                />
                <b-form-invalid-feedback :state="validacionTrabajos_realizados"
                  >Campo obligatorio</b-form-invalid-feedback
                >
              </b-form-group>

              <b-form-group
                label="Horas invertidas"
                label-for="horas_invertidas"
              >
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="mantenimiento.horas_invertidas"
                  placeholder="Ingrese las horas invertidas"
                  id="horas_invertidas"
                />
                <b-form-invalid-feedback :state="validacionHoras_invertidas"
                  >Campo obligatorio</b-form-invalid-feedback
                >
              </b-form-group>
           

              <b-button type="submit" variant="danger" v-if="!enEdicion">Crear usuario</b-button>
              <b-button @click="actualizarMantenimientos()" variant="primary" v-else>Actualizar usuario</b-button>
            </b-form>
          </b-card>
        </b-col>
        <b-col>
          <br />
          <b-table
            striped
            responsive
            hover
            :items="lista_mantenimientos"
            v-show="showTable"
            class="border border-danger text-center">
            <template v-slot:cell(acciones)="row">
              <b-button size="sm" @click="cargarMantenimiento(row)" class="mr-2" variant="outline-primary">
               Modificar
              </b-button>
              <br />
              <br />
              <b-button
                size="sm"
                @click="eliminarMantenimientos(row)"
                class="mr-2"
                variant="outline-danger">Eliminar
              </b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="../assets/mantenimientos.js"/>