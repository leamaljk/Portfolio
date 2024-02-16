<template>
  <div class="grid-container">
    <div class="text-section">
      
      <h1>Pearl Design</h1>
      <p class="typing-effect">I Am building Websites That Tell Your Story.</p>
    </div>

    <div class="photo-section">
      <img src="../assets/images/profile-pic.jpg" alt="My profile photo" class="profile-pic"/>

    </div>
    <div >
        <img class="logo-sign" src="../assets/images/logo/LogoSign (2).png" alt="logo"  >
       </div>
  </div>
</template>
3


<style scoped>
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
    margin: 0;
    height: 100%; /* Make sure the body takes full viewport height */
    display: flex;
    align-items: center; /* Center content vertically */
    justify-content: center; /* Center content horizontally */
}

.logo-sign{
  position: absolute;
 bottom: 190px;
 width: 180px;
 height: 180px;
 z-index: 1;
}
.logo-sign img{
overflow: hidden;

}

.text-section h1 {
  font-size: 2.5em; /* Large font size */
  margin-bottom: 20px;
  padding-left: 160px;
  color: var(--title);
  z-index: 1000;
  position: relative;
   
    top: 80px;

}

.text-section p{
    font-size: 0.8em;
    color: var(--title);
    position: relative;
    left: 110px;
    top: 70px;
    text-transform: uppercase;
    z-index: 1000;
    
}

/* ljubicasti konteiner */
.grid-container {
  
    background-color: var(--primaryRed);
    display: grid;
    margin:  55px auto;
    border-radius: 200px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

    animation: slideIn 1s ease-out forwards; 
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    gap: 20px; /* Space between columns */
    align-items: center; /* Vertically center */
    justify-items: center; /* Horizontally center */
    width: 80%; 
    height: 20rem;
    max-width: 1020px; 
    overflow: visible; /* Show the parts of the image that are outside the container */
    
}


.typing-effect {
  border-right: .15em solid #fff; /* The typwriter cursor */
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 6s steps(40, end) 1s infinite normal both,
             blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: black; }
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
.photo-section{
    position: relative;
    left: 100px; 
}
.photo-section img {
  position: relative;
  top: 8%;
  left: -10px;
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

@media (min-width: 767px) and (max-width: 1200px){



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
 left: 110px;
 top: 70px;
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