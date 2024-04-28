<template>
    <div class="accordion">
      <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
        <button class="accordion-button" @click="toggle(index)">
          {{ faq.question }}
          <span class="toggle-icon">{{ faq.open ? '-' : '+' }}</span>
        </button>
        <div v-show="faq.open" class="accordion-content">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: 'Web Development Services Tailored to Your Needs',
            answer: 'As a freelance web developer, I specialize in designing custom websites that effectively support your business objectives. I offer two primary packages: Standard and Premium. Each is designed to cater to different needs, whether you are looking to establish a new online presence or enhance an existing one.',
            open: false
          },
          {
            question: 'What You Can Expect from My Services?',
            answer: 'I value transparency and efficiency. All pricing is upfront and all-inclusive, ensuring you understand exactly what you are getting without any hidden fees. Both of my packages include comprehensive CMS training and documentation, empowering you to manage your site with confidence.',
            open: false
          },
          {
            question: 'Do you want detailed quote at no cost? ',
            answer: 'If you\'re interested in exploring which package might be right for you, I\'m happy to provide a detailed quote at no cost. This free quote will help you understand the potential costs and benefits without any obligation.',
            open: false
          },
          {
            question: 'Choose the package that best fits your requirements ',
            answer: ' Standard package for essential web needs or the Premium package for more advanced features and design customizations. Let\'s work together to build a website that not only meets but exceeds your expectations.',
            open: false
          },
          
        
          // ... additional FAQs
        ]
      };
    },
    methods: {
      toggle(index) {
        this.faqs[index].open = !this.faqs[index].open;
        // Optionally: Close all other accordion items when one is opened
        this.faqs.forEach((faq, i) => {
          if (i !== index) faq.open = false;
        });
      }
    }
  };
  </script>
  
  <style scoped>

.accordion{
width: 70%;
align-items: center;
justify-content: center;
margin: auto;
margin-bottom: 3rem;
font-family: "Raleway", sans-serif;

}
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  padding: 0 10px; /* Adjust padding here to match the closed state */
  background: rgba(255, 255, 255, 0.7);
  font-family: "Raleway", sans-serif;
  border: none;
}

/* New styles for when the accordion content is open */
.accordion-item .accordion-content {
  max-height: 1200px; /* Set a large enough max-height to accommodate the content */
  padding: 28px; /* Add padding to create space around the content */
}
  .accordion-item {
    font-family: "Raleway", sans-serif;
    margin-bottom: 10px;
    /* border-bottom: 2px solid var(--title); */
    
  }
  
  .accordion-button {
    font-family: "Raleway", sans-serif;
     background: rgba(255, 255, 255, 0.6);
    color: var(--secondary);
    cursor: pointer;
    padding: 12px;
    margin-left: 20px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.4s ease;
    font-size: 20px;
  font-weight: 600;
  border-left: 5px solid var(--title);

  }
  
  .accordion-button:hover {
    background-color: var(--primaryRed);
  }

  .accordion-button:active {
    background-color: var(--darkergray);
  }
  

  
  .toggle-icon {
    font-size: 26px;
    font-weight: bold;
    color: var(--secondary);
  }
  
  @media (max-width: 768px) {
    .accordion{
width: 90%;
  }
  .accordion-button {
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  .accordion{
width: 90%;

  }
  .accordion-button {
    margin-left: 0;
  }
}

  </style>
  