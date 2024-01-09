<template>

<div class="grid-container">
    <div class="text-section">
      <h1>I'm Lea, Web Developer.</h1>
      <p class="typing-effect">I Am building Websites That Tell Your Story.</p>
    </div>
    <div class="photo-section">
        <!-- Your photo goes here -->
        <img src="../assets/images/profile-pic.jpg" alt="My profile photo" class="profile-pic"/>
    </div>
</div>
</template>


<style scoped>
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
    max-width: 1000px; 
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
/* Responsive styles */
@media (max-width: 768px) {
  .grid-container {
    padding: 10px;
    position: relative;
    top: 100px;
    width: 289px; /* Make the image responsive to the viewport width */
    height: 289px; /* Maintain aspect ratio */
    max-width: 300px; /* Maximum size of the image */
    max-height: 300px;
    margin-bottom: 330px;
    grid-template-columns: 1fr; /* Stack the sections on top of each other */
    
  }
  .text-section h1 {
    
    color: #fff; /* Text color */
    position: relative;
    top: 10px;
    left: -100px;
    width: 160px;
    text-align: center;
    justify-content: center;
    font-size: 2.7rem; /* Adjust the heading font size for smaller screens */
    -webkit-text-stroke: 1px var(--secondary); /* For Webkit browsers like Chrome and Safari */
    text-shadow: /* Simulated border effect */
      -1px -1px 0 var(--secondary),  
       1px -1px 0 var(--secondary),
      -1px  1px 0 var(--secondary),
       1px  1px 0 var(--secondary); 
       animation: bounce 1.6s ease infinite;
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
  .text-section p{
    color: var(--primaryRed);
    position: relative;
    bottom: 270px;
    left: -167px;
    overflow:visible;
    font-size: 16px;
    font-weight: 500;
    
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
    bottom: 70px;
    border: 10px solid var(--primaryRed) ;

    
  }
}

@media (max-width: 600px) {
    .grid-container {
        grid-template-columns: 1fr; /* Stack the sections vertically on small screens */
    }
}

</style>