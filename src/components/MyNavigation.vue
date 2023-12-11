<template>
  <header class="fixed-header">
        <div class="container">
        <button class="hamburger" @click="toggleNav">&#9776;</button>
        <nav class="top-bar" :class="{ 'is-active': navIsActive }">
        <ul>
          <li><router-link to="/" @click="closeNav">Home</router-link></li>
          <li><router-link to="/#about-section" @click="closeNav">About Me</router-link></li>
          <li><router-link to="/#skills-wrapper" @click="closeNav">Skills</router-link></li>
          <li><router-link to="/#card-container" @click="closeNav">Portfolio</router-link></li>
          <li><router-link to="/" @click="closeNav">Contact</router-link></li>
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
margin-right: 1rem;
/* margin-top: 2rem; */
float: right; /* Align the navigation to the right */
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
  transition: all 300ms cubic-bezier(0.2, 0, 0, 0.8);
}

nav ul li a:hover {
  color:hsl(271, 85%, 92%) ;
  border-bottom: 3px solid var(--primaryRed);
  border-right: 2px solid var(--primaryRed);
  padding-right: 3px;
  padding-bottom: 3px;
  width: auto;
  
  
}

@media (max-width: 768px) {


    nav {
    float: none;
    text-align: center; /* Center the logo and nav on small screens */
  }

  .top-bar {
    display: none;
  }
  

/* fixed header */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: var(--secondary);
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
  color: var(--primaryRed);
  align-items: center;
  padding-left: 20px;
}

.top-bar.is-active {
    display: block; /* Ensure the nav displays when active */
    position: fixed; /* Fixed position to stay at the top */
    width: 100%; /* Take full width of the screen */
    top: 0; /* Align to the top */
    left: 0; /* Align to the left */
    z-index: 999; /* Below the header but above other content */
    background-color: var(--secondary);
    margin-top: 60px; 
    border: none;
    padding: 20px;

  }

  nav ul {
    padding-top: 0px;
    border: none;
    
  }

  nav ul li a{
    padding: 20px;
    display: block; /* Stack the links vertically */
    margin: 10px 0; /* Add space between the stacked links */
  }
  nav ul li a:hover {
    color: #fff;
  }
}




</style>