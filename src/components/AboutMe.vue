<template>
 
    <div id="about-section">

      <div class="about-content">
        <h1 class="about">About Me</h1>

        <section class="layout">
          <div class="grow1 quote">
  <img src="../assets/images/left.png" alt="Quotation" class="quote-img">
  <p class="stevejobs">
    "Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary." - Steve Jobs
  </p>
</div>

  <div class="grow2">
    <p class="aboutMeText">Since starting my role as a Sortation Associate at Amazon in December 2019, I've honed my ability to thrive in fast-paced settings and fine-tuned my attention to detail and efficiency—skills I believe are transferable to front-end design. My educational journey at OpenClassrooms, culminating in an Associate's degree in Web Development, has equipped me with a deep understanding of web design principles, from crafting responsive HTML/CSS pages to integrating and optimizing multimedia content for the web.

I've dedicated time to expanding my skill set beyond the basics, mastering tools like Figma for UI/UX design, and delving into technical SEO, web security, and content accessibility to ensure the websites I develop are not only aesthetically pleasing but also performant, secure, and accessible to all users. My projects, a testament to my growing expertise in front-end design, reflect my ability to translate conceptual designs into tangible, interactive web experiences. With a passion for continuous learning and a knack for design, I'm eager to bring my creativity and technical skills to the forefront of the front-end design field.</p>
      
  </div>
  <div class="grow3">
  <ul class="hobbies-list">
    <li><i class="fas fa-running"></i> Pilates</li>
    <li><i class="fas fa-guitar"></i> Guitar</li>
    <li><i class="fas fa-dumbbell"></i> Gym</li>
    <li><i class="fas fa-plane"></i> Traveling</li>
    <li><i class="fas fa-utensils"></i> Cooking</li>
    <li><i class="fas fa-book"></i> Reading</li>
  </ul>
  <h1 class="about">Hobbies</h1>

</div>

</section>
        
    </div>
</div>
      
      

  
  
  </template>
  <script>

</script>
  
  <style scoped>

  
  #about-section {
   
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    margin-left: 20px;
    margin-right: 20px;
    border-radius: 15px;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Noto Serif TC', serif;
    animation: fadeIn 1s ease 0.5s;
    animation-fill-mode: both;
  }
  .layout {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: flex-start; /* Align items to the top */
}

.grow1 {
  flex-grow: 1;
  display: flex; /* Use flexbox for internal alignment */
  align-items: flex-start; /* Align items to the top */
  justify-content: flex-start; /* Align items to the left */

  padding: 20px;
}

.quote-img {
  align-self: start; /* Align the image to the top */
  margin-right: 20px; /* Right margin for space between the image and the text */
  width: 50px; /* Set the image width */
  height: auto; /* Maintain aspect ratio */
}

.stevejobs {
  /* Additional styling for the quote */
  font-style: italic;
  font-size: 16px;
}

.grow2 {
  flex-grow: 2; /* Adjust the growth factor as needed for layout */
  display: flex;
  align-items: flex-start; /* Align the content to the top */
  border-top: 1px solid var(--primaryRed); /* For visual debugging */
  border-bottom: 1px solid var(--primaryRed); /* For visual debugging */
  padding: 20px;
  
  
}

.aboutMeText {
  /* Additional styling for the text */
  font-family: 'Noto Serif TC', serif;
  color: var(--secondary);
}

.grow3 {
  /* Additional styling based on your layout */
  padding: 20px;
}

.hobbies-title {
  font-family: 'Noto Serif TC', serif;
  color: #333; /* Replace with your color variable or preferred color */
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hobbies-list {
  list-style: none; /* Removes default list styling */
  padding: 0;
}

.hobbies-list li {
  font-family: 'Noto Serif TC', serif;
  color: black; /* Replace with your color variable or preferred color */
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  align-items: center;
  display: flex;
}

.hobbies-list i {
  margin-right: 10px;
  color: var(--primaryColor); /* Replace with your primary color variable */
}

/* Include this only if you're using FontAwesome icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

/* Responsive design adjustments */
@media (max-width: 768px) {
 

  .hobbies-title {
    font-size: 1.2rem;
  }

  .hobbies-list li {
    font-size: 1rem;
  }
}



 
  .hobbies{
    font-family: 'Noto Serif TC', serif;
    color: var(--primaryRed);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: left;
    animation: fadeInUp 1s ease;
  }
  .about {
    font-weight: 800;
    color: var(--primaryRed);
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    animation: fadeInUp 2s ease;
  }
  
  .aboutMe {
    font-family: 'Noto Serif TC', serif;
    color: var(--secondary);
    padding: 10px 15px;
    font-size: 1rem;
    line-height: 1.8;
    text-align: justify;
    justify-content: space-between;
   
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
    font-family: 'Noto Serif TC', serif;

    display: flex;
    flex-grow: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: relative;
    
  }
  .interests{
    padding: 0.5rem 1rem;
    border: 2px solid var(--secondary);
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
    background-color: white;
  }
  .p-int{
    font-family: 'Noto Serif TC', serif;
    font-weight: 600;
    position: relative;
    left: 2rem;
    bottom: 1.4em;
    color: var(--secondary);    


  }/* Responsive design adjustments */
@media (max-width: 1024px) {
  .layout {
    flex-direction: column;
  }

  .quote-section, .about-me-text, .hobbies-section {
    flex: none;
  }
}

@media (max-width: 768px) {
  .hobbies-title {
    font-size: 1.2rem;
  }

  .quote-text, .about-me-text p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  #about-section {
    margin: 1rem;
    padding: 1rem;
  }

  .about-title {
    font-size: 1.5rem;
  }

  .hobbies-title {
    font-size: 1rem;
  }

  .quote-text, .about-me-text p {
    font-size: 12px;
  }
}
</style>

  