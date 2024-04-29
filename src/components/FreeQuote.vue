<template>
    <div class="accordion">
      <h1 class="faq">Frequently Asked Questions </h1>
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
            answer: 'As a web developer, I specialize in designing custom websites that effectively support your business objectives. I offer two primary packages: Standard and Premium. Each is designed to cater to different needs, whether you are looking to establish a new online presence or enhance an existing one.  Standard package for essential web needs or the Premium package for more advanced features and design customizations. Let\'s work together to build a website that not only meets but exceeds your expectations.',
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
            question: 'How long does it take to build a website?',
            answer: ' The timeline for developing a website can vary based on the complexity and scope of your project. Typically, my Standard package websites take up to 2 weeks to complete, while Premium package websites may take up to 4 weeks. My priority is quality and attention to detail, ensuring I deliver a product that aligns perfectly with your vision. The estimated time will be determined after I assess the complexity of a project. Some may take less than a week. I just want to give you an idea of what to expect. If there is any specific timeline you want your project completed within, we should determine that at the beginning of the process.',
            open: false
          },{
            question: 'How do we handle communication and project updates? ',
            answer: 'Clients receive weekly updates and have direct access to me for any queries or feedback via email, phone, or scheduled meetings. This ensures that we stay aligned on project goals and timelines.',
            open: false
          },{
            question: 'Do you offer training on how to use the website once it’s live?',
            answer: 'Absolutely! Both of my packages include comprehensive CMS training and documentation, empowering you to manage your site with confidence. These can also be conducted via video calls or provided as custom video tutorials and written guides, depending on your preference and the complexity of your site.',
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
width: 80%;
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
  }
  
  .accordion-button {
    font-family: "Raleway", sans-serif;
     background: rgba(255, 255, 255, 0.6);
    color: var(--secondary);
    cursor: pointer;
    padding: 12px 12px;
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
  font-weight: 400;
  border-bottom: 1px #ccc solid;

  }
  
  .accordion-button:hover  {
    background-color: var(--primaryRed);
  }

  .accordion-button:active {
    background-color: var(--darkergray);
  }
  
  .faq{
    color: var(--secondary);
    text-align: center;
    margin: 3rem 0;

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
    font-size: 1em;
    font-weight: 400;
  }
  .toggle-icon {
margin-left: 10px;
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
  