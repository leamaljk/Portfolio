<template>
  
    <div class="center-title">
      <img src="@/assets/images/titles/8.webp" alt="PearlDesign" class="titles" >
    </div>
  <div id="about-me">
    <div class="content-wrapper">
      <img class="profile-photo" src="../assets/images/4.png" alt="Lea">
      <div class="text-content">
        <h1>Hello!</h1>
        <p>I’m Lea, the face behind Pearl Design. Thank you for visiting my page.</p>
        <p>After several years of working in various roles, I decided to step into the freelance world. This shift allowed me to merge my professional life with my personal one, proving that work can be as flexible as it is fulfilling.</p>
        <p>My journey into web design reignited at Amazon, where I started out in 2019. While working there, I was drawn back to my original passion for web design thanks to the educational opportunities available. I completed a two-year Web Developer program, which brought me back to this path.</p>
        <p>At Pearl Design, my goal is to help you build a strong online presence. Through my work, I aim to create designs that tell a story and connect with people. Higher up, you can see some of the projects I’ve worked on.</p>
        <p>Please take a look at my work and let’s see how we can work together to make your project come to life. (PS: Some of the projects were part of the curriculum in my Web Developer program. Since completing these projects, I have substantially advanced my technical capabilities and expanded my professional knowledge.)</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Vue 3 Script Setup can be utilized here if you need to add interactivity or data management.
</script>

<style scoped>
#about-me {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.content-wrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  padding: 0px;
  width: 100%;
  
}

.profile-photo {
  width:450px;
  height: 450px;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  margin: auto;
}


.text-content {
  padding: 20px;
  background-color: var(--secondary);
  
  flex: 1;
  text-align: justify;
  
}

.text-content p{
  color: var(--primaryRed);
  
}

.text-content h1{
  color: var(--primaryRed);
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

@media (min-width: 767px) and (max-width: 1200px) { 

  .content-wrapper {
display: flex;
flex-direction: column;
padding: 0;
  }

  .profile-photo {
    width:450px;
  height: 450px;
  justify-content: center; /* This will center the image horizontally */
  align-items: center;
margin: auto;
  }

}
@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0;
  }

  .profile-photo {
    width:320px;
  height: 320px;
  }
  .titles {
  display: flex;
  text-align: center;
  justify-content: center; /* This will center the image horizontally */
  align-items: center; /* This will center the image vertically */
  width: 300px; /* You need a specific height to align items in the center vertically */
}
}
</style>
