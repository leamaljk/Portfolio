<template>

<router-view />

</template>



<style lang="scss">
:root {
  --primaryRed: #D4CAF3 ;
  --secondary: #7551eb;
  --title: #4a4949;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  .libre-caslon text-regular {
  font-family: "Libre Caslon Text", serif;
  font-weight: 400;
  font-style: normal;
}

.libre-caslon text-bold {
  font-family: "Libre Caslon Text", serif;
  font-weight: 700;
  font-style: normal;
}

.libre-caslon text-regular-italic {
  font-family: "Libre Caslon Text", serif;
  font-weight: 400;
  font-style: italic;
}

font-family: "Libre Caslon Text", serif;
font-weight: 400;
font-style: normal;
line-height: 1.8;

object-fit: cover;

background-repeat: repeat; /* To prevent the image from repeating */
background-position: center; 
background-image:url('../src/assets/images/bc.jpeg') ;

}

@media (min-width: 767px) and (max-width: 1250px){
body{
  background-position: center center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  background-attachment: fixed; /* Keep the background image fixed during scroll */
  background-size: cover; /* Ensure the image covers the whole viewport */
  height: 100vh; /* Minimum height of 100% of the viewport */
  margin: 0;
  }
}

@media (max-width: 768px) {
body{
  background-position: center center; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  background-attachment: fixed; /* Keep the background image fixed during scroll */
  background-size: cover; /* Ensure the image covers the whole viewport */
  height: 100vh; /* Minimum height of 100% of the viewport */
  margin: 0;
  }
}
</style>
