<template>
  
  <div id="arrow" @click="scrollPage" class="arrow" :class="{ 'up': isBottomOfPage, 'down': !isBottomOfPage }">&#10095;</div>
</template>


<script>
export default {
  data() {
    return {
      isBottomOfPage: false,
    };
  },
  methods: {
  handleScroll() {
    // Check if the user is at the bottom of the page and update isBottomOfPage accordingly.
    this.isBottomOfPage = (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight;
  },
  scrollPage() {
    if (this.isBottomOfPage) {
      // Scroll to the top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll down
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  }
},
mounted() {
  window.addEventListener('scroll', this.handleScroll);
},
beforeUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
}

}
</script>



<style scoped>
/* ARROW STYLING */
/* Base styling for the arrow, without rotation */
.arrow {
  display: inline-block;
  color: var(--primaryRed);
  font-size: 6rem;
  font-weight: 600; /* Adjust the size as needed */
  cursor: pointer;
  rotate: 90deg;
  position: fixed; /* Fixed positioning relative to the viewport */
  left: 50%;
  bottom: 10px; /* Position it 20px up from the bottom of the viewport */
  transform: translateX(-50%); /* Center it horizontally */
  user-select: none; /* Prevent text selection */
}

/* When the arrow is up, rotate to point upwards */
.arrow.up {
  animation: none; /* Stop any animation */
  transform: translateX(-50%) rotate(180deg); /* Rotate to point up */
}

/* When the arrow is down, keep it at its initial state */
.arrow.down {
  animation: bounce 2s infinite; /* Apply the bouncing animation */
}

/* Keyframes for the bounce animation */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(-5%);
  }
  40% {
    transform: translateY(-5%) translateX(-30px);
  }
  60% {
    transform: translateY(-5%) translateX(-15px);
  }
}

/* Basic reset for styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Use a font like 'Roboto' or 'Open Sans' for a clean look */
body {
  font-family: 'TenorSanas', sans-serif;
  line-height: 1.6;
}


/* Ensure that the hero image resizes responsively */
@media (max-width: 768px) {

.arrow {
  font-size: 4.1rem; 
}

}
</style>
