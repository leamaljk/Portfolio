<template>
    <header class="header">
      <div class="background-image">
        <img src="../assets/images/work.webp" alt="Background" />
      </div>
      <div class="content">
        <img src="../assets/images/logo/LogoSign (2).png" alt="Logo" class="logo" />
        <h1>Pearl Design</h1>
        <h2>Web design services</h2>
        <p class="slogan">Building Websites That Tell Your Story</p>
        <CallToAction></CallToAction>
      </div>
    </header>
  </template>
  
  <script>
import CallToAction from './CallToAction.vue';

  export default {
    name: 'ResponsiveHeader',
    components: {
        CallToAction
    }
  };
  </script>
  
  <style scoped>
  

  .header {
    height: 100vh;
    display: flex;
    padding: 20px 0px;
    text-align: left;
    align-items: center;
    position: relative;
    color: var(--title);
    background: rgba(255, 255, 255, 0.6); /* semi-transparent white background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* subtle shadow for depth */


  }
  
  .background-image img {
   
    width: 100%;
    height: 100vh;
    object-fit: cover;
    background-position: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 1; /* Adjust based on your preference */
  }
  
  .content {
    margin-left: 100px;
    z-index: 2;
  }
  
  .logo {
    max-width: 170px; /* Adjust based on your logo size */
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding-top: 40px;
    
  }
  
  h1 {
    font-family: "Libre Caslon Text", serif;
    color: var(--title);
    margin: 0;
    padding: 0;
    font-size: 2.7em; /* Adjust based on your preference */
  }
  h2{
    font-family: "Libre Caslon Text", serif;
    font-weight: 100;
    font-size: 2.2em;
  }
  
  .slogan {
    color: var(--secondary);
    letter-spacing: 2.6px;
    text-transform: uppercase;
    font-size: 1em; /* Adjust based on your preference */
  }
  .content h1, h2, p{
        padding-top: 10px;
        
    }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .header, .content{
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin-left: 0;
    }

   .header, .background-image img {
   
   width: 100%;
   height: 650px;

    }
    .logo {
      max-width: 100px;
      padding-top: 0;
      margin-top: 0;
    }
  
    h1 {
      font-size: 2.2em;
    }
  h2{
    font-size: 1.8em;

  }
    .slogan {
      font-size: 1em;
    }

    .content h1, h2, p{
        padding-top: 10px;
    }
  }
  
  </style>
  