<template>

<router-view />

</template>



<style lang="scss">
:root {
  font-family: 'Noto Serif TC', serif;

  --primaryRed: #7551ebf7;
  --secondary: #2e293e; //for the text
  --title: #747070;
}

body {
  font-family: 'DM Serif Display', serif;
  object-fit: fill;
    background-repeat: repeat; /* To prevent the image from repeating */
    background-position: center; 
  background-image:url('../src/assets/images/bc (2).jpg') ;
  }

</style>
