<template>

  <div id="cards-container">
    <div class="center-title">
      <img src="@/assets/images/titles/7.webp" alt="PearlDesign" class="titles" >
    </div>
    <!-- Each card will have two main parts: the image showcase and the description -->

    <div class="card">
      <div class="card-image">
        <img src="../assets/images/projects/mac1.webp" alt="Light Supply project" />
      </div>
      <div class="card-description">
        <h2 class="reverse-text">Light Supply</h2>
        <p>The webpage is a professional showcase for "Light Supply," an electrical services provider. It effectively highlights the electrician’s expertise and range of services, from standard electrical installations to specialized tasks like EV charger installation. </p>
        <a href="https://www.lightsupplyelectric.com/"> <button >VIEW THE PROJECT</button></a>

      </div>
    </div>
    <!-- ... Repeat for other cards ... -->
    <div class="card card-reverse">
      <div class="card-description">
        <h2 class="right-text">Oh My Food</h2>
        <p>The webpage is a modern, streamlined online service aimed at food enthusiasts looking to book curated dining experiences in select restaurants. It presents three-step process for choosing a restaurant, creating a personalized menu, and enjoying the dining experience. </p>
        <a href="https://leamaljk.com/ohmyfood/" ><button >VIEW THE PROJECT</button></a>
      </div>
      <div class="card-image">
        <img src="../assets/images/projects/mac (3).webp" alt="OhMyFood project" />
      </div>
    </div>

    <!-- ... Repeat for other cards ... -->
    <div class="card">
      <div class="card-image">
        <img src="../assets/images/projects/Component 1 (1).webp" alt="Booki project" />
      </div>
      <div class="card-description">
        <h2 class="reverse-text">Cuppa Coffee</h2>
        <p>This web page is a promotional site for "Cuppa Coffee," designed with WordPress CMS, showcasing the coffee shop's products, values, and team. It highlights the quality of their coffee, brewing technology, and commitment to sustainability. </p>
        <a href="https://dev-cuppa-charm-cafe.pantheonsite.io/" > <button>VIEW THE PROJECT</button></a>
      </div>
    </div>
    <!-- ... Repeat for other cards ... -->
    <div class="card card-reverse">
      <div class="card-description">
        <h2 class="right-text">Booki</h2>
        <p>The webpage is a sleek and inviting online platform designed for booking travel accommodations and discovering activities in Marseille. It boasts a minimalist and intuitive interface with a clear search function, well-organized content, and visually appealing imagery. </p>
        <a href="https://leamaljk.com/Booki/"> <button >VIEW THE PROJECT</button></a>
      </div>
      <div class="card-image">
        <img src="../assets/images/projects/mac (2).webp" alt="Booki project" />
      </div>
    </div>
<!-- last card -->
    
  </div>
</template>



<style scoped>

#cards-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
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
}

.card,
.card-reverse {
  background-color: var(--primaryRed);
  display: grid;
  grid-gap: 30px; /* Space between items */
  justify-items: center; /* Center items horizontally */
  align-content: center; /* Center items vertically */
  padding: 60px;
  margin: 10px 0; /* Space between cards */
}

.card-reverse {
  background-color: var(--darkergray);
}

.card-image,
.card-description {
  width: 100%; /* Full width of their grid area */
}

.card-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center text */
  text-align: center;
  padding: 30px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
}

.right-text,
.reverse-text {
  color: var(--text);
  font-size: 2.5em;
}
.reverse-text{
  color: var(--secondary);
}
.card-description p {
  margin-bottom: 20px;
  color: #000;
  line-height: 2;
}

.card-description button {
  padding: 15px 30px;
  border: none;
  background: var(--secondary);
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
}

.card-description button:hover {
  background: var(--title);
}
@media (min-width: 767px) and (max-width: 1100px) { 
  .card {
display: flex;
flex-direction: column;  }

.card-image {
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center text */
  margin: auto;
}
.card-image img{
  max-width: 80%;
  align-items: center;
  justify-content: center;
  margin: auto;
}
  
 
}
@media (min-width: 768px) {
  .card {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
  
  .card-reverse {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }


}

@media (max-width: 767px) {
  .card,
  .card-reverse {
    grid-template-columns: 1fr; /* Stack image and description */
    padding: 20px;
  }

  .titles {
  display: flex;
  text-align: center;
  justify-content: center; /* This will center the image horizontally */
  align-items: center; /* This will center the image vertically */
  width: 250px; /* You need a specific height to align items in the center vertically */
}
}

@media (max-width: 480px) {
  .about,
  .right-text,
  .reverse-text,
  h2 {
    font-size: 1.5rem;
  }

  .card-description button {
    margin-bottom: 20px;
  }
}

</style>
