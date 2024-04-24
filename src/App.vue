<template>

<router-view />

</template>

<button> Costomise </button>



<style lang="scss">
:root {
  --primaryRed: #F1F1F1 ;
  --secondary: #4B3F98;
  --title: #8C52FF;
  --darkergray: #A6A6A6;
  --text: #333;
  --white: #fff;
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

font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight:400;
  font-style: normal;
line-height: 1.8;

background-size:cover;
background-repeat: no-repeat; /* To prevent the image from repeating */
background-position: center;
// background-image: url('../src/assets/images/bg (2) (1).webp');
background-attachment: fixed; /* This makes the background stay fixed during scrolling */

}


// @media (max-width: 768px) {
// body{
//   background-attachment: scroll;
//   background-repeat: repeat; 

// }

// }

// @media (max-width: 480px) {

//   body{
//     background-repeat: repeat; 

//   background-attachment: scroll;
// }
// }
</style>
