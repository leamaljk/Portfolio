<template>
  <header class="fixed-header" :class="{ 'hide-nav': !navVisible }">
      <div class="container">
          <button class="hamburger" :class="{'is-active': navIsActive}" @click="toggleNav">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
          </button>
          <nav class="top-bar" :class="{ 'is-active': navIsActive }">
              <ul>
                  <li class="nav-logo">
                      <router-link to="/" @click="closeNav">
                      </router-link>
                  </li>
                  <li><router-link to="/" class="nav-link" @click="closeNav"> <img class="logo" src="@/assets/images/NoviLogo/13.webp" alt="PearlDesign Logo" ></router-link> </li>
                  <li><router-link to="/" class="nav-link" @click="closeNav">Home</router-link></li>
                  <li><router-link to="/#web-packages" class="nav-link" @click="closeNav">Web packages</router-link></li>
                  <li><router-link to="/#portfolio" class="nav-link" @click="closeNav">Portfolio</router-link></li>
                  <li><router-link to="/#about-me" class="nav-link" @click="closeNav">About Me</router-link></li>
                  <li><router-link to="/#feedback-container" class="nav-link" @click="closeNav">Feedback</router-link></li>
                  <li><router-link to="/#container" class="nav-link" @click="closeNav">Contact</router-link></li>
              </ul>
          </nav>
      </div>
  </header>
  </template>
  
  <script>
  export default {
      data() {
          return {
              navIsActive: false,
              lastScrollPosition: 0,
              navVisible: true,
          };
      },
      methods: {
          toggleNav() {
              this.navIsActive = !this.navIsActive;
          },
          closeNav() {
              this.navIsActive = false;
          },
          handleScroll() {
              const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
              if (currentScrollPosition < this.lastScrollPosition) {
                  this.navVisible = true;
              } else {
                  this.navVisible = false;
              }
              this.lastScrollPosition = currentScrollPosition;
          }
      },
      mounted() {
          window.addEventListener('scroll', this.handleScroll);
      },
      beforeUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
      }
  };
  </script>
  
  <style scoped>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  .hide-nav {
      transform: translateY(-100%);
      transition: transform 0.3s ease-in-out;
  }
  .fixed-header {
      background: #fff;
      color: #333;
      padding-top: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      z-index: 1000;
      position: fixed;
      margin: auto;
      width: 100%;
      top: 0;
      font-size: 1.1em;
  }
  .logo {
      width: 100px;
  }
  .container {
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .hamburger {
      font-size: 2rem;
      background: none;
      border: none;
      cursor: pointer;
      display: none;
  }
  .top-bar {
      display: flex;
      align-items: center;
  }
  .top-bar ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
  }
  .top-bar ul li {
      margin-left: 30px;
  }
  li img {
      margin-right: 10px;
  }
  .nav-link {
      text-decoration: none;
      color: #333;
      transition: color 0.4s;
  }
  .nav-link:hover {
      color: var(--secondary);
      font-weight: 500;
      transform: scale(1.2);
  }


  @media (min-width: 767px) and (max-width: 1200px) { 
    .top-bar ul li {
      margin-left: 20px;
      font-size: 16px ;  }
  
  li img {
      margin-right: 0px;
  }

  }

  @media (max-width: 768px) {
    .container{
      margin-bottom: 20px;
    }
      .hamburger {
          cursor: pointer;
          display: block;
          position: relative;
          width: 35px;
          height: 30px;
          background: transparent;
          border: none;
          outline: none;
      }
      .hamburger-line {
          display: block;
          width: 35px;
          height: 3px;
          margin-bottom: 5px;
          position: relative;
          background: #000;
          transition: all 0.3s ease-in-out;
      }
      .hamburger-line:last-child {
          margin-bottom: 0;
      }
      .hamburger.is-active .hamburger-line:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
      }
      .hamburger.is-active .hamburger-line:nth-child(2) {
          opacity: 0;
      }
      .hamburger.is-active .hamburger-line:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
      }
      .top-bar, .top-bar.is-active {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fff;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
          display: none;
      }
      .top-bar.is-active {
          display: flex;
      }
      .top-bar ul {
          flex-direction: column;
          width: 100%;
          align-items: center;
          justify-self: center;
      }
      .top-bar ul li {
          margin: 10px;
      }
      .nav-link {
          font-size: 1.2rem;
      }
  }
  @media (max-width: 480px) {
      .nav-link {
          font-size: 1rem;
      }
  }
  </style>
  