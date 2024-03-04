<template>
  <footer id="footer">
    <div class="footer-container">
      <div class="footer-content">
       
        <div class="footer-block social-media-links">
          <h2 class="footer-heading">Let's Connect</h2>
          <p>Join me on LinkedIn and GitHub for the latest updates and insights into my work.</p>
          <div class="icons">
            <a href="https://www.linkedin.com/in/lea-maljkovic" target="_blank" aria-label="linkedin">
              <font-awesome-icon :icon="['fab', 'linkedin']" style="height: 40px; width: 40px;"/>
            </a>
            <a href="https://github.com/leamaljk" target="_blank" aria-label="github">
              <font-awesome-icon :icon="['fab', 'github']" style="height: 40px; width: 40px;" />
            </a>
          </div>
        </div>
        <div class="footer-block contact-links">
          <h2 class="footer-heading">Get in Touch</h2>
          <p>Have a project in mind? Drop me an email or fill out this form and I will get back to you.</p>
          <div class="contact-details">
            <a href="mailto:PearlDesign2024@outlook.com" target="_blank" aria-label="e-mail">
              <font-awesome-icon :icon="['fas', 'envelope']" style="height: 35px; width: 35px;"/>
              <span>PearlDesign2024@outlook.com</span>
            </a>
            <a href="tel:+447586326416" target="_blank" aria-label="phone">
              <font-awesome-icon :icon="['fas', 'phone']" style="height: 35px; width: 35px;" />
              <span>+4475 86 326-416</span>
            </a><!-- Contact Details -->
           
<!-- TrustBox widget - Review Collector -->
<div class="trustpilot-widget" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="65d24fbc801b6ca4358e2aaf" data-style-height="62px" data-style-width="100%">
  <a href="https://uk.trustpilot.com/review/pearldesign2024.com" target="_blank" rel="noopener">Trustpilot</a>
</div>
<!-- End TrustBox widget -->
          </div>
        </div>
        <div class="footer-block location-link">
          <h2 class="footer-heading">Where I Work</h2>
          <p>Based in Milton Keynes, I serve clients locally and globally, bringing digital visions to life.</p>
          <a href="https://g.co/kgs/w9Cwgi" target="_blank" aria-label="location">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" style="height: 35px; width: 35px;" />
            <span>I am currently based in Milton Keynes, UK.</span>
          </a>
        </div>
      </div>
     
    </div>
    <div class="copyright">
      
        © 2024 PearlDesign. All Rights Reserved.
        
      </div>
      
  </footer>
</template>

<!-- ... -->

<style scoped>
#footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
  align-items: center;
  max-width: 1400px;
  margin: auto;
}

.footer-content {
  display: contents;
}

.footer-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.footer-heading {
  font-size: 1.25rem;
  color: goldenrod;
  margin: 10px 0;
}

.icons a, .contact-details a, .location-link a {
  color: inherit;
  transition: color 0.3s;
  margin: 10px;
}

.icons a:hover, .contact-details a:hover {
  color: goldenrod;
}

a {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: inherit;
}

span {
  font-size: 0.9rem;
}

.copyright{
margin: 40px 0;
font-size: 0.8em;

}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-block {
    align-items: center;
  }

}

@media (max-width: 480px) {

  .footer-heading {
    font-size: 1rem;
  }
}
</style>
