
<template>
  <div >
    <div>
         <div class="p-3 mb-2 bg-dark text-warning">
    
        <ul id="ul">
        <li id="li2" v-for="(permiso, index) in Permisos" :key="index">
          <a :href="permiso.url">{{ permiso.nombre }}</a>
        </li>
        
      </ul>
      </div>
        <br> <br> <br>
         <br> <br> <br>
          <br> <br> <br>
        <b-row> 
        
          <b-col>          
            <center><h1 style="color:gray">Bienvenido a la adminitracion</h1></center>
            <center><h1 style="color:gray"> de mantenimientos de motos</h1></center>
          </b-col>
        </b-row>
      
      
    </div>
    </div>
 
</template>
<script src="../assets/principal.js" ></script>
<style>
#content-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
#li2 {
  float: left;
}
#li2 a {
  display: block;
  color:goldenrod;
  text-align: left;
  margin-right: 50px;
  text-decoration: none;
}
</style>
