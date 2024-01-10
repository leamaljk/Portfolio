<template>
  <header class="fixed-header">
        <div class="container">
        <button class="hamburger" @click="toggleNav">&#9776;</button>
        <nav class="top-bar" :class="{ 'is-active': navIsActive }">
        <ul>
          <li><router-link to="/" @click="closeNav"><font-awesome-icon class="icon" :icon="['fas', 'house']" beat />Home</router-link></li>
          <li><router-link to="/#about-section" @click="closeNav"><font-awesome-icon class="icon" :icon="['fas', 'user']" beat/>About Me</router-link></li>
          <li><router-link to="/#skills-wrapper" @click="closeNav"><font-awesome-icon class="icon" :icon="['fas', 'medal']" beat/>Skills</router-link></li>
          <li><router-link to="/#cards-container" @click="closeNav"><font-awesome-icon class="icon" :icon="['fas', 'folder-open']" beat />Portfolio</router-link></li>
          <li><router-link to="/#footer" @click="closeNav"><font-awesome-icon class="icon" :icon="['fas', 'at']" beat/>Contact</router-link></li>
        </ul>
      </nav>
      </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      navIsActive: false, // Tracks the state of the nav menu
    };
  },
  methods: {
    closeNav() {
    this.navIsActive = false;
  },
    toggleNav() {
      this.navIsActive = !this.navIsActive; // Toggle the state of the nav menu
    },
  },
};
</script>


<style scoped>

/* Basic reset for styling */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'TenorSanas', sans-serif;
  line-height: 1.6;
}

header {
  background: #fff; /* A dark background for the header */
  color: var(--primaryRed);/* Light text color for contrast */
  padding: 10px 0;
  margin-top:55px; 
  height: 35px; /* Some padding around the content */
}

.hamburger {
  display: none; /* Hide by default */
}



/* This class will be toggled to show/hide the nav */
.top-bar.is-active {
  display: block;
}
.top-bar {
  color: #fff;
  
}
/* Navigation styles */
nav {
font-family: 'TenorSanas', sans-serif;
margin-right: 3rem;
position: relative;
bottom: 0.1em;
padding-bottom: 5%;

float: right; 

}

nav ul {
  
  list-style: none; /* Remove list bullets */
}

nav ul li {
  
  display: inline; /* Display links inline */
  margin-left: 20px; /* Margin between the links */
}

/* Base styles for the nav links */
nav ul li a {
  font-family: 'TenorSanas', sans-serif;
  letter-spacing: 0.1em;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  color: var(--primaryRed);
  cursor: pointer;
  outline: 1px solid;
  margin-left: 20px;
  text-decoration: none;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0.4em;
  transition: all 600ms cubic-bezier(0.2, 0, 0, 0.8);
}

nav ul li a:hover {
  color: #b19afc;
  outline-color: var(--primaryRed);
  outline-offset: 2em;
}

.icon {
  
  display: none; /* Hide icons by default */
  margin-right: 5px; /* Add some space between icon and text */
}

.home-icon:before {
  content: "\f015"; /* FontAwesome home icon */
}

@media (max-width: 768px) {
  .icon {
    color: #b19afc;
    margin-right: 20px;
    display: inline-block; /* Show icons only on phone */
  }

    nav {
    /* margin-right: 60px; */
    /* text-transform: uppercase; */
    float: none;
    text-align: center; /* Center the logo and nav on small screens */
  }

  .top-bar {
    display: none;
  }
  

/* fixed header */
.fixed-header {
  position: fixed;
  top: -57px;
  left: 0;
  width: 100%;
  height: auto;
  background-color: var(--primaryRed);
  color: white;
  padding: 0.5rem 1rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}
  /* HAMBURGER TOGGLE */

.hamburger {
  background: none;
  border: none;
  font-size: 2.2rem; /* Adjust the size as needed */
  cursor: pointer;
  display: block;
  color: white;
  align-items: center;
  padding-left: 10px;
}

.top-bar.is-active {
    display: block; /* Ensure the nav displays when active */
    position: fixed; /* Fixed position to stay at the top */
    width: 100%; /* Take full width of the screen */
    top: 0; /* Align to the top */
    left: 0; /* Align to the left */
    z-index: 999; /* Below the header but above other content */
    background-color: var(--primaryRed);
    margin-top: 60px; 
    border: none;
    

  }

  nav ul {
    padding-top: 0px;
    border: none;
    
  }

  nav ul li a{
    
    outline: none;
    margin: 10px 40px;
    color: white;
    padding: 10px;
    display: block; /* Stack the links vertically */
  }
  
}

@media (max-width: 480px) {
  .icon {
   
    float: center;
    color: #fff;
    /* display: inline-block; Show icons only on phone */
  }

  nav ul li a{
    position: relative;
    text-align: center;
    font-size: 1.6em;
    font-weight: 200;
  }
  
nav ul li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: white;
  transition: width 0.3s ease, left 0.3s ease;
}
nav ul li a:hover::after {
  width: 100%;
  left: 0;
}

 
}


</style>