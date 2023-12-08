<template>
    <header>
      <!-- ... other header elements ... -->
      <i class="fas fa-moon theme-toggle" @click="toggleTheme"></i>
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
  .theme-toggle {
    cursor: pointer;
    position: absolute;
    top: 40px;
    left: 25px;
    font-size: 24px;
    color: #fff; /* Or any other color */
  }
  
  /* Dark theme styles */
  body.dark-theme {
    background-color: #121212;

  }

  @media (max-width: 768px) {
    .theme-toggle{
        position: absolute;
        top: 74px;
        left: 320px;
    }
}

  </style>
  