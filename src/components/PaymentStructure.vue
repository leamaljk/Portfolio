<template>
    <div class="policy-container">
      <h2 @click="toggle('paymentStructure')">Payment Structure</h2>
      <div v-if="visible.paymentStructure">
        <p>Let's keep our payment plan straightforward: if our preferred methods <strong>differ</strong>, we'll simply split the payment into two installments. I'm all for making things easier for my clients.</p>
        <p>Payments for our web design services are divided into two main installments to make the process transparent and manageable for both parties:</p>
        <ul>
          <li><strong>First Installment (50% of the Total Fee):</strong> This installment is required to kick off the project. It covers the initial consultations, detailed project planning, and any preliminary designs or frameworks we create based on our discussions. This payment signals your agreement to the project's scope, terms, and understanding of your needs.</li>
          <li><strong>Second Installment (50% of the Total Fee):</strong> The second installment is due before we start the actual development phase of your website. This payment secures your commitment to move forward with the build, based on the plans and designs approved during the initial phase.</li>
        </ul>
      </div>
  
      <h2 @click="toggle('cancellationByClient')">Cancellation by the Client</h2>
      <div v-if="visible.cancellationByClient">
        <h3 class="h2second">Before the Second Installment:</h3>
        <p>If you decide to cancel the project after making the first installment but before the second installment is paid:</p>
        <ul>
          <li><strong>Refund:</strong> You will be entitled to a refund of 25% of the total project fee. This means half of your initial installment will be returned to you.</li>
          <li><strong>Non-Refundable:</strong> The remaining 25% of the total fee covers the time and resources Pearl Design has invested in the project up to that point, including any work done during the planning and preliminary design phase.</li>
        </ul>
        <h3 class="h2second"> After the Second Installment:</h3>
        <p>Once the second installment is paid, indicating that the build phase has begun, you may still cancel, but:</p>
        <ul>
          <li><strong>Refund: </strong> Refunds may not be available, as these funds cover the development work already underway or completed.</li>
        </ul>
      </div>
  
      <h2 @click="toggle('cancellationByPearlDesign')">Cancellation by Pearl Design</h2>
      <div v-if="visible.cancellationByPearlDesign">
        <p>If Pearl Design must cancel the project for any unforeseen reason:</p>
        <ul>
          <li><strong>Before Starting the Build Phase:</strong> You will receive a full refund of any payments made, including both the first and second installments.</li>
          <li><strong>After Starting the Build Phase:</strong> We will calculate a fair refund based on the percentage of the project completed at the time of cancellation. This ensures you only pay for the work that has been done.</li>
        </ul>
      </div>
  
      <h2 @click="toggle('generalTerms')">General Terms</h2>
      <div v-if="visible.generalTerms">
        <ul>
          <li>All intentions to cancel must be communicated in writing to ensure clarity and record-keeping.</li>
          <li>If the project is canceled, Pearl Design will provide any work completed up to the point of cancellation for which you have paid.</li>
          <li>Outstanding invoices for work completed must be settled even in the event of cancellation.</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: {
          paymentStructure: false,
          cancellationByClient: false,
          cancellationByPearlDesign: false,
          generalTerms: false,
        },
      };
    },
    methods: {
      toggle(section) {
        this.visible[section] = !this.visible[section];
      },
    },
  };
  </script>
  
  <style scoped>
  .policy-container h2 {
    cursor: pointer;
    border-bottom: dotted var(--title) 1px;
  }
  .policy-container ul {
    list-style-type: none;
  }
.h2second {
    color: var(--title);
    font-size: 1.6rem;    
      font-weight: 500;
}

h2{
    color: var(--secondary);
    font-size: 1.8rem;    
      font-weight: 500;
}

 
  </style>
  