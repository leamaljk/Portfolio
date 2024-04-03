<template>
  <footer id="footer">
     <!-- Background Image Container -->
     <div class="background-image">
      <img src="../assets/images/ld (1).jpg" alt="Background" />
      <!-- White Overlay -->
      <div class="background-overlay"></div>
    </div>
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-block social-media-links">
          <h2 class="footer-heading">Let's Connect</h2>
          <p>Join me for the latest updates and insights into my work.</p>
          <div class="icons">
            <a href="https://www.linkedin.com/in/lea-maljkovic" target="_blank" aria-label="LinkedIn">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="icon"/>
            </a>
            <a href="https://github.com/leamaljk" target="_blank" aria-label="GitHub">
              <font-awesome-icon :icon="['fab', 'github']" class="icon"/>
            </a>
            <a href="https://www.instagram.com/pearldesign2024/" target="_blank" aria-label="Instagram">
              <font-awesome-icon :icon="['fab', 'square-instagram']" class="icon"/>
            </a>
          </div>
        </div>
        <div class="footer-block contact-links">
          <h2 class="footer-heading">Get in Touch</h2>
          <p>Have a project in mind? Let's make it happen.</p>
          <div class="contact-details">
            <a href="mailto:PearlDesign2024@outlook.com" target="_blank" aria-label="Email">
              <font-awesome-icon :icon="['fas', 'envelope']" class="icon"/>
              <span>PearlDesign2024@outlook.com</span>
            </a>
            <a href="tel:+447586326416" target="_blank" aria-label="Phone">
              <font-awesome-icon :icon="['fas', 'phone']" class="icon"/>
              <span>+4475 86 326-416</span>
            </a>
          </div>
        </div>
        <div class="footer-block location-link">
          <h2 class="footer-heading">Where I Work</h2>
          <p>Based in Milton Keynes, I serve clients locally and globally, bringing digital visions to life.</p>
          <a href="https://g.co/kgs/w9Cwgi" target="_blank" aria-label="Location">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="icon"/>
            <span>Milton Keynes, UK</span>
          </a>
        </div>
      </div>
    </div>
    <div class="copyright">

      © 2024       <img src="../assets/images/logo/LogoSign (4).webp" width="20px" height="20px" alt="Background" />
PearlDesign. All Rights Reserved. 
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    });

    const footerBlocks = document.querySelectorAll('.footer-block');
    footerBlocks.forEach(block => {
      observer.observe(block);
    });
  }
}

</script>

<style scoped>
#footer {
  color: #333;
  text-align: center;
  position: relative;
}

.background-image {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.background-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.copyright{
  color: #fff;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* Increase the darkness for better contrast */
  z-index: -1;
}

.footer-container {
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
}

.footer-content {

  width: 100%;
  margin: auto;
  padding: 0 2rem;
  background: rgba(255, 255, 255, 0.5); /* semi-transparent white background */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* subtle shadow for depth */
}
.footer-block.in-view {
  animation: fadeIn 2s ease forwards;
}
.footer-block {
  margin: 1rem 0;
  opacity: 0; /* Set initial state for fadeIn */

  animation-delay: var(--animation-delay); /* Use a custom property for delay */
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.social-media-links {
  --animation-delay: 0.3s; /* Delay for social media links */
}

.contact-links {
  --animation-delay: 0.6s; /* Delay for contact links */
}

.location-link {
  --animation-delay: 0.9s; /* Delay for location link */
}

.footer-heading {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.footer-content p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.icons a {
  transition: transform 0.3s ease;
}

.icons a:hover {
  transform: translateY(-5px);
}

.icon:hover {
  transform: translateY(-5px);
}

.contact-details a, .location-link a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--secondary);
}

.contact-details span, .location-link span {
  margin-top: 0.3rem;
  align-items: center;
  justify-content: center;
}

.footer-block:not(:last-child) {
  border-bottom: 1px solid #ffffffce;
  padding-bottom: 1rem;
}

.icon {
  height: 30px;
  width: 30px;
  border: 1px #ffffff dotted;
  padding: 10px;
  border-radius: 50%;
}

/* Media Queries for Responsiveness */
@media (max-width: 1024px) {
  .footer-container {
    padding: 1.5rem 0;
  }
  
  .footer-content {
    padding: 1.5rem;
    
  }
  
  .footer-heading {
    font-size: 1.25rem;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0rem 0;
  }
  
  .footer-content {
    padding: 1rem;
  }
  
  .footer-block {
    margin: 0.75rem 0;
  }
}

@media (max-width: 480px) {
  .footer-heading {
    font-size: 1rem;
  }

 

  .icons {
    flex-direction: column;
  }

  .icon {
    height: 25px;
    width: 25px;
  }
}
</style>


