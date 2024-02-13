<template>
  
    <div id="cards-container">
      <!-- CARD 1 -->
      <div class="card">
        <div class="card-front">
          <img class="card__img" src="../assets/images/icons/img (9).png" alt="Profile photo" />
        </div>
        <div class="card-back">
          <div class="card-content">
            <h2>Booki</h2>
            <p>Turning Mock-up Into a Web Page with HTML and CSS</p>
            <button @click="goToBooki">Click Here To See More!</button>
          </div>
        </div>
      </div>
  
 <!-- CARD 2 -->
 <div class="card">
        <div class="card-front">
          <img class="card__img" src="../assets/images/icons/img (6).png" alt="Profile photo" />
        </div>
        <div class="card-back">
          <div class="card-content">
            <h2>OhMyFood</h2>
            <p>Integrate a mobile website with animations in CSS</p>
            <button @click="goToOhmyfood">Click Here To See More!</button>
          </div>
        </div>
      </div>
      
       <!-- CARD 3 -->
       <div class="card">
        <div class="card-front">
          <img class="card__img" src="../assets/images/icons/img (12).png" alt="Profile photo" />
        </div>
        <div class="card-back">
          <div class="card-content">
            <h2>Mike's Design</h2>
            <p>Optimize an Existing Website</p>
            <button @click="goToMikeDesigns">Click Here To See More!</button>
          </div>
        </div>
      </div>

       <!-- CARD 4 -->
       <div class="card">
        <div class="card-front">
          <img class="card__img" src="../assets/images/icons/img (1).png" alt="Profile photo" />
        </div>
        <div class="card-back">
          <div class="card-content">
            <h2>Making food is easy</h2>
            <p>Food recipe blog</p>
            <button @click="goToTailwind">Click Here To See More!</button>
          </div>
        </div>
      </div>

       <!-- CARD 5 -->
       <div class="card">
        <div class="card-front">
          <img class="card__img" src="../assets/images/icons/img (15).png" alt="Profile photo" />
        </div>
        <div class="card-back">
          <div class="card-content">
            <h2>Light Supply </h2>
            <p>Your Local Electrician</p>
            <button @click="goToLS">Click Here To See More!</button>
          </div>
        </div>
      </div>

       <!-- CARD 1 -->
       <!-- <div class="card">
        <div class="card-front">
          <img class="card__img" src="../assets/images/icons/img (14).png" alt="Profile photo" />
        </div>
        <div class="card-back">
          <div class="card-content">
            <h2>Grupomania</h2>
            <p>Turning Mock-up Into a Web Page with HTML and CSS</p>
            <button @click="goToComponent">Click Here To See More!</button>
          </div>
        </div>
      </div> -->
    </div>
  </template>
 
 <script>
 export default {
   methods: {
     goToBooki() {
       this.$router.push({ name: 'PhotoGalleryBooki' });
     },
     goToOhmyfood() {
       this.$router.push({ name: 'PhotoGalleryOhmyfood' });
     },
     goToMikeDesigns() {
       this.$router.push({ name: 'PhotoGalleryMike' });
     },
     goToTailwind() {
       this.$router.push({ name: 'PhotoGalleryTailwind' });
     },
     goToLS() {
       this.$router.push({ name: 'PhotoGalleryLS' });
     },
   },
 };
 </script>
 
<style scoped>
#cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  font-family: 'Tenor Sans', sans-serif;
  /* background-color: white; */

}

.card {
  width: 200px;
  margin: 20px;
}


.card-front{
border-top-right-radius: 10px;
border-top-left-radius: 10px;
justify-content: center;
align-items: center;
padding-bottom: 20px;
padding-top: 20px;
}
.card-back{
border-bottom-right-radius: 10px;
border-bottom-left-radius: 10px;

}

.card-front,
.card-back {
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  
}

.card-front img {
  width: 80%;
  height: auto;
  
  
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  
}
.card-content h2{
color: var(--primaryRed);
padding-bottom: 10px;
}

.card-content h2,
.card-content p {
  margin: 0;
}

.card-back button {
  padding: 8px 16px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background: var(--primaryRed);
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .card {
    margin: auto;
    width: 100%; 
    /* Set card width to 100% for mobile devices */
  }
  
  #cards-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card-front img {
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  }
}
</style>