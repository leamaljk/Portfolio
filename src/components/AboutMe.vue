<template>
  <div id="about-section">
    <div class="profile-title">
      <h1 class="about">About Me</h1>
      <img src="../assets/images/profile-pic.webp" alt="My profile photo" class="profile-pic" />
      <img src="../assets/images/family.webp" alt="My profile photo" class="profile-pic" />

    </div>

    <section class="layout">
     

      <div class="grow2">
        <p class="aboutMeText">
          <!-- Your initial content here... -->
          Hello dear ones, thank you for going the distance to meet me.
  My name is Lea, and I work under the name Pearl Design. 
  Isn't that such a wonderful name, Pearl Design? 🙂
  You're probably wondering what that has to do with building website designs. Well, what does Apple have to do with electronics? Now you get me. 😉
  <br><br>
  Let me tell you a little bit more about myself...
  <br><br>
  I am also a mom of an adorable little girl who fills my days with joy, and the wife to a beloved husband who is my biggest support in life. 
  Each morning as I embrace my little girl, the world pauses for a moment. Her laughter is my reminder of what truly matters.
  <br><br>
  Before deciding to go freelancing...
  <br><br>
  Before my decision to freelance, I was always working as an employee "somewhere", and this decision initially worried me to say the least because you never know the outcome. 
  You feel secure in a company; they take care of everything concerning you. No worries at all. 
  <!-- Put here the content that is visible before clicking "Read more" -->
        </p>

      </div>

    </section>
    <button @click="toggleShowMore" class="read-more-button">
          {{ showMore ? 'Read Less' : 'Read More' }}
        </button>
    <div v-if="showMore" class="additional-content">
          <p class="aboutMeText second-part">
<br><br>
  Becoming my own boss was a transformative journey, and I learned a new perspective on life. 🙂 With the right mindset and organizational skills, work and family can be well balanced. Every mom/parent will agree with me. 
  "Work could be woven into the fabric of family life, rather than being a separate garment to be worn only during 'office hours'."
  <br><br>
  Starting as a Sortation Associate at Amazon in December 2019 didn't seem unusual at that point, but a year later, when I became a permanent employee, things started to unravel for me. 
  Years before, I finished high school for a Web designer but didn't pursue it. Life took me to other places. I always wanted to pursue this kind of career, but it was never in my path. 
  Until that one year working for Amazon... They were offering various kinds of schools for dentists, nurses, IT sector, etc., including WEB DEVELOPER. Many different kinds of public and online schools worldwide. 
  That moment, I was amazed and was sure that this time I wouldn't miss the opportunity. 
  It took me 2 years to complete it. Some of the projects you may see below. Fantastic. Now I'm back on track.
  <br><br>
  My biggest passion is to help people like you and me to grow, because making this decision was hard enough, I want to make it easy for you. 
  I want to tell your story online. I'm not Steve Jobs, but I'm inspired by his philosophy. Because, why not? 🤷 I also have projects and skills that speak for me. I'm absolutely excited to develop my skills and to take on new challenges.
  <br><br>
  Learning is part of life.. 🎓
</p>

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
      <div class="grow1 quote">
        <p class="stevejobs">
    "Your time is limited, don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary." - Steve Jobs
  </p>
      </div>

        </div>
  </div>
  
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      showMore: false, // This data property will control the visibility of the additional content
    };
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore; // This method toggles the showMore property
    },
  },
};
</script>
  
  <style scoped>

  
  #about-section {
    border-top: 2px solid #fef9ae; /* For visual debugging */
  border-bottom: 3px solid #fef9ae;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    
    border-radius: 15px;
    padding:2rem 1rem;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    animation: fadeIn 1s ease 0.5s;
    animation-fill-mode: both;
  }

  #about-section:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  }

  .read-more-button {
  background-color: var(--secondary); /* or use your secondary color */
  color: white;
  border: none;
  padding: 10px 20px;
 
  cursor: pointer;
  margin: 40px auto; /* Spacing above the button */
  transition: background-color 0.3s ease;
  display: block; /* Make the button a block element to fill the width */
  width: max-content; /* Set the width of button to match its content */
  font-weight: 400;
}

.read-more-button:hover {
  background: linear-gradient(
        135deg,
        #e6c146 0%, /* Lighter shade of gold */
        #d3af37 25%, /* Your specified gold color */
        #b8972c 50%, /* Darker shade of gold */
        #d3af37 75%, /* Your specified gold color again */
        #e6c146 100% /* Lighter shade of gold to finish */
    );}

.additional-content {
  display: block; /* This ensures that the content flows down from the button */
}

.second-part{
  border-top: 1px solid gold; /* For visual debugging */
  border-bottom: 1px solid gold;
  
    padding: 10px 20px ;
    width: 100%;
    text-align: justify;
    align-content: center;
    justify-content: center;
    margin: auto;
  } 
  .profile-title{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

  }
  .profile-title img{
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    object-fit: cover;
    margin: 10px;
    margin-left: 20px;
  }
  .profile-title img:hover, .hobbies-list li:hover{
    transform: scale(1.2);
  }
  
  .about {
    font-family: "Libre Caslon Text", serif;
    font-weight: 800;
    font-size: 2.5em;
    color: #4a4949;
    margin-bottom: 1rem;
    letter-spacing: 1.5px;
    animation: fadeInUp 2s ease;
    text-align: center;
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
  width: 100%;
  padding: 20px;
}



.stevejobs {
  /* Additional styling for the quote */
  font-size: 20px;
  font-family: "Raleway", sans-serif;
  font-style: italic;
  line-height: 2.4;
  background: linear-gradient(
        135deg,
        #e6c146a2 0%, /* Lighter shade of gold */
        #d3af37af 25%, /* Your specified gold color */
        #b8972cc1 50%, /* Darker shade of gold */
        #d3af37af 75%, /* Your specified gold color again */
        #e6c146b0 100% /* Lighter shade of gold to finish */
    );

  padding: 17px;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
  color: #000;
}

.grow2 {
  flex-grow: 2; /* Adjust the growth factor as needed for layout */
  display: flex;
  align-items: flex-start; /* Align the content to the top */
  width: 100%;
  padding: 20px;
  
  
}

.aboutMeText {
  
  /* Additional styling for the text */
  text-align: justify;
    align-content: center;
    justify-content: center;
    margin: auto;
  color: #333;}


.grow3 {
  /* Additional styling based on your layout */
  padding: 20px;
  width: 30%;
  font-family: "Libre Caslon Text", serif;
}



.hobbies-list {
  display: flex;
  flex-direction: row;
  list-style: none; /* Removes default list styling */
  padding: 20px;
  margin-right:20px ;
  
}

.hobbies-list li {
  color: #333; /* Replace with your color variable or preferred color */
  font-size: 1.2rem;
  padding: 20px;
  margin-right:20px ;
  margin-bottom: 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
}

.hobbies-list i {
  padding: 20px;
  margin-right:20px ;
  margin-right: 10px;
  color: #d3af37; /* Replace with your primary color variable */
}

/* Include this only if you're using FontAwesome icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');


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

@media (max-width: 1024px) {
  #about-section {
    margin-top: 60px;
   margin: auto;
   padding: auto;
    
  }
  .layout {
    flex-direction: column;
  }


  .grow1, .grow2, .grow3{
    width: 100%;
  }
}

@media (max-width: 768px) {
  .grow1, .grow2, .grow3{
    width: 100%;
  }
  .second-part{
width: 100%;
  }
  .profile-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;

  }
  .profile-title img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
   
    margin-left: 0px;
  }

  #about-section {
   margin: auto;
   margin-top: 60px;
   
  }

  .stevejobs{
    font-size: 14px;
  }
  .grow1, .quote{
    display: flex;
    flex-direction: column;
    
  }
  .hobbies-list {
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */
    margin: 0; /* Remove any margin for the list */
    padding: 0; /* Remove any padding for the list */
  }

  .hobbies-list li {
    /* Adjust styles for each list item as needed */
    font-size: 1rem; /* Adjust the font size if necessary */
    padding: 0.2rem; /* Add padding to give some space around the text */
  }



}

@media (max-width: 480px) {
  #about-section {
   margin: auto;
   margin-top: 60px;
  }
  .hobbies-list {
  list-style: none; /* Removes default list styling */
  padding: 0;
  
}

.hobbies-list li {
  color: #333; /* Replace with your color variable or preferred color */
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.hobbies-list i {
  margin-right: 10px;
  color: #d3af37; /* Replace with your primary color variable */
}
}
</style>

  