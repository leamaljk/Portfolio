<template>
  <div class="web">
  <h1 >Web Packages</h1>
</div>
  <div id="web-packages">
    
    <div class="package" >
      <div class="header">Standard</div>
      <div class="price-range">£700 - £1100</div>
      <ul class="features" id="basic">
        <li>Up to 4 pages of your content (Example: Home, About, Menu, Services, Contact, ..)</li>
        <li>Desktop, Tablet & Mobile-friendly</li>
        <li>Basic SEO: Fundamental optimization</li>
        <li>Optional Logo Design / Business Card Prints: Additional cost</li>
        <li>FREE 1-year domain name</li>
        <li>FREE 1-year web hosting</li>
        <li>FREE e-mail address</li>
        <li>Website security / HTTPS certificate</li>
        <li>FREE 1-month Website Maintenance Package</li>
      </ul>
      <a href="#footer"><button>Call Now</button></a>
    </div>

    <div class="package" >
      <div class="header">Premium</div>
      <div class="price-range">£1600 - £2200</div>
      <ul class="features" id="professional">
        <li>Up to 10 pages of your content</li>
        <li>Desktop, Tablet & Mobile-friendly</li>
        <li>Optimization & Performance SEO</li>
        <li>Logo and Business Card Design</li>
        <li>250 FREE Business Card Prints</li>
        <li>FREE 1-year domain name</li>
        <li>FREE 1-year web hosting</li>
        <li>FREE e-mail address</li>
        <li>Website security / HTTPS certificate</li>
        <li>FREE 1-month Website Maintenance Package</li>
      </ul>
      <a href="#footer"><button>Call Now</button></a>
    </div>

    <div class="package" >
      <div class="header">Website Maintenance</div>
      <div class="price-per-hour">£60 per hour</div>
      <ul class="features" id="maintenance">
        <li>Website Updates: Regular updates</li>
        <li>Security Checks</li>
        <li>Performance Optimization</li>
        <li>Content Updates</li>
        <li>Tech Support</li>
      </ul>
      <a href="#footer"><button>Call Now</button></a>

    </div>
  </div>
</template>

<script>
export default {
  name: 'WebPackages',
  // You can add component logic here
}
</script>

<style scoped>
#web-packages {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}
.web h1{
    font-weight: 800;
    font-size: 2.5em;
    color: #4a4949;
    letter-spacing: 1.5px;
    text-align: center;
  }

.package {
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  width: 100%;
  max-width: 360px; /* Adjust based on your design */
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: box-shadow 0.3s ease;
}

.package:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.3); /* Larger shadow for hover effect */
}

#basic{
  background-color: #7551eb43;
  padding: 20px ;
  border-radius: 10px;
  
}

#professional{
  background-color: rgba(255, 217, 0, 0.289);
  padding: 20px;
  border-radius: 10px;

}

#maintenance{
  background-color:#cbcbcb;
  padding: 20px ;
  border-radius: 10px;
  
}


.header {
 border-bottom: #666 1px solid;
 font-size: 1.8em;
    color: #4a4949;
  margin-bottom: 10px;
  font-weight: bold;
  
}

.price-range,
.price-per-hour {
  font-size: 28px;

  font-weight: bold;
  color: #666;
  margin-bottom: 20px;
}

.features {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.features li {
  margin-bottom: 2px;
  font-size: 18px;
  color: #333;
  border-bottom: #a5a5a5 1px solid;
}

button {
  padding: 10px 30px;
  font-size: 16px;
  color: #4a4949;
  font-weight: 600 ;
  background: linear-gradient(
        135deg,
        #e6c146c9 0%, /* Lighter shade of gold */
        #d3af37c6 25%, /* Your specified gold color */
        #b8972cc4 50%, /* Darker shade of gold */
        #d3af37c3 75%, /* Your specified gold color again */
        #e6c146c5 100% /* Lighter shade of gold to finish */
    );
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background: linear-gradient(
        135deg,
        #e6c146 0%, /* Lighter shade of gold */
        #d3af37 25%, /* Your specified gold color */
        #b8972c 50%, /* Darker shade of gold */
        #d3af37 75%, /* Your specified gold color again */
        #e6c146 100% /* Lighter shade of gold to finish */
    );
}

@media (min-width: 768px) {
  #web-packages {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  .package {
    margin: 20px;
  }
}
</style>
