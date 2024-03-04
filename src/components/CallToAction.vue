<template>
    <div>
<!-- Place this in your HTML where you want the CTA button to appear -->
<div class="cta-container">
  <a href="#container" class="cta-button">Contact Me</a>
</div>

    </div>
</template>

<script setup>

</script>

<style >
/* Add this to your CSS file */
.cta-container {

  text-align: left; /* Center the button container */
  margin: 40px 0; /* Add space above the CTA button */
}

.cta-button {
  font-size: 20px;
  padding: 10px 32px;
  background-color: #5C3D99; /* A color that stands out but matches the scheme */
  color: white;
  text-decoration: none;
  
  transition: transform 0.3s ease;
  display: inline-block;

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
      text-align: center;
        justify-content: center;
        align-items: center;
  background-color: #5C3D99; /* A color that stands out but matches the scheme */
  color: white;
  text-decoration: none;
  font-size: 16px;

  transition: transform 0.3s ease;
  display: inline-block;
  padding: 10px 32px;
  /* Animation */
  animation: pulseAnimation 2s infinite;
}
}

@media (max-width: 768px) {
    .cta-button {
  
  background-color: #5C3D99; /* A color that stands out but matches the scheme */
  color: white;
  text-decoration: none;
  font-size: 12px;
  padding: 10px 32px;
  transition: transform 0.3s ease;
  display: inline-block;

  /* Animation */
  animation: pulseAnimation 2s infinite;
}
.cta-container {

text-align: center; 

}
}
</style>