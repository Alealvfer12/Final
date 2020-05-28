
<template>
  <div class="body">
    <b-container>
      <h1>BIENVENIDO</h1>
    </b-container>
  </div>
</template>

<script>
export default {
  beforeMount(){
    this.$router.push("/login");
  }
   
}
</script>
