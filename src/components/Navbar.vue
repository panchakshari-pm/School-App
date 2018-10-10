<template>
    <div>

 <md-toolbar class="md-large md-primary" md-elevation="9">
    <div class="md-toolbar-row md-toolbar-offset">
        <div class="row md-toolbar-section-start">
            <h5 class="col-sm-3"><md-icon>account_balance</md-icon>School Vision</h5>

              <b-input-group class="col-sm-4">
    <b-form-input placeholder="Search for school info..."></b-form-input>
    <b-input-group-append>
      <b-btn variant="info"><md-icon>search</md-icon></b-btn>
    </b-input-group-append>
  </b-input-group>

  <div class="md-toolbar-section-end">
     <img class="m-1 col-sm-3" src="../assets/school.png"> 
  </div>
        </div>
    </div>

    <div class="d-toolbar-row md-toolbar-offset">
        <div class="row">
            <md-button><h6 class="col">Subjects</h6></md-button>
            <md-button><h6 class="col">Grades</h6></md-button>
            <md-button><h6 class="col">Holidays</h6></md-button>
            <md-button><h6 class="col">Pricing</h6></md-button>
            <md-button><h6 class="col">About</h6></md-button>
            <router-link to="/" id="button" tag="md-button"><md-icon>supervised_user_circle</md-icon>Home</router-link>
        </div>
    </div>
    
    </md-toolbar>

    </div>
</template>

<script>
export default {
    name:'navbar',
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>