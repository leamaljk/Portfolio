<template>
  <div class="center-title">
      <img src="@/assets/images/titles/9.webp" alt="PearlDesign" class="titles" >
    </div>
<div>
<FreeQuote></FreeQuote>

</div>
  <div id="web-packages">
    
    <div class="package training">
      <div class="header">CMS Training & Documentation</div>
      <p class="CMS">Receive comprehensive training for managing your website along with detailed documentation, ensuring you can manage your online presence (CMS or Content Managment System) effectively and efficiently.
      <br><br>I believe in transparency and provide upfront, all-inclusive pricing with no hidden fees. This is what you can expect when contacting me. My packages are designed to give you control and understanding of your web presence.</p>
      <a href="#footer"><button>Learn More</button></a>
    </div>

    <div class="package">
      <div class="header">Standard</div>
      <!-- <div class="price-range">£700 - £1100</div> -->
      <ul class="features" id="basic">
        <li>Up to 4 custom pages (Home, About, Services, Contact, etc.)</li>
        <li>Responsive design across all devices</li>
        <li>Basic SEO for fundamental online visibility</li>
        <li>1-year free domain registration</li>
        <li>1-year complimentary hosting service</li>
        <li>Professional e-mail address setup</li>
        <li>Robust website security with HTTPS certificate</li>
        <li>1 month of Website Maintenance Package at no extra cost</li>
        <li>* Optional Logo Design and Business Card Printing available</li>
      </ul>
      <a href="#footer"><button>Get a quote</button></a>
    </div>

    <div class="package">
      <div class="header">Premium</div>
      <!-- <div class="price-range">£1600 - £2600+</div> -->
      <ul class="features" id="professional">
        <li>Up to 10 or more custom pages tailored to your content</li>
        <li>Optimized responsive layout for a seamless multi-device experience</li>
        <li>Advanced SEO and performance optimization</li>
        <li>Logo and Business Card Design included</li>
        <li>250 business card prints provided free</li>
        <li>1-year free domain name</li>
        <li>1-year complimentary web hosting</li>
        <li>Secure e-mail address setup</li>
        <li>Guaranteed website security with HTTPS certificate</li>
        <li>1-month trial of Website Maintenance Package for free</li>
      </ul>
      <a href="#footer"><button>Get a quote</button></a>
    </div>

    <div class="package">
      <div class="header">Website Maintenance</div>
      <!-- <div class="price-per-hour">£60 per hour</div> -->
      <ul class="features" id="maintenance">
        <li>Regular website content updates</li>
        <li>Detailed security checks</li>
        <li>Ongoing performance optimization</li>
        <li>Content updates as requested</li>
        <li>Responsive technical support</li>
      </ul>
      <a href="#footer"><button>Learn More</button></a>
    </div>

    
  </div>
</template>


<script>
import FreeQuote from '../components/FreeQuote.vue';
export default {
  components: {
    FreeQuote
},
};
</script>

<style scoped>
#web-packages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  margin: auto;
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
  display: flex;
  justify-content: center;
}

.package {
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  width: 100%;
  max-width: 320px; /* Adjust based on your design */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.package:hover {
  transform: scale(1.02);  box-shadow: 0 8px 16px rgba(0,0,0,0.2); /* Larger shadow for hover effect */
}

#basic{
  
  background-color: var(--darkergray);
  padding: 20px ;
  border-radius: 10px;
  color: var(--white);
  
}

#basic li{
  border-bottom: var(--white) 1px solid;

}

#professional{
  background-color: var(--primaryRed);
  color: #333;
  padding: 20px;
  border-radius: 10px;

}

#professional li{
  border-bottom: var(--white) 1px solid;

}

#maintenance{
  background-color: var(--white);
  padding: 20px ;
  border-radius: 10px;
  color: var(--secondary);
  
}

#maintenance li{
  border-bottom: var(--primaryRed) 1px solid;

}

.header {

 font-size: 1.25rem;
 text-transform: uppercase;
  color: var(--title);
  margin-bottom: 20px;
  font-weight: bold;
  
}


.CMS{
  background-color: var(--secondary);
  color: var(--primaryRed);
  padding: 20px ;
  border-radius: 10px;
}
.features {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  font-size: 20px;
}

.features li {
  margin-bottom: 2px;
  font-size: 20px;
  line-height: 1.6;
  
 
}

button {
  padding: 10px 30px;
  font-size: 16px;
  color: #fff;
  font-weight: 600 ;
  background: var(--secondary);
  border: none;
  cursor: pointer;
  font-weight: 400;
  text-transform: uppercase;
}

button:hover {
  background: var(--title);
}

@media (max-width: 768px) {
  #web-packages {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .titles {
  display: flex;
  text-align: center;
  justify-content: center; /* This will center the image horizontally */
  align-items: center; /* This will center the image vertically */
  width: 250px; /* You need a specific height to align items in the center vertically */
}
  .package {  
   max-width: 300px;    
   width: 100%;
   }
   .features li {
    font-size: 20px;
   }

}
@media (min-width: 480px) {
 
  .features li {
    font-size: 20px;
  }
  .package {
   width: 100%;
   }
}

@media (min-width: 320px) {
 
  #web-packages {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .features li {
    font-size: 20px;
  }
  .package {
  
  max-width: 300px;    
  width: 100%;
  }
   

}
</style>
