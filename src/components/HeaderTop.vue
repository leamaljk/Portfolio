<template>
  <div class="grid-container">
    <div class="text-section">
      <div class="pearldesign">
      <h1>Pearl Design</h1>
      <div class="logo-box">
      <img class="logo-sign" src="../assets/images/logo/LogoSign (2).png" alt="logo"  >
      </div>
      </div>
      <p class="typing-effect">Building Websites That Tell Your Story.</p>
    </div>
<div>
  <CallToAction></CallToAction>
</div>
    <div class="photo-section">
      <img src="../assets/images/profile-pic.jpg" alt="My profile photo" class="profile-pic"/>

    </div>

  </div>
</template>

<script>
import CallToAction from './CallToAction.vue';

export default {
  components: {
 CallToAction, 
},
};
</script>


<style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* ljubicasti konteiner */
.grid-container {
    background-color: var(--primaryRed);
    display: flex;
    flex-direction: row;
    margin: auto;
    border-radius: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    animation: slideIn 1s ease-out forwards; 
    align-items: center; /* Vertically center */
    justify-items: center; /* Horizontally center */
    height: 20rem;
    width: 1200px; 
    overflow: visible; /* Show the parts of the image that are outside the container */
}

.logo-sign{
  position: relative;
 bottom: 95px;
 left: 400px;
 width: 180px;
 height: 180px;
 z-index: 1;
 margin: 0;
 padding: 0;
}

.pearldesign{
  position: relative;
 top: 50px;
 left: 80px;

}



.text-section h1 {
  font-size: 2.5em; /* Large font size */
  margin-bottom: 20px;
  padding-left: 160px;
  color: var(--title);
  z-index: 1000;
  position: relative;
  left: 460px;
  top: 0px;

}

.text-section p{
    font-size: 0.8em;
    color: var(--title);
    position: relative;

   left: 622px;
   bottom: 40px;
    text-transform: uppercase;
    z-index: 1000;
    
}



.text-section, .photo-section {
  
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content vertically */
    justify-content: center; /* Center content horizontally */
}
@keyframes slideIn {
    from {
        transform: translateX(-10%); /* Start from off the left side of the screen */
        opacity: 0; /* Start from transparent */
    }
    to {
        transform: translateX(0); /* End at natural position */
        opacity: 1; /* Fully opaque */
    }
}

.photo-section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  overflow: hidden; 
  align-items: center;
  justify-content: center;
  background-size: cover;
  object-fit: cover; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

}

@media (min-width: 767px) and (max-width: 1250px){
  .grid-container {
    padding: 10px;
    width: 289px; /* Make the image responsive to the viewport width */
    height: 289px; /* Maintain aspect ratio */
    max-width: 18.75rem; /* Maximum size of the image */
    max-height: 18.75rem;
    margin-bottom: 14.75rem;
    grid-template-columns: 1fr; /* Stack the sections on top of each other */
    overflow: visible;
  }

  .pearldesign{
  position: relative;
 top: 10px;
 left: 0px;

}

  .text-section h1{
    color: var(--title);
    position: relative;
    top: -30px;
    left: -83px;
    font-size: 2rem;
line-height: 4;
text-align: center;

  }



.text-section{
  border-radius: 50%;
  
}


typing-effect, .text-section p{
 display: none;
 overflow: hidden;
 animation: none;
}



.logo-sign{
  position: absolute;
 left: 150px;
 top: 65px;
width: 70px;
height: 70px;
 z-index: 1;
}
  
 
  .photo-section img {
    width: 289px; /* Make the image responsive to the viewport width */
    height: 289px; /* Maintain aspect ratio */
    max-width: 300px; /* Maximum size of the image */
    max-height: 300px;
    position: fixed;
    left: 0px;
    top: 200px;
    border: 2px solid var(--primaryRed) ;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: auto;
    
  }



}


/* Responsive styles */
@media (max-width: 768px) {
  
  .grid-container {
    padding: 10px;
    width: 289px; /* Make the image responsive to the viewport width */
    height: 289px; /* Maintain aspect ratio */
    max-width: 18.75rem; /* Maximum size of the image */
    max-height: 18.75rem;
    margin-bottom: 14.75rem;
    grid-template-columns: 1fr; /* Stack the sections on top of each other */
    overflow: visible;
  }

  .pearldesign{
  position: relative;
 top: 10px;
 left: 0px;

}

  .text-section h1{
    color: var(--title);
    position: relative;
    top: -30px;
    left: -83px;
    font-size: 2rem;
line-height: 4;
text-align: center;

  }



.text-section{
  border-radius: 50%;
  
}


typing-effect, .text-section p{
 display: none;
 overflow: hidden;
 animation: none;
}

  .logo-sign{
  position: absolute;
 left: 150px;
 top: 65px;
width: 70px;
height: 70px;
 z-index: 1;
}
  
 
  .photo-section img {
    width: 289px; /* Make the image responsive to the viewport width */
    height: 289px; /* Maintain aspect ratio */
    max-width: 300px; /* Maximum size of the image */
    max-height: 300px;
    position: fixed;
    left: 0px;
    top: 200px;
    border: 2px solid var(--primaryRed) ;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: auto;
    
  }

}

@media (max-width: 480px) {
    .grid-container {
        grid-template-columns: 1fr; /* Stack the sections vertically on small screens */
    }

    p.typing-effect, .text-section p{
 display: none;
 overflow: hidden;
 animation: none;
}
}

</style>