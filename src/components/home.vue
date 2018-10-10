<template>
    <div>
    
    <div>
          <video class="m-1 card border-dark w-100" poster="https://www.neevschools.com/images/video_screens/ngaged_learners.jpg" autoplay="" muted="" loop="" playsinline="">
							<source src="https://www.neevschools.com/video/web/ngaged_learners.mp4">
							<source src="https://www.neevschools.com/video/web/ngaged_learners.ogg codecs=theora, vorbis">
							<source src="https://www.neevschools.com/video/web/ngaged_learners.webm codecs=vp8, vorbis">
							Your browser does not support the HTML5 video tag. Try updating your browser or using a different one.
					</video>
          </div>

<div class="m-1 card border-dark">
    <md-card class="ml-auto mr-auto" md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Add/remove students</div>
          <div class="md-subhead">only for staff usage...</div>
        </md-card-header>

        <md-card-content>
         This should only be used by the management staff...
         </md-card-content>

        <md-card-actions>
           <router-link to="/AddStudents" id="button" tag="md-button" class="md-raised">Check this Section</router-link>
        </md-card-actions>
      </md-ripple>
    </md-card>
    </div>



    </div>
</template>

<script>
export default {
    name:'home',
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>
