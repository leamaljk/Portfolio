<template>
  <div class="grid-container">
    <div class="text-section">
      <h1>I'm Lea, Web Developer.</h1>
      <p class="typing-effect">I Am building Websites That Tell Your Story.</p>
    </div>

    <div class="photo-section">
      <img src="../assets/images/profile-pic.jpg" alt="My profile photo" class="profile-pic"/>
      <!-- Position SVG around the photo -->
      <svg class="text-section round" width="20rem" height="20rem" viewBox="0 0 200 200">
        <!-- Create a circular path for the text to follow -->
        <path id="circlePath" d="M100,100 m-75,0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0" fill="none" />
        <!-- Apply the text to the path -->
        <text fill="white">
          <textPath xlink:href="#circlePath" startOffset="34%" text-anchor="middle" style="font-size: 16px;">
            I Am building Websites That Tell Your Story.
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>



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

.text-section h1 {
  font-size: 2.5em; /* Large font size */
  margin-bottom: 20px;
  padding-left: 160px;
  color: white;
}

.text-section p{
    font-size: 1em;
    color: white;
    position: relative;
    left: 110px;
    
}

/* ljubicasti konteiner */
.grid-container {
    background-color: var(--primaryRed);
    display: grid;
    margin:  55px auto;
    border-radius: 200px;
    animation: slideIn 1s ease-out forwards; 
    font-family: 'TenorSanas', sans-serif;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    gap: 20px; /* Space between columns */
    align-items: center; /* Vertically center */
    justify-items: center; /* Horizontally center */
    width: 80%; 
    height: 20rem;
    max-width: 1150px; 
    overflow: visible; /* Show the parts of the image that are outside the container */

}


.typing-effect {
  border-right: .15em solid #fff; /* The typwriter cursor */
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 4s steps(40, end) 1s infinite normal both,
             blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0; }
  to { width: 80%; }
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
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  overflow: hidden; 
  align-items: center;
  justify-content: center;
  background-size: cover;
  object-fit: cover; 

}

@media (min-width: 768px) {
  .round {
    display: none;
  }
}
/* Responsive styles */
@media (max-width: 768px) {
  .grid-container {
    padding: 10px;
    position: relative;
    top: 3rem;
    width: 289px; /* Make the image responsive to the viewport width */
    height: 289px; /* Maintain aspect ratio */
    max-width: 18.75rem; /* Maximum size of the image */
    max-height: 18.75rem;
    margin-bottom: 18.75rem;
    grid-template-columns: 1fr; /* Stack the sections on top of each other */
    
  }
  .text-section h1 {
    color: #fff; /* Text color */
    position: relative;
    top: 35px;
    left: -100px;
    width: 300px;
    text-align: center;
    justify-content: center;
    font-size: 2.2rem; /* Adjust the heading font size for smaller screens */
    animation: bounce 1.6s ease-in-out;
  }

  @keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.text-section{
  border-radius: 50%;
}
.text-section p{
  display: none;
}
  .text-section p, svg{
    position: relative;
    bottom: 340px;
    left: -15px;
    overflow:visible;
    font-size: 23px;
    font-weight: 400;
    font-family: 'Great Vibes', cursive;  
  }
  .typing-effect {
    animation: none;
  }
  .photo-section img {
    width: 289px; /* Make the image responsive to the viewport width */
    height: 289px; /* Maintain aspect ratio */
    max-width: 300px; /* Maximum size of the image */
    max-height: 300px;
    position: relative;
    left: -116px;
    bottom: 0px;
    border: 10px solid var(--primaryRed) ;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: auto;
    
  }


.round {
  width: 20rem;
  position: absolute;
  top: 64%; /* Center vertically */
  left: 52%; /* Center horizontally */
  transform: translate(-86%, -60%); /* Adjust the SVG to be centered over the image */
  height: auto;
}

}

@media (max-width: 600px) {
    .grid-container {
        grid-template-columns: 1fr; /* Stack the sections vertically on small screens */
    }
}

</style>