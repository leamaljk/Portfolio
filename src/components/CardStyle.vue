<template>

  <div id="cards-container">
    <h1 class="about">Portfolio</h1>
    <!-- Each card will have two main parts: the image showcase and the description -->

    <div class="card">
      <div class="card-image">
        <img src="../assets/images/projects/mac.webp" alt="Light Supply project" />
      </div>
      <div class="card-description">
        <h2>Light Supply</h2>
        <p>The webpage is a professional showcase for "Light Supply," an electrical services provider. It effectively highlights the electrician’s expertise and range of services, from standard electrical installations to specialized tasks like EV charger installation. The design features a clean, organized layout that outlines the electrician's qualifications, work process, and service offerings.</p>
        <a href="https://www.lightsupplyelectric.com/"> <button >VIEW THE PROJECT</button></a>

      </div>
    </div>
    <!-- ... Repeat for other cards ... -->
    <div class="card card-reverse">
      <div class="card-description">
        <h2>Oh My Food</h2>
        <p>The webpage is a modern, streamlined online service aimed at food enthusiasts looking to book curated dining experiences in select restaurants. It presents a straightforward, three-step process for choosing a restaurant, creating a personalized menu, and enjoying the dining experience. </p>
        <a href="https://leamaljk.com/ohmyfood/" ><button >VIEW THE PROJECT</button></a>
      </div>
      <div class="card-image">
        <img src="../assets/images/projects/mac (3).webp" alt="OhMyFood project" />
      </div>
    </div>

    <!-- ... Repeat for other cards ... -->
     <!-- Each card will have two main parts: the image showcase and the description -->
     <div class="card">
      <div class="card-image">
        <img src="../assets/images/projects/mac (4).webp" alt="Booki project" />
      </div>
      <div class="card-description">
        <h2>Go Mike Designs</h2>
        <p>The webpage is a portfolio for "GoMike Designs," showcasing the services of Mike, a web designer who specializes in creating websites and graphics for Atlanta-based companies. It emphasizes his commitment to enhancing online presence and recognition for local businesses through bespoke website design, strategic online positioning, and logo creation.</p>
        <a href="https://leamaljk.com/goMikeDesigns/" > <button>VIEW THE PROJECT</button></a>
      </div>
    </div>
    <!-- ... Repeat for other cards ... -->
    <div class="card card-reverse">
      <div class="card-description">
        <h2>Booki</h2>
        <p>The webpage is a sleek and inviting online platform designed for booking travel accommodations and discovering activities in Marseille. It boasts a minimalist and intuitive interface with a clear search function, well-organized content, and visually appealing imagery. </p>
        <a href="https://leamaljk.com/Booki/"> <button >VIEW THE PROJECT</button></a>
      </div>
      <div class="card-image">
        <img src="../assets/images/projects/mac (2).webp" alt="Booki project" />
      </div>
    </div>
<!-- last card -->
    <div class="card">
      <div class="card-image">
        <img src="../assets/images/projects/Component 1 (1).webp" alt="Booki project" />
      </div>
      <div class="card-description">
        <h2>Cuppa Coffee</h2>
        <p>This web page is a promotional site for "Cuppa Coffee," designed with WordPress CMS, showcasing the coffee shop's products, values, and team. It highlights the quality of their coffee, brewing technology, and commitment to sustainability. </p>
        <a href="https://dev-cuppa-charm-cafe.pantheonsite.io/" > <button>VIEW THE PROJECT</button></a>
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
.about {
    font-weight: 800;
    font-size: 2.5em;
    color: #4a4949;
    margin-bottom: 1rem;
    letter-spacing: 1.5px;
    animation: fadeInUp 2s ease;
    text-align: center;
    font-family: "Libre Caslon Text", serif;
  }

.card {
  background-color: #fffbbdc9;
  display: grid;
  grid-template-columns: 1.5fr 1fr; /* Adjust the ratio to your preference */
  overflow: hidden;
  padding: 60px;
}

.card-reverse {
  background-color: #dce2ffd3;
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
  font-family: "Libre Caslon Text", serif;

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


@media (min-width: 767px) and (max-width: 1200px){

  .card, .card-reverse {
    padding:20px 10px;
    margin: 0;
    grid-template-columns: 1fr; /* Stack image and description on top of each other on mobile */
  }

  #cards-container {
    grid-template-columns: 1fr; /* Full width cards on mobile */
  }

}
@media (max-width: 768px) {
  .card, .card-reverse {
    padding:20px 10px;
    grid-template-columns: 1fr; /* Stack image and description on top of each other on mobile */
  }

  #cards-container {
    margin: 0;
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
