<template>
    <div class="slideshow">
        
      <!-- Navigation Arrows -->
      <div class="navigation">
        <span class="arrow left" @click="prevSlide">&#10094;</span>
        <span class="arrow right" @click="nextSlide">&#10095;</span>
      </div>
      
      <!-- Slide Indicators -->
      <div class="indicators">
    <span v-for="(slide, index) in slides"
          :key="`indicator-${index}`"
          :class="{ active: currentImageIndex === index }"
          @click="goToSlide(index)"></span>
  </div>
  
      <!-- Slides -->
      <div v-for="(slide, index) in slides" :key="index" :class="{ 'slide': true, 'active': currentImageIndex === index }">
        <!-- Slide Background -->
        <div class="overlay"></div>
        
        <img :src="slide.image" class="slide-background" />
      </div>
      <NewHeader></NewHeader>

    </div>
    
  </template>
  
  <script>
import NewHeader from './NewHeader.vue';

  export default {
    components: {
        NewHeader
},
    name: 'ImageSlideshow',
    data() {
      return {
        currentImageIndex: 0,
        slides: [
          {
            image: require('../assets/images/1.webp'),
          
          },
         
          {
            image: require('../assets/images/3.webp'),
            
          },
          {
            image: require('../assets/images/2.webp'),
            
          },
          {
            image: require('../assets/images/4.webp'),
           
          },
          // ...other slides
        ]
      };
    },
    methods: {
      nextSlide() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentImageIndex = (this.currentImageIndex + this.slides.length - 1)
        % this.slides.length;
    },
    goToSlide(index) {
      this.currentImageIndex = index;
    }
  },
  mounted() {
    setInterval(this.nextSlide, 2600); // Rotate slides every 5 seconds
  }
};
</script>  
  
  <style scoped>
.slideshow {
 
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust height as necessary */
  overflow: hidden;
}

.slide {
    
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
  opacity: 0;
}

.slide.active {
  opacity: 1;
}

.slide-background {
  width: 100%;
  height: 100%;
  object-fit: cover; /* This will ensure the image covers the slide area */
}
.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
   
    z-index: 1; /* Ensure it's above the background image but below the text content */
  }

  .slide-text {
  position: absolute;
  z-index: 2; /* Ensure it's above the background image but below the text content */
  top: 50%; /* Center vertically */
  left: 0; /* Align to the left side */
  transform: translateY(-50%); /* Center vertically */
  padding: 100% 20px; /* Add some padding */
  border-radius: 20px;
  margin-left: 60px;
  color: var(--secondary); /* Choose a text color that contrasts well with your images */
  text-align: left;
  width: 30%;

  /* backdrop-filter: blur(16px);  */
}


.slide-text h2 {
  font-size: 3rem; /* Adjust the size as necessary */
  margin-bottom: 0.5rem;
  font-family: "Libre Caslon Text", serif;

}

.slide-text p {
    font-family: "Raleway", sans-serif;
    border-radius: 20px;
  font-size: 1.6rem; /* Adjust the size as necessary */
  margin-bottom: 1rem;
  color: white;
}

.slide-text button {
  padding: 10px 20px;
  background: var(--secondary); /* Make sure this variable is defined in your root or style */
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.slide-text button:hover {
  background-color: #555; /* This will change the background color on hover */
}


  .navigation {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10; /* Ensure arrows are above the slides */
}

.arrow {
  cursor: pointer;
  font-size: 3em; /* Adjust the size as needed */
  color: var(--secondary); /* This should match the color of the arrows in the image */
  user-select: none;
  padding: 0 1%; /* Use percentage for responsive padding */
  transition: transform 0.2s; /* Smooth transition for hover effect */
}

.arrow:hover {
  transform: scale(1.2); /* Slightly enlarge arrow on hover */
}
.indicators {
  position: absolute;
  width: 100%;
  bottom: 10px; /* Position at the bottom of the slideshow */
  text-align: center;
  z-index: 10; /* Ensure indicators are above the slides */
}

.indicators > span {
  cursor: pointer;
  height: 10px; /* Match the size to your design */
  width: 10px; /* Match the size to your design */
  margin: 0 5px; /* Adjust space between indicators */
  background-color: var(--secondary); /* Active color */
  border: 2px solid #fff; /* Border to match the inactive state */
  border-radius: 50%;
  display: inline-block;
  padding: 2px;
  opacity: 0.5; /* Lower opacity for inactive indicators */
  transition: opacity 0.6s ease, transform 0.2s ease;
}

.indicators > span.active {
  opacity: 1; /* Full opacity for the active indicator */
  transform: scale(1.2); 
}

@media (max-width: 768px) {
.arrow {
  cursor: pointer;
  font-size: 2.2em;
}

}
</style>