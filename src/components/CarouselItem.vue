<template>
<div id="card-container">
<!-- CARD 0 -->
    <div class="card">
      <img
        class="card__img"
        src="../assets/images/Booki.jpg"
        alt="Profile photo"
      />
      <div class="card__info">
        <h2 class="card__title">Booki</h2>
        <p class="card__text">Turning Mock-up Into a Web Page with HTML and CSS</p>
        <button class="card__button">Click Here To See More !</button>
    </div>
    </div>

    <!-- CARD 1 -->
    <div class="card">
      <img
        class="card__img"
        src="../assets/images/folder.png"
        alt="Profile photo"
      />
      <div class="card__info">
        <h2 class="card__title">Booki</h2>
        <p class="card__text">Turning Mock-up Into a Web Page with HTML and CSS</p>
        <button class="card__button">Click Here To See More !</button>
    </div>
    </div>

    <!-- CARD 2 -->
    <div class="card">
      <img
        class="card__img"
        src="../assets/images/folder.png"
        alt="Profile photo"
      />
      <div class="card__info">
        <h2 class="card__title">Booki</h2>
        <p class="card__text">Turning Mock-up Into a Web Page with HTML and CSS</p>
        <button class="card__button">Click Here To See More !</button>
    </div>
    </div>


    <!-- CARD 3 -->

    <div class="card">
      <img
        class="card__img"
        src="../assets/images/folder.png"
        alt="Profile photo"
      />
      <div class="card__info">
        <h2 class="card__title">Booki</h2>
        <p class="card__text">Turning Mock-up Into a Web Page with HTML and CSS</p>
        <button class="card__button">Click Here To See More !</button>
    </div>
    </div>
        <!-- CARD 4 -->

        <div class="card">
      <img
        class="card__img"
        src="../assets/images/folder.png"
        alt="Profile photo"
      />
      <div class="card__info">
        <h2 class="card__title">Booki</h2>
        <p class="card__text">Turning Mock-up Into a Web Page with HTML and CSS</p>
        <button @click="goToComponent" class="card__button"> Click Here To See More !</button>
    </div>
    </div>

    <!-- CARD 5 -->

    <div class="card">
      <img
        class="card__img"
        src="../assets/images/folder.png"
        alt="Profile photo"
      />
      <div class="card__info">
        <h2 class="card__title">Booki</h2>
        <p class="card__text">Turning Mock-up Into a Web Page with HTML and CSS</p>
        <button class="card__button">Click Here To See More !</button>
    </div>
    </div>

    
</div>
</template>

<script>
export default {
  methods: {
    goToComponent() {
      this.$router.push({ name: 'SeeMore' });
      // // or if you want to use path
      // this.$router.push('/seeMore');
    }
  },
};
</script>

  <style scoped>
 *{
  background-color: var(--secondary);
  }

  #card-container {
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
  }
  
  .card {
    align-items: center;
    margin: 30px;
    position: relative;
    width: 250px;
    
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card__img {
    background-repeat: no-repeat;
    object-fit:cover; 
    width: 100%;
    display: block;
    transition: transform 0.5s ease-in-out; /* Smooth transition for image zoom */
  }
  
  .card:hover .card__img {
    transform: scale(1.4); /* Zooms in the image */
  }
  
  .card__info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out; /* Smooth transition for content fade in */
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent black background */
  }
  
  .card:hover .card__info {
    opacity: 1;
  }
  
  .card__button {
    padding: 10px 20px;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    background-color: var(--primaryRed); /* Adjust the color to match your design */
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Smooth background color transition */
  }
  
  .card__button:hover {
    background-color: var(--title); /* Slightly darker shade for button hover */
  }
  
  .card__title {
    color: white;
    margin-bottom: 5px;
    transition: color 0.3s ease; /* Smooth color transition */
  }
  
  .card__title:hover {
    color: #ccc; /* Lighter color for text hover */
  }
  
  .card__text {
    color: white;
    font-size: 0.9rem;
    transition: color 0.3s ease; /* Smooth color transition */
  }
  
  .card__text:hover {
    color: #ccc; /* Lighter color for text hover */
  }
  </style>
  