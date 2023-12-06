<template>
  <section class="hero">
    <div class="container-text">
    <h1>I'm Lea - Web Developer. </h1>
    <p class="typing-effect"> Check out my latest work and get in touch to collaborate.</p>
  </div>
  </section>
  
  <div id="arrow" @click="scrollDown" class="arrow bounce">&#10095;</div>
</template>

<script>

export default {
  
  methods: {
    scrollDown() {
      window.scrollBy({ 
        top: window.innerHeight,
        behavior: 'smooth' 
      });
    }
  }
}
</script>

<style scoped>


/* ARROW STYLING */
.arrow {
  display: inline-block;
  color: rgb(240, 7, 7); /* Adjust the color as needed */
  font-size: 6rem; /* Adjust the size as needed */
  cursor: pointer;
  position: fixed; /* Fixed positioning relative to the viewport */
  left: 50%;
  bottom: 10px; /* Position it 20px up from the bottom of the viewport */
  transform: translateX(-50%) rotate(90deg); /* Center it horizontally and rotate */
  user-select: none; /* Prevent text selection */
  animation: bounce 2s infinite; /* Apply the bouncing animation */
}

/* Bounce animation with rotation */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%) rotate(90deg);
  }
  40% {
    transform: translateY(-30px) translateX(-50%) rotate(90deg);
  }
  60% {
    transform: translateY(-15px) translateX(-50%) rotate(90deg);
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
  border-right: .15em solid rgb(255, 255, 254); /* The typwriter cursor */
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
    padding: 50px 0; /* Less vertical padding on smaller screens */
  }

  .container-text h1,
  .container-text .typing-effect {
    font-size: 2rem; /* Smaller font size for h1 */
  }

  .container-text .typing-effect {
    font-size: 1rem; /* Smaller font size for p */
    animation: typing 7s steps(50, end) infinite; /* Slower typing for better readability */
  }

}
.arrow {
  font-size: 4.1rem; 
}

@media (max-width: 480px) {
  .container-text h1,
  .container-text .typing-effect {
    font-size: 1.5rem; /* Even smaller font size for h1 */
  }

  .container-text .typing-effect {
    width: 100%;
    font-size: 0.875rem; /* Smaller font size for p */
    animation: typing 6s steps(30, end) infinite; /* Even slower typing for better readability */
    padding: 0 10px; /* Add padding to ensure text doesn't touch the edges */
    border-right: 0.1em solid rgb(253, 253, 253); /* Slightly thinner cursor for smaller screens */
  }
}
</style>
