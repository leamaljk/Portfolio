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
    <p class="aboutMeText">Since starting my role as a Sortation Associate at Amazon in December 2019, I've honed my ability to thrive in fast-paced settings and fine-tuned my attention to detail and efficiency—skills I believe are transferable to front-end design. My educational journey at OpenClassrooms, culminating in an Associate's degree in Web Development, has equipped me with a deep understanding of web design principles, from crafting responsive HTML/CSS pages to integrating and optimizing multimedia content for the web. <br><br>

I've dedicated time to expanding my skill set beyond the basics, mastering tools like Figma for UI/UX design, and delving into technical SEO, web security, and content accessibility to ensure the websites I develop are not only aesthetically pleasing but also performant, secure, and accessible to all users.

My projects, a testament to my growing expertise in front-end design, reflect my ability to translate conceptual designs into tangible, interactive web experiences. With a passion for continuous learning and a knack for design, I'm eager to bring my creativity and technical skills to the forefront of the front-end design field.</p>
      
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
    
    border-radius: 15px;
    padding:2rem 1rem;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
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
  font-style:italic;
  font-size: 20px;
  line-height: 2.2;

  background: linear-gradient(
        135deg,
        #e6c146c9 0%, /* Lighter shade of gold */
        #d3af37c6 25%, /* Your specified gold color */
        #b8972cc4 50%, /* Darker shade of gold */
        #d3af37c3 75%, /* Your specified gold color again */
        #e6c146c5 100% /* Lighter shade of gold to finish */
    );
  /* background: linear-gradient(
        135deg,
        rgba(255, 215, 0, 0.8) 0%,
        rgba(227, 197, 25, 0.513) 25%,
        rgba(255, 215, 0, 0.8) 50%,
        rgba(227, 197, 25, 0.513) 75%,
        rgba(255, 215, 0, 0.8) 100%
    ); */
  padding: 17px;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
  color: #000;
}

/*    
GOLDEN GRADIENT
background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%); */
.grow2 {
  flex-grow: 2; /* Adjust the growth factor as needed for layout */
  display: flex;
  align-items: flex-start; /* Align the content to the top */
  border-top: 1px solid gold; /* For visual debugging */
  border-bottom: 1px solid gold; /* For visual debugging */
  padding: 20px;
  
  
}

.aboutMeText {
  /* Additional styling for the text */

  color: #333;}

.grow3 {
  /* Additional styling based on your layout */
  padding: 20px;
}

.hobbies-title {
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
  color: #333; /* Replace with your color variable or preferred color */
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  align-items: center;
  display: flex;
}

.hobbies-list i {
  margin-right: 10px;
  color: #d3af37; /* Replace with your primary color variable */
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
    font-weight: 600;
    position: relative;
    left: 2rem;
    bottom: 1.4em;
    color: var(--secondary);    


  }/* Responsive design adjustments */
@media (max-width: 1024px) {
  #about-section {
   margin: auto;
   padding: auto;
    
  }
  .layout {
    flex-direction: column;
  }

  .quote-section, .about-me-text, .hobbies-section {
    flex: none;
  }
}

@media (max-width: 768px) {
  #about-section {
   margin: auto;
   
  }

  .stevejobs{
    font-size: 14px;
  }
  .grow1, .quote{
    display: flex;
    flex-direction: column;
    
  }

  .quote-img{
    height: 60px;
    width: 60px;
  }
  .hobbies-title {
    font-size: 1.2rem;
  }

  .quote-text, .about-me-text p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  #about-section {
   margin: auto;
    
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

  