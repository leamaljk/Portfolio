<template>
    <div class="cookie-consent-wrapper" v-if="isVisible">
      <div class="cookie-consent-modal">
        <p>This website uses cookies to ensure you get the best experience on our website. </p>
        <button @click="closeModal">Got it!</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: true,
      };
    },
    methods: {
      closeModal() {
        this.isVisible = false;
      }
    }
  }
  </script>
  
  <style scoped>
  .cookie-consent-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure it's above other content */
  }
  
  .cookie-consent-modal {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 90%; /* Responsiveness */
    text-align: center;
  }
  
  button {
    background-color: var(--secondary);
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: var(--title);
  }
  </style>
  