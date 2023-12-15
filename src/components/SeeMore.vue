<template>
    <div id="app">
      <!-- <div><h1>Hello</h1></div> -->
      <!-- X button to close and go to home -->
      <button @click="goToHome" class="close-btn">X</button>
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
    position: absolute;
  top: 3rem; /* Adjust as needed */
  left: 72rem;
  padding: 10px 10px;
  border: none;
  background: none;
  font-size: 1.6em; /* Large enough for better clickability */
  cursor: pointer;
  font-weight: 600;
  color: var(--primaryRed); /* Or any color that suits your design */
}

</style>