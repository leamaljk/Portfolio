<template>
    
    <section id="portfolio">
      <div class="project">
        <img class="project__image" src="../../assets/images/projects/Booki (1).png"  />
        <p>websites</p>
        <h3 class="grid__title"> front-end</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="https://images.unsplash.com/photo-1521104955835-ba91c70d6443?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38cdeda7d073c4b6d47a5776f184cba9&auto=format&fit=crop&w=700&q=80" />
        <p>pure css</p>
        <h3 class="grid__title"> front-end</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=700&q=80" />
        <p>web apps</p>
        <h3 class="grid__title"> full-stack</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dd4d735954f33290fbf984e4eb7abe32&auto=format&fit=crop&w=700&q=80" />
        <p>daily ui</p>
        <h3 class="grid__title"> ui/ux design</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      <div class="project">
        <img class="project__image" src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c5008952226f48ed4bf5d3ea64ff545&auto=format&fit=crop&w=700&q=80" />
        <p>websites</p>
        <h3 class="grid__title"> front-end</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-0.3.5&s=a4b3dc4bee43da458f6aa5c05be6bfc4&auto=format&fit=crop&w=700&q=80"  />
        <p>pure css</p>
        <h3 class="grid__title"> front-end</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="https://images.unsplash.com/photo-1481762554390-ff5562748bdf?ixlib=rb-0.3.5&s=1b7f850b7f8f702e237b0f81c0ec0bf5&auto=format&fit=crop&w=700&q=80" />
        <p>web apps</p>
        <h3 class="grid__title"> full-stack</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?ixlib=rb-0.3.5&s=e5bf2f64858b8abe2a386b0c6df594e4&auto=format&fit=crop&w=700&q=80" />
        <p>daily ui</p>
        <h3 class="grid__title"> ui/ux design</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      <div class="overlay">
        <div class="overlay__inner">
          <button class="close">close X</button>
          <img>
        </div>
      </div>
    </section>
    </template>
    
    <script>
    export default {
      name: 'PhotoGallery',
      mounted() {
        const buttons = document.querySelectorAll('.project');
        const overlay = document.querySelector('.overlay');
        const overlayImage = document.querySelector('.overlay__inner img');
    
        function open(e) {
          overlay.classList.add('open');
          const src = e.currentTarget.querySelector('img').src;
          overlayImage.src = src;
        }
    
        function close() {
          overlay.classList.remove('open');
        }
    
        buttons.forEach(button => button.addEventListener('click', open));
        overlay.addEventListener('click', close);
      }
    };
    </script>
    



    <style>
    @import url('https://fonts.googleapis.com/css?family=Inconsolata|Merriweather');
  
    body {
      font-family: 'Inconsolata', monospace;
      margin: 0;
    }
  
    button {
      cursor: pointer;
    }
  
    #portfolio {
      width: 100%;
      min-height: 100vh;
      background: #ffffff;
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, minmax(200px, 1fr));
      grid-template-rows: 1fr 1fr;
      grid-gap: 2px;
    }
  
    .project {
      position: relative;
      background: #b19afc;
      overflow: hidden;
    }
  
    .project img {
      position: absolute;
      opacity: 0.9;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .project p {
      position: absolute;
      text-align: center;
      width: 100%;
      padding: 1em 0;
      text-transform: uppercase;
      letter-spacing: 2px;
      z-index: 3;
    }
  
    .grid__title {
      position: absolute;
      width: 100%;
      text-align: center;
      white-space: nowrap;
      bottom: 0;
      font-weight: 100;
      font-size: 0.8em;
      z-index: 3;
      text-transform: uppercase;
      color: #474545;
      letter-spacing: 2px;
    }
  
    .project:hover .grid__overlay {
      transform: translateY(0%);
    }
  
    .grid__overlay {
      background: rgba(177, 154, 252, 0.9);
      height: 100%;
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      position: relative;
      display: grid;
      justify-items: center;
      align-items: center;
      transform: translateY(101%);
      transition: all 0.3s ease-in-out;
    }
  
    .grid__overlay button {
      background: none;
      outline: none;
      font-weight: 100;
      letter-spacing: 2px;
      border: 1px solid #ffffff;
      color: #ffffff;
      text-transform: uppercase;
      padding: 10px;
    }
  
    .grid__overlay button:hover {
      background: #ffffff;
      color: #7451eb;
      transform: scale(1.05);
    }
  
    .overlay {
      position: fixed;
      background: rgba(71, 69, 69, 0.7);
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  
    .overlay.open {
      display: flex;
    }
  
    .overlay__inner {
      background: #ffffff;
      padding: 20px;
      box-sizing: border-box;
      max-width: 80%;
      max-height: 80vh;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .overlay__inner img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  
    .close {
      position: absolute;
      top: 3px;
      right: 10px;
      background: none;
      outline: 0;
      background-color: #ffffff;
      border: 1px solid #7451eb;
      padding: 15px;
      text-transform: uppercase;
      letter-spacing: 2px;
      z-index: 1001;
    }
  
    .close:hover {
      
      color: #7451eb;
    }
  
    /* Media Queries */
    @media (max-width: 768px) {
      #portfolio {
        gap: 20px;
        
        grid-template-columns: repeat(2, 1fr);
      }
    }
  
    @media (max-width: 480px) {
      #portfolio {
        gap: 20px;
       
        grid-template-columns: 1fr;
      }
  
      .project img {
    
        position: relative; /* Change position to relative for mobile */
      }
    }
  </style>
  