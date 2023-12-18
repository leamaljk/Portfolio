<template>
    
    <section id="portfolio">
      <div class="project">
        <img class="project__image" src="../../assets/images/projects/Booki (5).png"  />
        <p>websites</p>
        <h3 class="grid__title"> front-end</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="../../assets/images/projects/Booki (3).png"  />
        <p>pure css</p>
        <h3 class="grid__title"> front-end</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="../../assets/images/projects/Booki (2).png"  />
        <p>web apps</p>
        <h3 class="grid__title"> full-stack</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="../../assets/images/projects/Booki (1).png"  />
        <p>daily ui</p>
        <h3 class="grid__title"> ui/ux design</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      <div class="project">
        <img class="project__image" src="../../assets/images/projects/Booki (6).png"  />
        <p>websites</p>
        <h3 class="grid__title"> front-end</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
      <div class="project">
        <img class="project__image" src="../../assets/images/projects/Booki (4).png"  />
        <p>pure css</p>
        <h3 class="grid__title"> front-end</h3>
        <div class="grid__overlay">
          <button class="viewbutton">view more</button>
        </div>
      </div>
      
     
      <div class="overlay">
        <div class="overlay__inner">
          <button class="prev">← Prev</button>
          <button class="next">Next →</button>
          <button class="close">close X</button>
          <img>
        </div>
      </div>
    </section>
    </template>
    
    <script>
    export default {
  name: 'PhotoGallery',
  data() {
    return {
      currentIndex: 0,
      images: [],
      touchStartX: 0,
      touchEndX: 0,
    };
  },

  mounted() {
    const buttons = document.querySelectorAll('.project');
    const overlay = document.querySelector('.overlay');
    const overlayImage = document.querySelector('.overlay__inner img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    this.images = Array.from(document.querySelectorAll('.project__image')).map(img => img.src);

    const open = (index) => {
      this.currentIndex = index;
      overlay.classList.add('open');
      overlayImage.src = this.images[index];
    };

    const close = () => {
      overlay.classList.remove('open');
    };

    const showPrevImage = () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        overlayImage.src = this.images[this.currentIndex];
      }
    };

    const showNextImage = () => {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        overlayImage.src = this.images[this.currentIndex];
      }
    };

    buttons.forEach((button, index) => button.addEventListener('click', () => open(index)));
    overlay.addEventListener('click', close);
    prevButton.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrevImage();
    });
    nextButton.addEventListener('click', (e) => {
      e.stopPropagation();
      showNextImage();
    });


    const handleTouchStart = (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchMove = (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = () => {
      if (this.touchStartX - this.touchEndX > 50) {
        showNextImage();
      } else if (this.touchEndX - this.touchStartX > 50) {
        showPrevImage();
      }
    };

    overlayImage.addEventListener('touchstart', handleTouchStart);
    overlayImage.addEventListener('touchmove', handleTouchMove);
    overlayImage.addEventListener('touchend', handleTouchEnd);
 
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
      grid-template-columns: repeat(3, minmax(300px, 1fr));
      grid-template-rows: 1fr 1fr;
      grid-gap: 20px;
    }
  
    .project {
      position: relative;
      background: #b19afc;
      overflow: hidden;
      border-top: #7451eb 2px solid;
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

    .prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #ffffff;
  border: 1px solid #7451eb;
  padding: 10px;
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.prev:hover, .next:hover {
  background-color: #7451eb;
  color: white;
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
  
  .prev, .next {
    display: none; /* Hide prev and next buttons on small screens */
  }

  .overlay__inner {
    position: fixed; /* Fixed position to stay in place during scroll */
    top: 2%; /* Center vertically */
    left:1px; /* Center horizontally */
    width: 340px; /* Set a max width for inner content */
    height: auto; /* Auto height based on content */
  }
  .project img {
    
    position: relative; /* Change position to relative for mobile */
  }
  .close {
    padding: 5px;
    font-size: 12px;
  }
}

  </style>
  