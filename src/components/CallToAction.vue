<template>
    <div>
<!-- Place this in your HTML where you want the CTA button to appear -->
<div class="cta-container">
  <a href="#container" class="cta-button">Get in Touch</a>
</div>

    </div>
</template>

<script setup>

</script>

<style >
/* Add this to your CSS file */
.cta-container {

  text-align: center; /* Center the button container */
  margin: 70px 0; /* Add space above the CTA button */
}

.cta-button {
  padding: 15px 30px;
  background-color: #5C3D99; /* A color that stands out but matches the scheme */
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 40px;
  transition: transform 0.3s ease;
  display: inline-block;
  position: relative;
  left: 280px;
  top:20px;
  /* Animation */
  animation: pulseAnimation 2s infinite;
}

/* Gentle pulse animation */
@keyframes pulseAnimation {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(92, 61, 153, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 10px 20px rgba(92, 61, 153, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(92, 61, 153, 0);
  }
}

.cta-button:hover {
  background-color: #6A4DAF; /* A slightly lighter shade for the hover state */
  animation: none; /* Stop the animation on hover */
}

/* Responsive styles */

@media (min-width: 767px) and (max-width: 1250px){
    .cta-button {
 width: 70px;
 height: 70px;
  padding: 15px 10px ;
  background-color: #5C3D99; /* A color that stands out but matches the scheme */
  color: white;
  text-decoration: none;
  font-size: 10px;
  font-weight: bold;
  border-radius: 40px;
  transition: transform 0.3s ease;
  display: inline-block;
  position: absolute;
  left: 50px;
  top: 72px;
  /* Animation */
  animation: pulseAnimation 2s infinite;
}
}

@media (max-width: 768px) {
    .cta-button {
 width: 70px;
 height: 70px;
  padding: 15px 10px ;
  background-color: #5C3D99; /* A color that stands out but matches the scheme */
  color: white;
  text-decoration: none;
  font-size: 10px;
  font-weight: bold;
  border-radius: 40px;
  transition: transform 0.3s ease;
  display: inline-block;
  position: absolute;
  left: 50px;
  top: 72px;
  /* Animation */
  animation: pulseAnimation 2s infinite;
}

}
</style>