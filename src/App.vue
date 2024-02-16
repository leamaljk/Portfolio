<template>

<router-view />

</template>



<style lang="scss">
:root {

  --primaryRed: #7551eb;
  --secondary: #2e293e; //for the text
  --title: #747070;
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

</style>
