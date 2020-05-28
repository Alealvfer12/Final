<template>
  <div>
    <div>
      <b-navbar toggleable type="light" variant="faded">
    
        <div class="title">Administración de los mantenimientos de un taller de motos</div>
         
         <a href="principal">
            <b-icon icon="house-fill" variant="warning" font-scale="2"></b-icon>
          </a>
        
      </b-navbar>

      <div>
        <b-navbar toggleable="md" type="dark" variant="dark">
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav>
              <b-nav-item href="Usuarios">Usuarios</b-nav-item>
              <b-nav-item href="motos"> motos</b-nav-item>
              <b-nav-item href="mantenimientos">mantenimientos</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
export default {};
</script>

