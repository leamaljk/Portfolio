<template>
  <div id="cards-container">
    <!-- Each card will have two main parts: the image showcase and the description -->
    <div class="card">
      <div class="card-image">
        <img src="../assets/images/projects/mac (2).png" alt="Booki project" />
      </div>
      <div class="card-description">
        <h2>Booki</h2>
        <p>The webpage is a sleek and inviting online platform designed for booking travel accommodations and discovering activities in Marseille. It boasts a minimalist and intuitive interface with a clear search function, well-organized content, and visually appealing imagery. </p>
        <a href="https://leamaljk.com/Booki/" target="_blank"> <button >VIEW THE PROJECT</button></a>
      </div>
    </div>
    <!-- ... Repeat for other cards ... -->
    <div class="card card-reverse">
      <div class="card-description">
        <h2>Oh My Food</h2>
        <p>The webpage is a modern, streamlined online service aimed at food enthusiasts looking to book curated dining experiences in select restaurants. It presents a straightforward, three-step process for choosing a restaurant, creating a personalized menu, and enjoying the dining experience. </p>
        <a href="https://leamaljk.com/ohmyfood/" target="_blank"><button >VIEW THE PROJECT</button></a>
      </div>
      <div class="card-image">
        <img src="../assets/images/projects/mac (3).png" alt="OhMyFood project" />
      </div>
    </div>

    <!-- ... Repeat for other cards ... -->
     <!-- Each card will have two main parts: the image showcase and the description -->
     <div class="card">
      <div class="card-image">
        <img src="../assets/images/projects/mac (4).png" alt="Booki project" />
      </div>
      <div class="card-description">
        <h2>Go Mike Designs</h2>
        <p>The webpage is a portfolio for "GoMike Designs," showcasing the services of Mike, a web designer who specializes in creating websites and graphics for Atlanta-based companies. It emphasizes his commitment to enhancing online presence and recognition for local businesses through bespoke website design, strategic online positioning, and logo creation.</p>
        <a href="https://leamaljk.com/goMikeDesigns/" target="_blank" > <button>VIEW THE PROJECT</button></a>
      </div>
    </div>
    <!-- ... Repeat for other cards ... -->
    <div class="card card-reverse">
      <div class="card-description">
        <h2>Light Supply</h2>
        <p>The webpage is a professional showcase for "Light Supply," an electrical services provider. It effectively highlights the electrician’s expertise and range of services, from standard electrical installations to specialized tasks like EV charger installation. The design features a clean, organized layout that outlines the electrician's qualifications, work process, and service offerings.</p>
        <a href="https://www.lightsupplyelectric.com/" target="_blank"> <button >VIEW THE PROJECT</button></a>
      </div>
      <div class="card-image">
        <img src="../assets/images/projects/mac.png" alt="OhMyFood project" />
      </div>
    </div>
  </div>
</template>



<style scoped>
#cards-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}


.card {
  background-color: rgba(255, 217, 0, 0.289);
  display: grid;
  grid-template-columns: 1.5fr 1fr; /* Adjust the ratio to your preference */
  overflow: hidden;
  padding: 60px;
}

.card-reverse {
  background-color: #7551eb43;
  padding: 60px;
  grid-template-columns: 1fr 1.5fr; /* Text on the left and larger image on the right */
}
.card-image {
  position: relative;
  width: 100%;
}

.card-image img {
  width: 100%;
  height: auto;
  object-fit: cover; /* Adjust as needed to fit the image in the card */
  
}

.card-description {
margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Align text to the left */
  text-align: center;
}

.card-description h2 {
  color:  #4a4949; /* Replace with your actual color variable */
  margin-bottom: 0px;
  font-size: 2.5em;

}

.card-description p {
  background: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
  text-align: justify;
  margin:20px 10px;
  color: #000;
  line-height: 2;
  padding: 30px;
  border-radius: 20px;
}

.card-description button {
  padding: 15px 30px;
  border: none;
  background: var(--secondary); /* Replace with your actual color variable */
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  
}

.card-description button:hover {
  background: var(--title); /* Replace with your actual color variable */
}

@media (max-width: 768px) {
  .card, .card-reverse {
    padding:20px 10px;
    grid-template-columns: 1fr; /* Stack image and description on top of each other on mobile */
  }

  #cards-container {
    grid-template-columns: 1fr; /* Full width cards on mobile */
  }
  .card-description{
    padding: 0;
  }
  .card-description h2 {
font-size: 2em;
  }
  .card-description button {
margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  #cards-container {
    width: 100%;
    grid-template-columns: 1fr; /* Full width cards on mobile */
  }

}
</style>
