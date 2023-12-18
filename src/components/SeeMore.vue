<template>
    <div id="app">
      <button @click="goToHome" class="close-btn">Home Page &#x2718;</button>

      <div><PhotoGalleryBooki /></div>
      
    </div>

    <!-- FOOTER -->
    <div>
      <ContactFooter />
    </div>
  </template>


<script>

import PhotoGalleryBooki from '../components/Photo-Gallery/PhotoGalleryBooki.vue'
import ContactFooter from '../components/ContactFooter.vue'

export default {

  components: {
    'PhotoGalleryBooki': PhotoGalleryBooki,
    'ContactFooter': ContactFooter
  },
  methods: {
    goToHome() {
      this.$router.push('/#cards-container');
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
      width: 120px;
      background-color: transparent;
      /* border: 1px solid #ffffff; */
      border: none;
      color: black;
      padding: 10px;
      text-transform: uppercase;
      z-index: 1001;
      border-radius: 2px;

  }
#footer {
  background-color: white;
  color: var(--primaryRed);
  border-top: 2px solid var(--primaryRed);
}
  .close-btn:hover {
      
      color: #7451eb;
    }

@media (max-width: 480px) {
  #app{

    width: 40%;
  }

  .close-btn {
    
    position: absolute;
    left: 0;
    top: 0;
    
  }

}
</style>