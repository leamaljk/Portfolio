<template>
  <div class="web">
    <h1>Web Packages</h1>
  </div>
  <div id="web-packages">
    
    <div class="package training">
      <div class="header">CMS Training & Documentation</div>
      <p class="features">Receive comprehensive training for managing your website along with detailed documentation, ensuring you can manage your online presence (CMS or Content Managment System) effectively and efficiently.</p>
      <p class="features">I believe in transparency and provide upfront, all-inclusive pricing with no hidden fees. This is what you can expect when contacting me. My packages are designed to give you control and understanding of your web presence.</p>
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
      <a href="#footer"><button>Learn More</button></a>
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
      <a href="#footer"><button>Learn More</button></a>
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




<style scoped>
#web-packages {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  margin: auto;
  padding: 20px;
}
.web h1{
    font-weight: 800;
    font-size: 2.5em;
    color: #4a4949;
    letter-spacing: 1.5px;
    text-align: center;
    font-family: "Libre Caslon Text", serif;
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
  transform: scale(1.02);  box-shadow: 0 8px 16px rgba(0,0,0,0.3); /* Larger shadow for hover effect */
}

#basic{
  
  background-color: #dce2ffd3;
  padding: 20px ;
  border-radius: 10px;
  
}

#professional{
  background-color: #fffbbdc9;
  padding: 20px;
  border-radius: 10px;

}

#maintenance{
  background-color: #f1f1f1;
  padding: 20px ;
  border-radius: 10px;
  
}


.header {
  font-family: "Libre Caslon Text", serif;
 border-bottom: #666 1px solid;
 font-size: 1.8em;
    color: #4a4949;
  margin-bottom: 10px;
  font-weight: bold;
  
}


.price-range,
.price-per-hour {
  font-size: 28px;
  font-family: "Libre Caslon Text", serif;
  font-weight: bold;
  color: #666;
  margin-bottom: 20px;
}

.features {
  list-style: none;
  padding: 0;
  font-size: 21px;
  margin-bottom: 20px;
}

.features li {
  margin-bottom: 2px;
  font-size: 21px;
  line-height: 1.6;
  color: #333;
  border-bottom: #a5a5a5 1px solid;
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

@media (min-width: 768px) {
  #web-packages {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .package {
   
   max-width: 300px;    
   width: 100%;
   }
}


@media (min-width: 320px) {
  #web-packages {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  
    
  }
  .package {
   
  max-width: 300px;    
  width: 100%;
  }

}
</style>
