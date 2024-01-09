<template>
 
    <div id="about-section">

      <div class="about-content">
        <h1 class="about">Hi.</h1>
        <p class="aboutMe">
    I'm a Web Developer with a passion for building engaging and efficient websites and applications. I thrive on challenges and love to use my technical skills to solve complex problems.
    <br><br> Whether it's bringing a designer's vision to life with front-end technologies or architecting robust back-end systems, I'm always up for the challenge. I'm particularly fascinated by the power of <em>JavaScript </em> frameworks like <em>React</em> and <em>Vue.js</em> to create dynamic user interfaces, as well as the capabilities of <em>Node.js</em> and <em>Express</em> for server-side solutions.
    <br><br> On the database side, I am well-versed in both <em>SQL</em> with <em>PostgreSQL</em> and <em>NoSQL</em> with <em>MongoDB</em>, ensuring that the data layer of the applications I work on is as performant and scalable as the rest.
    <br><br>When not coding, I'm often exploring new technologies, dabbling in UI/UX design or honing my skills for more structured and object-oriented approaches to problem-solving.
    <br><br>Feel free to reach out to me for collaborations, tech talks, or just to exchange knowledge on the latest web development trends!
         </p>
      </div>
      
      
      <div class="interest-container">
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
    
    </div>
    <!-- MY INTERESTS -->
    <h1 class="hobbies">Couple of things I love to do.</h1>
  </div>

  </template>
  <script>

</script>
  
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
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
  }
  
 
  .hobbies{
    font-family: 'Tenor Sans', sans-serif;
    color: var(--primaryRed);
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
    color: var(--secondary);
    padding: 10px 15px;
    font-size: 1.2rem;
    line-height: 1.8;
    text-align: justify;
    justify-content: space-between;
    animation: fadeIn 1s ease 0.5s;
    animation-fill-mode: both;
  }
  
  .profile-pic-container {
  position: relative;
  width: 30rem; /* Size of the image plus border */
  height: 30rem;
  border-radius: 50%; /* Makes it circular */
  overflow: hidden; /* Ensures the image doesn't spill outside the border */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto; /* Center the container */
  transition: box-shadow 0.3s ease;
  background-size: cover; /* This will cover the entire area of the container */
}

/* If you're using an img tag instead of a background image */
.profile-pic {
  position: relative;
  top: 8%;  /* Move up by 10% of the container height */
  width: 100%; /* Full width of the parent container */
  height: auto; /* Maintain the aspect ratio */
  object-fit: cover; /* This property will cover the area of the container without stretching the image */
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

  .interest-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    position: relative;
    right: 90px;
  }
  .interests{
    padding: 0.5rem 1rem;
    border: 3px solid var(--primaryRed);
    background-color: var(--primaryRed); /* Your primary color */
    color: white;
    border-radius: 2rem; /* Rounded borders */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1.2rem;
    text-align: center;
    max-width: 2.4rem;
    max-height: 2rem;
    
  }
  .interests:hover{
    transform: translateX(-10px);
    transition: all .3s ease;
  }
  .p-int{
    position: relative;
    left: 2rem;
    bottom: 1.4em;
    color: var(--secondary);    
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
  }

  .interests{
  font-size: 1.2em;
  gap: 10px;

  }
  .aboutMe{
    padding: 0;
  }
  }

  @media (max-width: 480px) {
    #about-section {
      grid-template-columns: 1fr;
      margin: 10px;
      margin-top: 100px;
    }
  }
  </style>
  