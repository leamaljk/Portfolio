<template>
            <div class="navigation">
<MyNavigation></MyNavigation>
</div> 
    <div class="app">
   
        <section id="portfolio">
          <div class="project">
            <img class="project__image" src="../../assets/images/projects/LS (8).png"  />
            <div class="glass"></div>
            <div class="glass-overlay"></div>
            
            <p>Light Supply</p>
            <h3 class="grid__title"> click to see the gallery</h3>
            <div class="grid__overlay">
              <button class="viewbutton">view more</button>
            </div>
          </div>
          
          <div class="project">
            <img class="project__image" src="../../assets/images/projects/LS (2).png"  />
            <div class="glass"></div>
            <div class="glass-overlay"></div>
            <p>Light Supply</p>
            <h3 class="grid__title"> click to see the gallery</h3>
            <div class="grid__overlay">
              <button class="viewbutton">view more</button>
            </div>
          </div>
          
          <div class="project">
            <img class="project__image" src="../../assets/images/projects/LS (7).png"  />
            <div class="glass"></div>
            <div class="glass-overlay"></div>
            <p>Light Supply</p>
            <h3 class="grid__title"> click to see the gallery</h3>
            <div class="grid__overlay">
              <button class="viewbutton">view more</button>
            </div>
          </div>
          
          <div class="project">
            <img class="project__image" src="../../assets/images/projects/LS (6).png"  />
            <div class="glass"></div>
            <div class="glass-overlay"></div>
            <p>Light Supply</p>
            <h3 class="grid__title"> click to see the gallery</h3>
            <div class="grid__overlay">
              <button class="viewbutton">view more</button>
            </div>
          </div>
          <div class="project">
            <img class="project__image" src="../../assets/images/projects/LS (11).png"  />
            <div class="glass"></div>
            <div class="glass-overlay"></div>
            <p>Light Supply</p>
            <h3 class="grid__title"> click to see the gallery</h3>
            <div class="grid__overlay">
              <button class="viewbutton">view more</button>
            </div>
          </div>
          
          <div class="project">
            <img class="project__image" src="../../assets/images/projects/LS (10).png"  />
            <div class="glass"></div>
            <div class="glass-overlay"></div>
            <p>Light Supply</p>
            <h3 class="grid__title"> click to see the gallery</h3>
            <div class="grid__overlay">
              <button class="viewbutton">view more</button>
            </div>
          </div>

          
          
         
          <div class="overlay">
            <div class="overlay__inner">
              <button class="prev">&#x25C0; Prev</button>
              <button class="next">Next &#x25B6; </button>
              <button class="close">close &#x2718;</button>
              <img>
            </div>
          </div>
        </section>
    </div>  <!-- end od app container -->
    
          <section class="live-website">
      <div class="content">
        <h2>Light Supply</h2>
        <h3>Light Supply Electric - Your Local Electrician </h3>
       
      
        <section class="id-live">
          <div class="box">
          <p class="box-p">
          
The image displays a webpage for "Light Supply," a business offering electrical services. It features a structured layout with multiple sections, providing information about the services, the electrician, and customer testimonials.
<br> <br>
Header and Navigation: The top of the page includes a navigation bar with links to the Home, About, Services, Testimonials, FAQ, and Contact pages. The company logo "LIGHT SUPPLY" is prominently displayed.
<br> <br>
About Section: There is an "About Me" section that introduces the electrician, detailing their experience, approach to work, and commitment to safety and efficiency. It emphasizes the electrician's expertise in domestic electrical installations and repairs. 
        </p>
          </div>
          
          <div class="box">
          <p class="box-p">
            Work Process: A section titled "My Work Process" outlines the steps taken to ensure quality service, from consultation to final inspection and customer approval, highlighting a customer-centric approach.
            <br> <br>
Value Proposition: "Why Choose Me?" is another section that lists reasons such as experience, quality assurance, transparent pricing, and efficiency.
<br> <br>
Services: The "Electrical Services" section features icons and brief descriptions of various services offered, such as EICR (Electrical Installation Condition Report) Standards, New Build Wiring, EV Charger Installation, Sockets and Lights Replacement, Consumer Unit Replacement, Extended Power to Sheds, Garages, or Garden Cabins, Fixing Electrical Faults, and Full House Rewire.          </p>
          </div>
      
          <div class="box">
          <p class="box-p">
            Testimonials: Below the services, there's a "Customer testimonials" section with customer feedback, showcasing the trust and satisfaction of past clients. It includes a testimonial with a customer's statement, the service provided (an electrical job involving a consumer unit), and a mention of reasonable prices.
        </p>
          </div>
      
          <div class="box">
          <p class="box-p">
            FAQs: There is a "Frequently Asked Questions" segment with dropdowns for common queries about emergency services, licensing, quotes, service areas, warranties, and examples of work.
            <br> <br>
Footer: The footer includes contact information, social media links, professional affiliations, and business hours, including emergency contact availability.
          </p>
          </div>
      
          </section>
       
          
       
        <a href="https://www.lightsupplyelectric.com/" target="_blank" class="live-link-button">Visit live website</a>
      </div>
      </section>
      <div><ContactFooter /></div>
        </template>
        
      <script>
     import ContactFooter from '../ContactFooter.vue'
import MyNavigation from '../MyNavigation.vue';
    
        export default {
            components: {
    'ContactFooter': ContactFooter,
    MyNavigation,
},   
    
      name: 'PhotoGallery',
      data() {
        return {
          currentIndex: 0,
          images: [],
          touchStartX: 0,
          touchEndX: 0,
        };
      },
      
      mounted() {
        const buttons = document.querySelectorAll('.project');
        const overlay = document.querySelector('.overlay');
        const overlayImage = document.querySelector('.overlay__inner img');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        this.images = Array.from(document.querySelectorAll('.project__image')).map(img => img.src);
      
        const open = (index) => {
          this.currentIndex = index;
          overlay.classList.add('open');
          overlayImage.src = this.images[index];
        };
      
        const close = () => {
          overlay.classList.remove('open');
        };
      
        const showPrevImage = () => {
          if (this.currentIndex > 0) {
            this.currentIndex--;
            overlayImage.src = this.images[this.currentIndex];
          }
        };
      
        const showNextImage = () => {
          if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
            overlayImage.src = this.images[this.currentIndex];
          }
        };
      
        buttons.forEach((button, index) => button.addEventListener('click', () => open(index)));
        overlay.addEventListener('click', close);
        prevButton.addEventListener('click', (e) => {
          e.stopPropagation();
          showPrevImage();
        });
        nextButton.addEventListener('click', (e) => {
          e.stopPropagation();
          showNextImage();
        });
      
      
        const handleTouchStart = (e) => {
          this.touchStartX = e.changedTouches[0].screenX;
        };
      
        const handleTouchMove = (e) => {
          this.touchEndX = e.changedTouches[0].screenX;
        };
      
        const handleTouchEnd = () => {
          if (this.touchStartX - this.touchEndX > 50) {
            showNextImage();
          } else if (this.touchEndX - this.touchStartX > 50) {
            showPrevImage();
          }
        };
      
        overlayImage.addEventListener('touchstart', handleTouchStart);
        overlayImage.addEventListener('touchmove', handleTouchMove);
        overlayImage.addEventListener('touchend', handleTouchEnd);
      
      },
      methods: {
        goToHome() {
          this.$router.push('/#cards-container');
        }
      }
      };
      
      </script>
        
      
      
      
    <style scoped>
     @import url('https://fonts.googleapis.com/css?family=Inconsolata|Merriweather');
    


      /* GO TO HOME BUTTON */
    #footer {
      background-color: white;
      color: var(--primaryRed);
      border-top: 2px solid var(--primaryRed);
    }
    
      .app {
      width: 70%;
      height: auto;
      background-color: rgb(255, 255, 255);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 40px auto;
      border-radius: 20px;
    }
    .navigation{
margin-bottom: 8rem;

}
    .close-btn {
      position: absolute;
      top: 0px;
      left: 0px;
      background: none;
      outline: 0;
      width: 120px;
      background-color: transparent;
      border: none;
      color: black;
      padding: 10px;
      text-transform: uppercase;
      z-index: 1001;
      border-radius: 2px;
    }
    
    
    .close-btn:hover {
      color: #7451eb;
    }
    
    
      /* LIVE SECTION */
      .live-website {
      width: 90%;
      font-family: 'Noto Serif TC', serif;
      margin-top: 20px;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #b19afc; /* Example background color */
      color: #ffffff; /* Font color */
      text-align: center;
      padding: 50px;
      box-sizing: border-box; /* Include padding in the box's dimension */
      }
      
     
      .live-website .content {
      max-width: 600px; /* Max width for the content area */
      margin: 0 auto; /* Center the content area horizontally */
      }
      
      .live-website h2 {
      font-family: 'DM Serif Display', serif;
      font-size: 3em; 
      margin-bottom: 20px;
      }
      
      .live-website p {
      font-size: 1em; /* Standard font size for the content */
      line-height: 1.6; /* For better readability */
      margin-bottom: 30px; /* Spacing between the content and the button */
      }
      
      .live-website .live-link-button {
      display: inline-block;
      background-color: transparent; 
      color: #ffffff;
      border: 2px solid white;
      padding: 10px 20px;
      font-size: 1em;
      text-decoration: none; /* Remove underline from links */
      cursor: pointer;
      transition: background-color 0.3s ease;
      }
      
      .live-website .live-link-button:hover {
      background-color:var(--primaryRed); /* Darker shade on hover for the button */
      }
      
      .live-link-button{
        margin-top: 20px;
      }
      
      @media (max-width: 768px) {
      .live-website {
        padding: 30px; /* Reduce padding on smaller screens */
      }
      
      .live-website h2 {
        font-size: 2em; /* Adjust font size for smaller screens */
      }
      }
      
      @media (max-width: 480px) {
        
      
      .live-website{
        width: 100%;
        justify-content: center;
        align-items: center;
        margin: auto;
      }
      .live-website h2 {
        font-size: 1.5em; /* Further adjust font size for very small screens */
      }
      
      .live-website .live-link-button {
        padding: 8px 16px; /* Adjust button padding for small screens */
      }
      }
      
        body {
          font-family: 'Noto Serif TC', serif;
          margin: 0;
        }
      
        button {
          cursor: pointer;
        }
      
      
        /* IdLive section */
        .id-live {
            font-family: 'Noto Serif TC', serif;
          width: 100%;
          margin-top: 30px;
          position: relative;
          display: grid;
          grid-template-columns: repeat(2, minmax(600px, 1fr));
          grid-template-rows: 1fr 1fr;
          grid-gap: 20px;
          align-items:start ;
          justify-content: center;
          margin: auto;
      
        }
      
        .box{
          background-color: white;
          border-radius: 20px;
        }
      
      .box-title{
        color: var(--secondary);
      }
      
       .box-p {
        color: var(--title);
        padding: 10px;
      
       }
      
        #portfolio {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(300px, 1fr));
          grid-template-rows: 1fr 1fr;
          grid-gap: 20px;
        }
      
        .project {
          position: relative;
          background: #b19afc;
          overflow: hidden;
          opacity: 1;
        }
      
        .project img {
          position: absolute;
          opacity: 0.9;
          width: 120%;
          height: 100%;
          object-fit: cover;
          
        }
      
        .project p {
          position: absolute;
          text-align: center;
          width: 100%;
          padding: 1em 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          z-index: 3;
        }
      
        .grid__title {
            font-family: 'Noto Serif TC', serif;
          position: absolute;
          width: 100%;
          text-align: center;
          white-space: nowrap;
          bottom: -20px;
          font-weight: 200;
          background-color: white;
          padding-top: 10px;
          padding-bottom: 20px;
          font-size: 1em;
          z-index: 3;
          text-transform: uppercase;
          color: #474545;
          letter-spacing: 2px;
        }
      
        .project:hover .grid__overlay {
          transform: translateY(0%);
        }
      
        .grid__overlay {
          background: rgba(177, 154, 252, 0.9);
          height: 100%;
          grid-column: 1 / -1;
          grid-row: 1 / -1;
          position: relative;
          display: grid;
          justify-items: center;
          align-items: center;
          transform: translateY(101%);
          transition: all 0.3s ease-in-out;
        }
      
        .grid__overlay button {
          background: none;
          outline: none;
          font-weight: 100;
          letter-spacing: 2px;
          border: 1px solid #ffffff;
          color: #ffffff;
          text-transform: uppercase;
          padding: 10px;
        }
      
        .grid__overlay button:hover {
          background: #ffffff;
          color: #7451eb;
          transform: scale(1.05);
        }
      
        .overlay {
         
          position: fixed;
          background: rgba(71, 69, 69, 0.7);
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: none;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
      
        .overlay.open {
          display: flex;
          flex-direction: column;
        }
      
        .overlay__inner {
          background: #ffffff;
          padding: 20px;
          box-sizing: border-box;
          max-width: 80%;
          max-height: 80vh;
          overflow: auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      
        .overlay__inner img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
      
        .close {
          position: absolute;
          top: 0px;
          right: 0px;
          width: 120px;
          background: none;
          outline: 0;
          background-color: transparent;
          /* border: 1px solid #ffffff; */
          border: none;
          color: black;
          padding: 10px;
          text-transform: uppercase;
          z-index: 1001;
          
        }
      
        .close:hover {
          
          color: #7451eb;
        }
      
      .prev, .next {
        font-family: 'Noto Serif TC', serif;
      text-transform: uppercase;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(71, 69, 69, 0.5);
      border: none;
      color: #ffffff;
      font-weight: 700;
      font-size: 1.2em;
      padding: 10px;
      cursor: pointer;
      width: 120px;
      max-width: 100%;
      height: 100vh;
      
      }
      
      .prev {
      left: 0px;
      }
      
      .next {
      right: 0px;
      }
      .prev:hover, .next:hover {
      background-color: #b19afc;
      color: white;
      }
      
      
        /* Media Queries */
        @media (max-width: 768px) {
          #portfolio , .id-live{
            gap: 20px;
            grid-template-columns: repeat(2, 1fr);
          }
          #portfolio{
            width: 100%;
          }
          
        }
      
        @media (max-width: 480px) {
          .glass {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.6); /* Semi-transparent white */
      backdrop-filter: blur(1px); /* Creates the frosted glass effect */
      -webkit-backdrop-filter: blur(10px); /* For Safari */
      border-radius: 5px; /* Optional: if you want rounded corners */
  }
        .close-btn {
        position: absolute;
        left: -4px;
        top: 0;
        font-size: 1.3em;
        width: 200px;
        font-weight: 500;
      }
          .project{
            height: 300px;
            min-width: 100%;
            border: var(--primaryRed) solid 0.6px;
            
          }
          .glass-overlay {
          position: absolute;
          top: 100px;
          left: -60px;
          width: 250px;
          height: 250px;
          padding: 280px;
          border-radius: 50%;
          background-color: #7451eb;
          opacity: 0.9;
      }
      
          .id-live{
            grid-template-columns: minmax(300px, 1fr);
      
          }
  
          #portfolio {
            justify-content: center;
            align-items: center;
            margin: auto;
            margin-top: 20px;
            padding: 20px;
            width: 90%;
            grid-template-columns: repeat(1, minmax(300px, 1fr));
      
          }
          .app{
              width: 100%;
              margin: auto;
            }
          .grid__title {
          padding-left: 10px;
           font-weight: 500;
           font-size: 1.2em;
           background-color: transparent;
           color: #ffffff;
          }
      
          .project img {
            position: relative; /* Change position to relative for mobile */
          }
          .prev, .next {
        display: none; /* Hide prev and next buttons on small screens */
      }
        }
      </style>
      