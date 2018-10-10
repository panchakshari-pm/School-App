<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
     <navbar></navbar>

 <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  },
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine"; 

@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200),
  accent: md-get-palette-color(red, A200) 
));

@import "~vue-material/dist/theme/all";
</style>
