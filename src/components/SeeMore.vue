<template>
    <div id="app">
      <!-- <div><h1>Hello</h1></div> -->
      <!-- X button to close and go to home -->
      <button @click="goToHome" class="close-btn">Home Page</button>
  <div><PhotoGalleryBooki /></div>
      <!-- Your other content for the component -->
      
      <!-- ... -->
    </div>
  </template>


<script>

import PhotoGalleryBooki from '../components/Photo-Gallery/PhotoGalleryBooki.vue'

export default {

  components: {
    'PhotoGalleryBooki': PhotoGalleryBooki,
  },
  methods: {
    goToHome() {
      this.$router.push('/#card-container');
    }
  }
};
</script>


<style scoped>


#app{
    width: 90%;
    height: auto;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px auto;
    border-radius: 20px;
}

.close-btn {
    position: fixed;
      top: 0px;
      left: 0px;
      background: none;
      outline: 0;
      background-color: transparent;
      border: 1px solid #ffffff;
      color: #ffffff;
      padding: 10px;
      text-transform: uppercase;
      letter-spacing: 2px;
      z-index: 1001;
    
  }

  .close-btn:hover {
      
      color: #7451eb;
    }

@media (max-width: 480px) {
  #app{

    width: 40%;
  }

  .close-btn {
    display: none;
    
  }

}
</style>