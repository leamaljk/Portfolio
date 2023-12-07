<template>
    <div id="about-section">
      <div class="about-content">
        <h1 class="about">Hi.</h1>
        <p class="aboutMe">
    I'm a Web Developer with a passion for building engaging and efficient websites and applications. I thrive on challenges and love to use my technical skills to solve complex problems.
    <br><br> Whether it's bringing a designer's vision to life with front-end technologies or architecting robust back-end systems, I'm always up for the challenge. I'm particularly fascinated by the power of JavaScript frameworks like React and Vue.js to create dynamic user interfaces, as well as the capabilities of Node.js and Express for server-side solutions.
    <br><br> On the database side, I am well-versed in both SQL with PostgreSQL and NoSQL with MongoDB, ensuring that the data layer of the applications I work on is as performant and scalable as the rest.
    <br><br>When not coding, I'm often exploring new technologies, dabbling in UI/UX design with tools like Figma, or honing my skills in C# and Python for more structured and object-oriented approaches to problem-solving.
    <br><br>Feel free to reach out to me for collaborations, tech talks, or just to exchange knowledge on the latest web development trends!
         </p>
      </div>
      <div class="profile-pic-container">
        <img src="../assets/images/profile-photo.jpg" alt="My profile photo" class="profile-pic"/>
      </div>
      
       <button class="interests">
        <p class="p-int">Pilates</p>  
        </button>
      <button class="interests">
        <p class="p-int">Guitar</p>
    </button>
      <button class="interests">
        <p class="p-int">Sport</p>
    </button>
      <button class="interests">
        <p class="p-int">Traveling</p>
    </button>
    <button class="interests">
        <p class="p-int">Cooking</p>
    </button>
    <button class="interests">
        <p class="p-int">Reading</p>
    </button>
    <!-- MY INTERESTS -->
    <h1 class="hobbies">Couple of things I love to do.</h1>

    </div>

  </template>
  
  <style scoped>
  
  body {
    font-family: 'Tenor Sans', sans-serif;
  }
  
  #about-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 15px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
  }
  
 
  .hobbies{
    font-family: 'Tenor Sans', sans-serif;
    color: #747070;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: left;
    animation: fadeInUp 1s ease;
  }
  .about {
    font-family: 'Tenor Sans', sans-serif;
    color: var(--primaryRed);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    animation: fadeInUp 1s ease;
  }
  
  .aboutMe {
    font-family: 'Tenor Sans', sans-serif;
    color: #d7d4d4;
    font-size: 1.2rem;
    line-height: 1.8;
    text-align: left;
    justify-content: space-between;
    animation: fadeIn 1s ease 0.5s;
    animation-fill-mode: both;
  }
  .profile-pic-container {
  position: relative;
  width: 25rem; /* Size of the image plus border */
  height: 25rem;
  border-radius: 50%; /* Makes it circular */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px auto; /* Center the container and add space for the shadow */
  box-shadow: 
    0 20px 40px rgba(255, 255, 255, 0.3) ;/* Light shadow for a floating effect */
  transition: box-shadow 0.3s ease;
}

.profile-pic-container:hover {
  box-shadow: 
    0 30px 60px rgba(255, 255, 255, 0.2), /* Larger light shadow for hover effect */
    0 0 70px rgba(255, 255, 255, 0.1); /* More diffused part of the shadow grows */
}

.profile-pic {
  width: 100%; /* Slightly less to account for the border */
  height: 100%;
  border-radius: 50%; /* Circular image */
  filter: grayscale(100%); 
  object-fit: cover; /* Adjusts the size of the image within its container */
  z-index: 1; /* Above the pseudo-element */
}


  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .interests{
    padding: 0.5rem 1rem;
    border: none;
    background-color: #d0d0d3; /* Your primary color */
    color: white;
    border-radius: 2rem; /* Rounded borders */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
    text-align: center;
    
    max-width: 2.4rem;
    max-height: 2rem;
    
  }
  .interests:hover{
    transform: translateX(-5px);
    transition: all .3s ease;
  }
  .p-int{
    position: relative;
    left: 2rem;
    bottom: 1em;
    color: #d7d4d4;
    
    font-family: 'Tenor Sans', sans-serif;


  }
  @media (max-width: 768px) {
    #about-section {
      grid-template-columns: 1fr;
      margin: 10px;
    }
    .profile-pic-container {
    width: 15rem; /* Smaller size for mobile devices */
    height: 15rem;
    margin: 20px auto; /* Less margin on smaller screens */
    box-shadow: 0 10px 20px rgba(255, 255, 255, 0.3); /* Adjusted shadow for smaller size */
  }
  }
  </style>
  