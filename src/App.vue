<template>
  <div id="app">

    <router-view></router-view>
    
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  mounted() {
    this.axios.get('/api/getList')
    .then(res=>{
      window.console.log(res);
    })
    
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  
}
</style>
