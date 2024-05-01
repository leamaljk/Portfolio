<template>
  <div v-if="showPopup" class="popup">
    <div class="popup-inner">
      <h3>{{ popupMessage }}</h3>
      <button @click="closePopup">Close</button>
    </div>
    </div>
    <div id="container">
      <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="form.firstName" required>
      </div>
      <div class="form-group">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="form.lastName" required>
      </div>
      <div class="form-group">
        <label for="email">Email Address:</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number: (not required)</label>
        <input type="tel" id="phone" v-model="form.phone" >
      </div>
      <div class="form-group">
        <label for="enquiry">Your Enquiry:</label>
        <textarea id="enquiry" v-model="form.enquiry" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="submit-btn">Submit</button>
      </div>
      
    </form>
      <div class="content">
        
        <h1>
          
          Interested in driving your business forward?
        </h1>
        <p>
            If you'd like to discuss your project, please fill out this contact form. I'll review your information and get back to you as soon as possible to discuss how I can help. 
            I'm here to answer any questions you may have and look forward to hearing from you.
        </p>
        <div class="logo">
          <router-link to="/" class="nav-link" @click="closeNav"> 
          <img src="@/assets/images/titles/12.webp" alt="PearlDesign Logo" >
          </router-link>
        </div>
<!-- TrustBox widget - Review Collector -->
<!-- <div class="trustpilot-widget" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="65d24fbc801b6ca4358e2aaf" data-style-height="60px" data-style-width="100%">
  <a href="https://uk.trustpilot.com/review/pearldesign2024.com" target="_blank" rel="noopener">Trustpilot</a>
</div> -->
<!-- End TrustBox widget -->
      </div>
     
    </div>
  </template>



  <script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        enquiry: ''
      },
      showPopup: false,
      popupMessage: ''
    };
  },
  methods: {
    async submitForm() {
      const serviceEndpoint = 'https://formspree.io/f/mqkrblqo';  
      try {
        const response = await fetch(serviceEndpoint, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        });

        if (response.ok) {
          this.popupMessage = 'Thanks for letting me know! I will get back to you as soon as possible.';
          this.showPopup = true;
          this.form = { firstName: '', lastName: '', email: '', phone: '', enquiry: '' }; // Reset form
        } else {
          this.popupMessage = 'Failed to send a message. Please try again.';
          this.showPopup = true;
        }
      } catch (error) {
        this.popupMessage = 'An error occurred. Please try again.';
        this.showPopup = true;
      }
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};

  </script>
  
  <style scoped>

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-inner {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
.popup-inner h3{
  font-weight: 400;
  
}

.closePopup{
  
    background-color: var(--secondary);
    color: var(--primaryRed);
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
}

  .trustpilot-widget{
    margin: 20px;
    align-items: flex-start;
  }
  
  .logo {
  display: flex;
  justify-content: center; /* This will center the image horizontally */
  align-items: center; /* This will center the image vertically */
  height: 400px; /* You need a specific height to align items in the center vertically */
}



h1{
    font-weight: 800;
    font-size: 2.5em;
    color: #4a4949;
    margin-bottom: 1rem;
    letter-spacing: 1.5px;
    animation: fadeInUp 2s ease;
    text-align: left;
}

.logo img {
  max-width: 100%;
  max-height: 100%;
}

  
  #container {
    background:var(--secondary);
  color: #333;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
   justify-content: center;
    padding: 40px 20px;
  }
  
  .content {
   text-align: center;
  align-items: center;
  justify-content: center;
  align-content: center;
    
    flex: 1;
    max-width: 600px;
  }

  .content h1{
    margin-top: 30px;
    text-align: center;
    color: var(--primaryRed);
    font-size: 2rem;
  }

  .content p{
    color: var(--primaryRed);
    
  }
  
  .form {
    flex: 1;
    max-width: 600px;
    align-items: flex-start;
    justify-content: center;
    margin: 20px;
  }
  
  .form-group {
    color: var(--primaryRed);
    margin-bottom: 15px;
    display: block; /* Make sure form-group is a block to contain its elements correctly */
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%; /* Full width */
    padding: 15px;
    border: 1px solid #ccc; /* Consistent border size */
    border-radius: 5px;
    transition: border-color 0.3s; /* Smooth transition for border color */
    font-family: "Raleway", sans-serif;

  }
  
  /* Style for when the user focuses on an input */
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--title); /* Focus color */
    outline: none; /* Remove default focus outline */
  }
  
  /* Style for when the user has entered valid input */
  .form-group input:valid,
  .form-group textarea:valid {
    border-bottom: 3px solid var(--title); /* Indicates valid input */
  }
  
  /* Style for when the user has entered invalid input */
  .form-group input:invalid,
  .form-group textarea:invalid {
    border-bottom: 3px solid var(--darkergray); /* Indicates invalid input */
  }
  
  button {
    padding: 10px 30px;
  font-size: 16px;
  color: var(--secondary);
  font-weight: 600 ;
  background: var(--white);
  border: none;
  cursor: pointer;
  text-transform: uppercase;

}

button:hover {
  background: var(--title);
  color: var(--primaryRed);

}
  /* Responsive design styles */
  @media (max-width: 768px) {
    #container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      text-align: justify;
    }
    

    .logo img{
      width: 300px;
      padding: 0;
      display: flex;
      flex-direction: column;
    }

    .logo{
      display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

   
    .content h1 
    {
      font-size: 2rem;
      text-align: center;
    }
    .content p 
    {
      font-size: 1rem;
    }
    
    .content, .form {

      width: 100%; /* On small screens, allow the content and form to fill the available space */
    }
  }
  </style>
  