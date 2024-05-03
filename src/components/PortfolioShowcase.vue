<template>
    <div class="center-title" id="portfolio">
          <img src="@/assets/images/titles/7.webp" alt="PearlDesign" class="titles" >
        </div>
    
      <div class="web-packages">
    
        <ul class="cards">
          <li class="card" v-for="card in cards" :key="card.id" @click="card.flipped = !card.flipped">
            <div class="card-content" :class="{ 'flipped': card.flipped }">
              <div class="card-face card-front">
                <img :src="card.img" alt="Card Image" class="card-img">
              </div>
              <div class="card-face card-back ">
                <h3>{{ card.title }}</h3>
                <p class="front-text">{{ card.summary }}</p>
                <button class="button-style-back">
                  <a :href="card.url">view the project</a>
                </button>
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
              img: require('@/assets/images/projects/1.webp'),
              title: 'Light Supply',
              summary: 'The webpage is a professional showcase for "Light Supply," an electrical services provider. It effectively highlights the electrician’s expertise and range of services, from standard electrical installations to specialized tasks like EV charger installation. ',
              url: 'https://www.lightsupplyelectric.com/',
              flipped: false,
            },
            {
              id: 2,
              img: require('@/assets/images/projects/2.webp'),
              title: 'OhMyFood',
              summary: 'The webpage is a modern, streamlined online service aimed at food enthusiasts looking to book curated dining experiences in select restaurants. It presents three-step process for choosing a restaurant, creating a personalized menu, and enjoying the dining experience. ',
              url: 'https://leamaljk.com/ohmyfood/',
              flipped: false
            },
            {
              id: 3,
              img: require('@/assets/images/projects/3.webp'),
              title: 'Cuppa Coffee',
              summary: 'This web page is a promotional site for "Cuppa Coffee," designed with WordPress CMS, showcasing the coffee shop\'s products, values, and team. It highlights the quality of their coffee, brewing technology, and commitment to sustainability. ' ,
              url: 'https://dev-cuppa-charm-cafe.pantheonsite.io/',
              flipped: false
            },
            {
              id: 4,
              img: require('@/assets/images/projects/4.webp'),
              title: 'Booki',
              summary: 'The webpage is a sleek and inviting online platform designed for booking travel accommodations and discovering activities in Marseille. It boasts a minimalist and intuitive interface with a clear search function, well-organized content, and visually appealing imagery.',
              url: 'https://leamaljk.com/Booki/',
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
    .center-title{
      margin: 2rem auto;
      text-align: center;
      display: flex;
      justify-content: center;
    }
.button-style-back {
  padding: 15px 30px;
  border: none;
  background: var(--secondary);
  border-radius: 8px;
  color: var(--primaryRed);
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 30px;
}

button a{
      text-decoration: none;
      color:var(--primaryRed) ;
}

.card-img {
  border-radius: 50px;
  width: 100%;
}

.cards {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 6rem;
  flex-wrap: wrap;
}

.card {
  width: 670px;
  height: 670px;
  border-radius: 25px;
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
  border-radius: 25px;
}

.card-front {
  background-color: transparent;
}

.card-back {
  background-color: transparent;
  transform: rotateY(180deg);
}

.card-content.flipped {
  transform: rotateY(180deg);
}

.front-text{
      font-size: 1.2em;
      text-align: center;
    
    }
    h3{
      font-size: 2.5rem;
      color: var(--text);
      font-weight: 500;
      margin-bottom: 20px;
    }
    
    /* Style for screens smaller than 768px */
    @media (max-width: 768px) {
      .cards {
        justify-content: center;
        text-align: center;
        width: 100%;
        height: auto;
        gap: 2rem; 
      }
    
      .card {
        gap: 20;
        display: flex;
        flex-direction: column;
        width: 340px; /* Take full width minus margin */
        height: 340px;
        border-radius: 0;
      }
    
      
      .titles {
        margin-bottom: 20px;
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
    
      .button-style-back{
        margin-top: 10px;
      }
      
    
      .back-text, .front-text, h3 {
        font-size: 0.9em; 
        margin: 0;
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
    