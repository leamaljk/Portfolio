<template>
    <div id="container">
      <div class="content">
        <div class="logo">
          <img src="@/assets/images/logo/LogoSign (3).png" alt="PearlDesign Logo" >
        </div>
        <h1>
          Pearl Design - Web Design Services
        </h1>
        <p>Interested in driving your business forward?
            If you'd like to discuss your project, please fill out this contact form. I'll review your information and get back to you as soon as possible to discuss how I can help. 
            I'm here to answer any questions you may have and look forward to hearing from you.
        </p>
<!-- TrustBox widget - Review Collector -->
<div class="trustpilot-widget" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="65d24fbc801b6ca4358e2aaf" data-style-height="60px" data-style-width="100%">
  <a href="https://uk.trustpilot.com/review/pearldesign2024.com" target="_blank" rel="noopener">Trustpilot</a>
</div>
<!-- End TrustBox widget -->
      </div>
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
        }
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
            alert('Thanks for letting me know! I will get back to you as soon as possible.');
            this.form = { firstName: '', lastName: '', email: '', phone: '', enquiry: '' }; // Reset form
          } else {
            alert('Failed to send a message. Please try again.');
          }
        } catch (error) {
          alert('An error occurred. Please try again.');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .trustpilot-widget{
    margin: 20px;
    align-items: flex-start;
  }
  
  .logo {
  display: flex;
  justify-content: center; /* This will center the image horizontally */
  align-items: center; /* This will center the image vertically */
  height: 160px; /* You need a specific height to align items in the center vertically */
  margin: 20px;
}

.logo img {
  max-width: 100%;
  max-height: 100%;
}

  
  #container {
    background-color: #333;
  color: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
   justify-content: center;
    padding: 40px 20px;
  }
  
  .content {
    align-items: center;
    justify-content:center;
    flex: 1;
    max-width: 600px;
  }
  
  .form {
    flex: 1;
    max-width: 600px;
    align-items: flex-start;
    justify-content: center;
    margin: 20px;
  }
  
  .form-group {
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
    padding: 10px;
    border: 1px solid #ccc; /* Consistent border size */
    border-radius: 5px;
    transition: border-color 0.3s; /* Smooth transition for border color */
    font-family: "Libre Caslon Text", serif;

  }
  
  /* Style for when the user focuses on an input */
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #5C3D99; /* Focus color */
    outline: none; /* Remove default focus outline */
  }
  
  /* Style for when the user has entered valid input */
  .form-group input:valid,
  .form-group textarea:valid {
    border-bottom: 3px solid green; /* Indicates valid input */
  }
  
  /* Style for when the user has entered invalid input */
  .form-group input:invalid,
  .form-group textarea:invalid {
    border-bottom: 3px solid goldenrod; /* Indicates invalid input */
  }
  
  button {
  padding: 10px 30px;
  font-size: 16px;
  color: #fff;
  font-weight: 600 ;
  background: linear-gradient(
        135deg,
        #e6c146 0%, /* Lighter shade of gold */
        #d3af37 25%, /* Your specified gold color */
        #b8972c 50%, /* Darker shade of gold */
        #d3af37 75%, /* Your specified gold color again */
        #e6c146 100% /* Lighter shade of gold to finish */
    );
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
    background: linear-gradient(
        135deg,
        #e6c146c9 0%, /* Lighter shade of gold */
        #d3af37c6 25%, /* Your specified gold color */
        #b8972cc4 50%, /* Darker shade of gold */
        #d3af37c3 75%, /* Your specified gold color again */
        #e6c146c5 100% /* Lighter shade of gold to finish */
    );

}
  /* Responsive design styles */
  @media (max-width: 768px) {
    #container {
      flex-direction: column;
      align-items: center;
    }
    
    .content, .form {
      max-width: 100%; /* On small screens, allow the content and form to fill the available space */
    }
  }
  </style>
  