<template>

<div class="grid-container">
    <div class="text-section">
      <h1>I'm Lea - Web Developer.</h1>
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
    font-size: 1.2em;
    color: white;
    position: relative;
    left: 110px;
}
.grid-container {
    background-color: var(--primaryRed);
    display: grid;
    margin:  55px auto;
    border-top-right-radius: 200px;
    border-bottom-right-radius: 200px;
    border-top-left-radius: 200px;
    border-bottom-left-radius: 200px;
    animation: slideIn 1s ease-out forwards; 
    font-family: 'TenorSanas', sans-serif;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    gap: 20px; /* Space between columns */
    align-items: center; /* Vertically center */
    justify-items: center; /* Horizontally center */
    width: 80%; 
    height: 25rem;
    max-width: 1000px; 
}


.typing-effect {
  border-right: .15em solid #fff; /* The typwriter cursor */
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 3.5s steps(40, end) 1s infinite normal both,
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
    left: 70px; 
}
.photo-section img {
  position: relative;
  top: 8%;
  width: 25rem;
  height: 25rem;
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
    position: relative;
    top: 150px;
    width: 289px; /* Make the image responsive to the viewport width */
    height: 289px;
    margin-bottom: 300px;
    grid-template-columns: 1fr; /* Stack the sections on top of each other */
    
  }

  .text-section h1 {
    color: var(--secondary);
    position: relative;
    bottom: 120px;
    left: -70px;
    width: 100%;
    font-size: 1.5rem; /* Adjust the heading font size for smaller screens */
  }
  .text-section p{
    color: var(--secondary);
    position: relative;
    bottom: 130px;
    left: -152px;
    overflow:visible;
    font-size: 1rem; /* Adjust the typing text font size for smaller screens */


    
  }

  .typing-effect {
    animation: none;
    font-size: 1rem; /* Adjust the typing text font size for smaller screens */
  }

  .photo-section img {
    width: 289px; /* Make the image responsive to the viewport width */
    height: 289px; /* Maintain aspect ratio */
    max-width: 300px; /* Maximum size of the image */
    max-height: 300px;
    position: relative;
    right: 69px;
    top: 0px;
  }
}

@media (max-width: 600px) {
    .grid-container {
        grid-template-columns: 1fr; /* Stack the sections vertically on small screens */
    }
}

</style>