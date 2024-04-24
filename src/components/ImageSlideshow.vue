<template>
  <div class="slideshow">
    <!-- Desktop Slides -->
    <div v-if="!isMobile">
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
      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ 'active': currentImageIndex === index }">
        <div class="overlay"></div>
        <img :src="slide.image" class="slide-background" />
      </div>
    </div>

    <!-- Mobile Slides -->
    <div v-if="isMobile" class="mobile-slideshow">
      <!-- Mobile Navigation Arrows -->
      <div class="mobile-navigation">
        <span class="mobile-arrow left" @click="prevMobileSlide">&#10094;</span>
        <span class="mobile-arrow right" @click="nextMobileSlide">&#10095;</span>
      </div>
      
      <!-- Mobile Slide Indicators -->
      <div class="mobile-indicators">
        <span v-for="(slide, index) in mobileSlides"
              :key="`mobile-indicator-${index}`"
              :class="{ active: mobileCurrentImageIndex === index }"
              @click="goToMobileSlide(index)"></span>
      </div>
      
      <div v-for="(slide, index) in mobileSlides" :key="`mobile-${index}`" class="mobile-slide" :class="{ 'active': mobileCurrentImageIndex === index }">
        <img :src="slide.image" class="mobile-slide-background" />
      </div>
      
    </div>
    
  </div>
</template>

<script>

export default {
 
  name: 'ImageSlideshow',
  data() {
    return {
      currentImageIndex: 0,
      mobileCurrentImageIndex: 0,
      slides: [
        { image: require('../assets/images/slides/1.png') },
        { image: require('../assets/images/slides/2.png') },
        { image: require('../assets/images/slides/3.png') },
        { image: require('../assets/images/slides/4.png') },
        { image: require('../assets/images/slides/5.png') },
        { image: require('../assets/images/slides/6.png') },
        { image: require('../assets/images/slides/7.png') },
        { image: require('../assets/images/slides/8.png') },


      ],
      mobileSlides: [
        { image: require('../assets/images/mobileSlides/1.png') },
        { image: require('../assets/images/mobileSlides/2.webp') },
        { image: require('../assets/images/mobileSlides/3.webp') },
        { image: require('../assets/images/mobileSlides/4.png') },
        { image: require('../assets/images/mobileSlides/5.webp') },
        { image: require('../assets/images/mobileSlides/6.webp') },
        { image: require('../assets/images/mobileSlides/7.webp') },
        { image: require('../assets/images/mobileSlides/8.webp') },
        { image: require('../assets/images/mobileSlides/9.webp') }
        // Additional mobile slides...
      ],
      isMobile: window.innerWidth < 768
    };
  },
  methods: {
    nextSlide() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentImageIndex = (this.currentImageIndex + this.slides.length - 1) % this.slides.length;
    },
    goToSlide(index) {
      this.currentImageIndex = index;
    },
    nextMobileSlide() {
      this.mobileCurrentImageIndex = (this.mobileCurrentImageIndex + 1) % this.mobileSlides.length;
    },
    prevMobileSlide() {
      this.mobileCurrentImageIndex = (this.mobileCurrentImageIndex + this.mobileSlides.length - 1) % this.mobileSlides.length;
    },
    goToMobileSlide(index) {
      this.mobileCurrentImageIndex = index;
    },
    handleResize() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    setInterval(this.nextSlide, 5500);
    setInterval(this.nextMobileSlide, 5500);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style scoped>
.slideshow {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.slide, .mobile-slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease-in-out;
  opacity: 0;
}

.slide.active, .mobile-slide.active {
  opacity: 1;
}

.slide-background, .mobile-slide-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.navigation, .mobile-navigation {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.arrow, .mobile-arrow {
  cursor: pointer;
  font-size: 3em;
  color: var(--primaryRed);
  user-select: none;
  padding: 0 1%;
  transition: transform 0.2s;
}

.arrow:hover, .mobile-arrow:hover {
  transform: scale(1.2);
}

.indicators, .mobile-indicators {
  position: absolute;
  width: 100%;
  bottom: 10px;
  text-align: center;
  z-index: 10;
}

.indicators > span, .mobile-indicators > span {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: var(--primaryRed);
  border: 2px solid #fff;
  border-radius: 50%;
  display: inline-block;
  padding: 2.6px;
  opacity: 0.5;
  transition: opacity 0.6s ease, transform 0.2s ease;
}

.indicators > span.active, .mobile-indicators > span.active {
  opacity: 1;
  transform: scale(1.6);

}

@media (max-width: 768px) {
  .mobile-arrow {
  cursor: pointer;
  font-size: 2em;
  }
}

@media (max-width: 480px) {
  .mobile-arrow {
  cursor: pointer;
  font-size: 2em;
  }
}
</style>
