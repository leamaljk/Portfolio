<template>
  <section class="hero">
    <div class="container-text">
      <h1>I'm Lea - Web Developer.</h1>
      <p class="typing-effect">Check out my latest work and get in touch with me ...</p>
    </div>
  </section>
  
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

/* Container to wrap the content */
.container-text {
  font-family: 'TenorSanas', sans-serif;
  border: 3px solid white;
  padding: 50px 0; 
  max-width: 700px;
  margin: auto;
  
}

.container-text .typing-effect {
  padding: 0 20px ;
  white-space: nowrap;
  overflow: hidden;
  border-right: .15em solid #f07f7f; /* The typwriter cursor */
}

.container-text .typing-effect {
  width: 100%;
  animation: typing 6s steps(60, end) infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0}
  to { width: 100% }
}



/* Hero section styles */
.hero {
  background: url('../assets/images/img2.jpg') no-repeat bottom center/cover; /* Hero image with covering background */
  padding: 100px 0; /* Some vertical padding */
  text-align: center; /* Center the text */
  height: 26rem;
  padding-top: 8rem;
}

/* Hero text styles */
.hero h1 {
  font-size: 2.5em; /* Large font size */
  margin-bottom: 20px;
color: white;}

.hero p {
  font-size: 1.7em; /* Slightly larger font size for readability */
  color: white; /* Light grey color for the paragraph */
}

/* Ensure that the hero image resizes responsively */
@media (max-width: 768px) {
  .hero {
    padding: 50px 0;
  }

  .container-text h1,
  .container-text .typing-effect {
    font-size: 2rem; /* Smaller font size for h1 */
  }

  .container-text .typing-effect {
    font-size: 1rem; /* Smaller font size for p */
    animation: typing 5s steps(40, end) infinite; /* Slower typing for better readability */
  }

}
.arrow {
  font-size: 4.1rem; 
}

@media (max-width: 480px) {
  .hero{
    margin-top: 60px;
  }
  .container-text h1,
  .container-text .typing-effect {
    font-size: 1.5rem; /* Even smaller font size for h1 */
  }

  .container-text .typing-effect {
    width: 100%;
    font-size: 0.875rem; /* Smaller font size for p */
    animation: typing 5s steps(40, end) infinite; /* Even slower typing for better readability */
    padding: 0 10px; /* Add padding to ensure text doesn't touch the edges */
    border-right: 0.1em solid rgb(253, 253, 253); /* Slightly thinner cursor for smaller screens */
  }
}
</style>
