<template>
<b-container>
  <b-form action="javascript:void(0)">
    <br> <br> <br>
    <br> <br> <br>
    <div>

    <b-form-group @submit.stop.prevent label="Documento" label-for="id">
      <b-form-input
        class="form-control"
        v-model="usuario.documento"
        type="number"
        placeholder="Ingrese su documento de identidad"
        id="id"/>
      <b-form-invalid-feedback :state="validar_id">Campo obligatorio</b-form-invalid-feedback>

    </b-form-group>
    <b-form-group @submit.stop.prevent label="Contraseña" label-for="password">
      <b-form-input
        class="form-control"
        type="password"
        v-model="usuario.clave"
        placeholder="Ingrese su contraseña"
        id="password"/>
      <b-form-invalid-feedback :state="validar_clave">Campo obligatorio</b-form-invalid-feedback>
    </b-form-group>

    <b-button id ="btn" type="submit" block variant="warning" @click="iniciar()">Ingresar</b-button>
    </div>
  </b-form>
</b-container>
</template>

<script src= "../assets/login.js"> </script>