<template>
    <footer id="footer">
      <div class="footer-container">
        <div class="social-media-links">
            <h2 class="social-media ">Check out </h2>
          <a href="https://www.linkedin.com/in/lea-maljkovic" target="_blank" aria-label="linkedin"><font-awesome-icon :icon="['fab', 'linkedin']" beat style="height: 40px; width: 40px;"/></a>
          <a href="https://github.com/leamaljk" target="_blank" aria-label="github"><font-awesome-icon :icon="['fab', 'github']" beat  style="height: 40px; width: 40px;" /></a>    
        </div>
        <div class="footer-links">
            <h2 class="social">Contact</h2>
          <a href="mailto:lea.zizic@hotmail.com" target="_blank" aria-label="e-mail"><font-awesome-icon :icon="['fas', 'envelope']" style="height: 35px; width: 35px;"/>
            <h4 class="contact">PearlDesign2024@outlook.com</h4>
          </a>
          <a href="#" target="_blank" aria-label="phone"><font-awesome-icon :icon="['fas', 'phone']" style="height: 35px; width: 35px;" />
            <h4 class="contact"> +4475 86 326-416</h4>
          </a>    
        
        </div>
        <div class="legal-links">
            <a href="https://g.co/kgs/w9Cwgi" target="_blank" aria-label="location"><font-awesome-icon :icon="['fass', 'location-pin']" bounce class="pin" style="height: 35px; width: 35px;" />
            <h4 class="contact"> I am currently based <br><br>in Milton Keynes, UK.</h4>
          </a> 
        </div>
        <div class="copyright">
          © 2024 PearlDesign.<br><br> All Rights Reserved.
        </div>
      </div>
    </footer>
  </template>
  


  <script>
  export default {
    name: 'FooterComponent'
  }
  </script>
  
  <style scoped>
  #footer {
    margin-top: 40px;
    font-family: 'Tenor Sans', sans-serif;
    background-color: var(--primaryRed); /* Replace with the color code you want */
    color: white; /* Replace with the color code for the text */
    padding: 20px; /* Adjust padding as needed */
    font-size: 0.8rem; /* Adjust font-size as needed */
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .pin{
    position: relative;
    top: 20px;
  }
  .copyright{
    padding: 20px;
    font-size: 1em;
    font-weight: 200;
  }
  .contact{
    padding-left: 20px;
    position: relative;
    bottom: 6px;
    font-size: 1.1em;
    
  }

  .social{
    position: relative;
    justify-content: center;
    text-align: center;
    padding: 20px;
  }
  .social-media{
    position: relative;
    bottom: 34px;
    justify-content: center;
    text-align: center;
    padding-top: 10px;
  }
  .social-media-links a {
    padding-left: 10px;
    margin-right: 10px; /* Adjust spacing as needed */
    color: inherit; /* Inherits the color from the footer */
    text-decoration: none;
  }
  
  .footer-links a,
  .legal-links a {
    display: flex;
    margin-right: 10px; /* Adjust spacing as needed */
    color: inherit; /* Inherits the color from the footer */
    text-decoration: none;
  }
  
  /* Icons from Font Awesome - you will need to include the Font Awesome library */
  .fab {
    font-size: 1.5em; /* Adjust icon size as needed */
  }
  
  @media (max-width: 600px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
    }
    .social-media-links a, .footer-links a, .legal-links a {
      margin-bottom: 10px;
    }
  }
  </style>
  