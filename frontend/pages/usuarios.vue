<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <br />
      <b-row cols="2">
        <b-col>
          <br />
          <b-card title="Crear usuario">
            <b-card-text>A continuación inserte sus datos :</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearUsuario()">
              <br />

              <b-form-group label="Tipo" label-for="tipo">
                <b-form-select v-model="usuarios.tipo_documento" :options="opciones_documentos" required></b-form-select>
              </b-form-group>
              
              <b-form-group label="Documento" label-for="documento">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="usuarios.documento"
                  :disabled="enEdicion"
                  placeholder="Ingrese documento"
                  id="documento"/>
                <b-form-invalid-feedback :state="validacionId">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Nombre" label-for="nombre">
                <b-form-input
                  class="form-control"
                  v-model="usuarios.nombre"
                  required
                  placeholder="Ingrese nombre del Usuario"
                  id="nombre" />
                <b-form-invalid-feedback :state="validacionNombre">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Apellidos" label-for="apellidos">
                <b-form-textarea
                  class="form-control"
                  v-model="usuarios.apellidos"
                  id="apellidos"
                  required
                  placeholder="Ingrese apellidos del usuario "/>
                <b-form-invalid-feedback :state="validacionApellido">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>

             <b-form-group label="Celular" label-for="celular">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  v-model="usuarios.celular"
                  :disabled="enEdicion"
                  placeholder="Ingrese celular"
                  id="celular"/>
                <b-form-invalid-feedback :state="validacionCelular">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>
              
              <b-form-group label="Correo" label-for="correo">
                <b-form-input
                  class="form-control"
                  type="email"
                  required
                  v-model="usuarios.correo"
                  :disabled="enEdicion"
                  placeholder="Ingrese correo del usuario"
                  id="correo"/>
                <b-form-invalid-feedback :state="validacionCorreo">Campo obligatorio</b-form-invalid-feedback>
              </b-form-group>

            <b-form-group label="Rol" label-for="rol">
                <b-form-select v-model="usuarios.rol" :options="opciones_roles" required></b-form-select>
              </b-form-group>
               
               
              <b-form-group @submit.stop.prevent label="Clave" label-for="clave">
                <b-form-input
                    class="form-control"
                    type="password"
                    v-model="usuarios.clave"
                    placeholder="Ingrese su contraseña"
                    id="clave"/>
                <b-form-invalid-feedback :state="validarClave">Campo obligatorio</b-form-invalid-feedback>
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
<script src="../assets/usuarios.js"/>