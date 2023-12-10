<template>
    <header>
      <!-- ... other header elements ... -->
      <!-- <i class="fas fa-moon theme-toggle" @click="toggleTheme"> <span class="theme">Click for a Theme</span></i> -->
    </header>
    <!-- ... rest of your component ... -->
  </template>
  
  <script>
  export default {
    data() {
      return {
        darkTheme: false,
      };
    },
    methods: {
      toggleTheme() {
        this.darkTheme = !this.darkTheme;
        document.body.classList.toggle('dark-theme', this.darkTheme);
      },
    },
  };
  </script>
  
  <style>
  .theme{
    margin-left: 10px;
    font-size: 20px;
    font-family: 'Tenor Sans', sans-serif;
    font-weight: 100;
  }
  .theme-toggle {
    cursor: pointer;
    position: absolute;
    top: 45px;
    left: 25px;
    font-size: 26px;
    color: var(--primaryRed);
  }
  
  /* Dark theme styles */
  body.dark-theme {
    background-color: #2e293e;

  }

  @media (max-width: 768px) {
    .theme-toggle{
        position: absolute;
        top: 74px;
        left: 320px;
    }

    .theme{display: none;
  }
}

  </style>
  