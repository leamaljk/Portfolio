<template>
  <div class="terms-container">
    <button class="toggle-button" @click="toggleShowTerms">Privacy Policy & Terms and Conditions</button>
    <div v-if="showTerms" class="terms-content">
      <h1 class="title">Privacy Policy & Terms and Conditions</h1>
      <p class="last-updated">Last updated: 1st of January 2024</p>
      <p>By using pearldesign2024.com and the services and information offered on this website, you are agreeing to these terms and conditions.</p>
      <p>Please make sure you agree with these terms and conditions, which you will be directed to read prior to making your purchase.</p>
      
      <h2 class="subtitle">Definitions</h2>
      <p><strong>Services</strong> means Web Design and Branding services.</p>
      <p><strong>The Website</strong> means pearldesign2024.com.</p>
      <p><strong>Me</strong> refers to Pearl Design as the sole proprietor and operator of the website.</p>
      
      <h2 class="subtitle"><strong>Accuracy of Information</strong>:</h2>
      <p>While I strive to ensure the accuracy of the information on my website, I cannot guarantee or warrant the correctness, reliability, or completeness of the data, content, or information provided.</p>

      <h2 class="subtitle"><strong>Use of the Website</strong>:</h2>
      <p>You agree to use the site according to all applicable laws and regulations. Unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable behavior is strictly prohibited. I reserve the right to remove such content and/or terminate your access without notice.</p>

      <h2 class="subtitle"><strong>Indemnification</strong>:</h2>
      <p>You agree to indemnify, defend and hold me harmless from any liability, loss, claim, and expense, including reasonable attorney's fees, related to your violation of this Agreement or use of the Site.</p>

      <h2 class="subtitle"><strong>Intellectual Property</strong>:</h2>
      <p>The content, layout, design, data, databases, and graphics on this website are protected by intellectual property laws. You may not copy, reproduce, or use such material except as permitted by law or with my prior written consent.</p>

      <h2 class="subtitle"><strong>Copyright and Trademarks</strong>:</h2>
      <p>All content and graphics on this site are owned by me unless otherwise stated. All trademarks that appear on the site are the property of their respective owners.</p>

      <h2 class="subtitle"><strong>Links to Third-Party Websites</strong>:</h2>
      <p>I may provide links to third-party websites for your convenience. Such links do not signify endorsement, and I am not liable for any loss or damage incurred from their use.</p>

      <h2 class="subtitle"><strong>Limitation of Liability</strong>:</h2>
      <p>I will not be liable for any damages that arise from the use of my website or services, beyond the extent permitted by law.</p>

      <h2 class="subtitle"><strong>Information Collection and Use</strong>:</h2>
      <p>The personal information collected is subject to the terms of my Privacy Policy.</p>

      <h2 class="subtitle"><strong>Confidentiality</strong>:</h2>
      <p>Your personal information will be treated as confidential and handled in accordance with my Privacy Policy.</p>

      <h2 class="subtitle"><strong>Governing Law</strong>:</h2>
      <p>These terms and conditions are governed by the laws of the United Kingdom and any disputes will be subject to the exclusive jurisdiction of the courts of the United Kingdom.</p>

      <h2 class="subtitle"><strong>Modification</strong>:</h2>
      <p>I reserve the right to modify these terms and conditions at any time without notice.</p>

      
      <PaymentStructure></PaymentStructure>
      <p>If you enlist my services, you will be provided with a contract of service at the time of booking a design date. This outlines the full Terms & Conditions we will be bound by before, during, and after your website design process.</p>
    </div>
  </div>
</template>

<script>
import PaymentStructure from './PaymentStructure.vue';


export default {
  components: {
    PaymentStructure,
  },
  data() {
    return {
      showTerms: false
    };
  },
  methods: {
    toggleShowTerms() {
      this.showTerms = !this.showTerms;
    }
  }
}
</script>

<style>
.terms-container {
  text-align: center;
  justify-content: center;
  margin: 1rem;
}

.toggle-button {
  background-color: var(--secondary);
  color: white;
  border: none;
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.toggle-button:hover {
  background-color: var(--title);
}

.terms-content {
  border: 1px solid var(--secondary);
  padding: 1rem;
  border-radius: 5px;
  background-color: white;
}

.title {
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.subtitle {
  color: var(--secondary);
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

.last-updated {
  font-style: italic;
  color: var(--secondary);
  margin-bottom: 1rem;
}

p {
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 1rem;
}
</style>
