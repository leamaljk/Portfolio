<template>
<div class="center-title" id="web-packages">
      <img src="@/assets/images/titles/9.webp" alt="PearlDesign" class="titles" >
    </div>

  <div class="web-packages">

    <ul class="cards">
      <li class="card" v-for="card in cards" :key="card.id" @click="card.flipped = !card.flipped">
        <div class="card-content" :class="{ 'flipped': card.flipped }">
          <div class="card-face card-front">
            <img :src="card.img" alt="Card Image" class="card-img">
            <h3>{{ card.title }}</h3>
            <p class="front-text">{{ card.summary }}</p>
            <button class="button-style">Click To See More</button>
          </div>
          <div class="card-face card-back">
            <p class="back-text">{{ card.detail }}</p>
            <button class="button-style-back">get a free quote</button>

          </div>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>

export default {
 
  name: 'FlippingCards',
  data() {
    return {
      cards: [
        {
          id: 1,
          img: require('@/assets/images/side4.webp'),
          title: 'CMS Training & Documentation',
          summary: 'Learn to manage your site with our comprehensive training.',
          detail: 'Receive comprehensive training for managing your website along with detailed documentation, ensuring you can manage your online presence (CMS or Content Managment System) effectively and efficiently. My packages are designed to give you control and understanding of your web presence.',
          flipped: false,
        },
        {
          id: 2,
          img: require('@/assets/images/side2.webp'),
          title: 'Standard Web Package',
          summary: 'Essential features for your online presence.',
          detail: 'Up to 4 custom pages (Home, About, Services, Contact, etc). Responsive design across all devices, Basic SEO for fundamental online visibility, Domain registration, Complimentary hosting service, Email address setup, Robust website security with HTTPS certificate, 2 month of Website Maintenance Package at no extra cost, *Optional Logo Design and Business Card Printing available',
          flipped: false
        },
        {
          id: 3,
          img: require('@/assets/images/side1.webp'),
          title: 'Premium Web Package',
          summary: 'Advanced solutions for growing businesses.',
          detail: 'Up to 10 or more custom pages, Optimized responsive layout on multi-device, SEO and performance optimization, Logo and Business Card Design included, 250 business card prints provided free, Domain registration, Complimentary hosting service, Email address setup, Guaranteed website security with HTTPS certificate, 2-month trial of Website Maintenance Package for free' ,
          flipped: false
        },
        {
          id: 4,
          img: require('@/assets/images/side3.webp'),
          title: 'Website Maintenance',
          summary: 'Regular updates and security for your website.',
          detail: 'Regular website content updates, Detailed security checks, Ongoing performance optimization, Content updates as requested, Responsive technical support',
          flipped: false
        }
        // Add the rest of your cards here...
      ],
    };
  },
};
</script>

<style scoped>
.web-packages {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titles {
  display: flex;
  justify-content: center; /* This will center the image horizontally */
  align-items: center; /* This will center the image vertically */
  width: 400px; /* You need a specific height to align items in the center vertically */
}

img .titles{
  justify-content: center; /* This will center the image horizontally */
  align-items: center;
}

.button-style{
  padding: 10px 20px;
  border: none;
  font-size: 18x;
  background: rgba(255, 255, 255, 0.447);
  border-radius: 5px;
  color: var(--white);
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
}

.button-style-back{
  padding: 10px 20px;
  border: none;
  font-size: 18x;
  background: var(--secondary);
  border-radius: 5px;
  color: var(--primaryRed);
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
}
.card-img {
  max-width: 150px; /* Ensure the image does not exceed the card's width */
  height: 150px; /* Maintain aspect ratio */
  padding-bottom: 10px; /* Space below the image */
}
.center-title{
  margin: 2rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
}

.cards {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem; /* Space between cards */
  flex-wrap: wrap;
}

.card {
  width: 320px; /* Adjust the width as needed */
  height: 500px; /* Adjust the height as needed */
  perspective: 1200px;
  border: 1px solid #ccc; /* Border for card */
  border-radius: 25px; /* Optional for rounded corners */
}

.card-content {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 25px; /* Optional for rounded corners */
}

.card-front {
  background-color: var(--secondary);
}

.card-back {
  background-color: var(--primaryRed);
  transform: rotateY(180deg);


}
.back-text {
  color: var(--text);
text-align: center;
font-size: 18px;
}
.card-face, .front-text, h3{
  color: var(--primaryRed);
text-align: center;
}

.front-text{
  font-size: 1em;

}
h3{
  font-size: 1.6em;
}

.flipped:hover, .card-content:hover {
  transform: rotateY(180deg);
}


/* Style for screens smaller than 768px */
@media (max-width: 768px) {
  .cards {
    justify-content: center;
    width: 90%;
    height: auto;
    gap: 1rem; 
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 320px; /* Take full width minus margin */
    height: 480px;
    margin: 10px; /* Add some margin around cards */
    
  }

  
  .titles {
  display: flex;
  text-align: center;
  justify-content: center; /* This will center the image horizontally */
  align-items: center; /* This will center the image vertically */
  width: 300px; /* You need a specific height to align items in the center vertically */
}
  .button-style, .button-style-back {
    font-size: 0.8em; /* Smaller font size for smaller screens */
    padding: 10px 20px; /* Reduce padding for smaller screens */
  }

  .card-img {
    height: 100px; /* Smaller height for the image on smaller screens */
    width: auto; /* Adjust width automatically */
    margin-bottom: 10px; /* Add some space below the image */
  }

  .back-text, .front-text, h3 {
    font-size: 0.9em; /* Smaller font size */
  }

  h3{
    font-size: 1.4em; /* Smaller font size */

  }
}

@media (max-width: 480px) {
  .back-text {
    font-size: 0.9em; /* Smaller font size */
  }
}

</style>
