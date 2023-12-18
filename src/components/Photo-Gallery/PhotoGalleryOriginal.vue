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
        <button class="prev">&#x25C0; Prev</button>
        <button class="next">Next &#x25B6; </button>
        <button class="close">close &#x2718;</button>
        <img>
      </div>
    </div>
  </section>

  <section class="live-website">
<div class="content">
  <h2>Booki</h2>
  <h3>Turn Mock-ups Into a Web Page with HTML and CSS </h3>
  <p>
1 . Integrating web content according to a model validated comments:
<br>
Deliverable : HTML Code and CSS
<br>
Both codes are validated if :
<br>
The Web page is made according to the model : Every elements of the model is integrated in the project.
<br>
Images are in a separated file.
<br>
Fonts are called and used via Google Font.
<br>
HTML code doesn't trigger any warning with W3C validator (warnings may appear).
<br>
No HTML code is duplicated, For example to simplify responsive adaptation.
<br>
HTML code use semantic tags that refers to thir content.
<br>
Project contains these tags : header, nav, section and footer.
<br>
Project uses Flexbox (not Grid).
<br>
Model style is respected thanks to CSS.
<br>
Images ratio is respected.
<br>
CSS code doesn't trigger any warning with W3C validator (warnings may appear).</p>
  <a href="https://leamaljk.com/Booki/" target="_blank" class="live-link-button">Click Here</a>
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


/* LIVE SECTION */
.live-website {
font-family: 'Tenor Sans', sans-serif;
margin-top: 100px;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
background-color: #b19afc; /* Example background color */
color: #ffffff; /* Font color */
text-align: center;
padding: 50px;
box-sizing: border-box; /* Include padding in the box's dimension */
}

.live-website .content {
max-width: 600px; /* Max width for the content area */
margin: 0 auto; /* Center the content area horizontally */
}

.live-website h2 {
font-size: 2.5em; /* Large font size for the section heading */
margin-bottom: 20px; /* Spacing between the heading and the content */
}

.live-website p {
font-size: 1em; /* Standard font size for the content */
line-height: 1.6; /* For better readability */
margin-bottom: 30px; /* Spacing between the content and the button */
}

.live-website .live-link-button {
display: inline-block;
background-color: transparent; 
color: #ffffff;
border: 2px solid white;
padding: 10px 20px;
font-size: 1em;
text-decoration: none; /* Remove underline from links */
cursor: pointer;
transition: background-color 0.3s ease;
}

.live-website .live-link-button:hover {
background-color:var(--primaryRed); /* Darker shade on hover for the button */
}

@media (max-width: 768px) {
.live-website {
  padding: 30px; /* Reduce padding on smaller screens */
}

.live-website h2 {
  font-size: 2em; /* Adjust font size for smaller screens */
}
}

@media (max-width: 480px) {
#live-website .content {
  padding: 0 15px; /* Add padding on the sides for very small screens */
}

#live-website h2 {
  font-size: 1.5em; /* Further adjust font size for very small screens */
}

#live-website .live-link-button {
  padding: 8px 16px; /* Adjust button padding for small screens */
}
}

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
    opacity: 1;
  }

  .project img {
    position: absolute;
    opacity: 0.9;
    width: 220%;
    height: 100%;
    object-fit: cover;
    /* background: rgba(252, 154, 231, 0.9); */
    
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
    top: 0px;
    right: 0px;
    width: 120px;
    background: none;
    outline: 0;
    background-color: transparent;
    /* border: 1px solid #ffffff; */
    border: none;
    color: black;
    padding: 10px;
    text-transform: uppercase;
    z-index: 1001;
    
  }

  .close:hover {
    
    color: #7451eb;
  }

.prev, .next {
font-family: 'Inconsolata', monospace;
text-transform: uppercase;
position: absolute;
top: 50%;
transform: translateY(-50%);
background: rgba(71, 69, 69, 0.5);
border: none;
color: #ffffff;
font-weight: 700;
font-size: 1.2em;
padding: 10px;
cursor: pointer;
width: 120px;
max-width: 100%;
height: 100vh;

}

.prev {
left: 0px;
}

.next {
right: 0px;
}
.prev:hover, .next:hover {
background-color: #b19afc;
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
      
      grid-template-columns: minmax(300px, 1fr);
    }

    .project img {
  
      position: relative; /* Change position to relative for mobile */
    }
    .prev, .next {
  display: none; /* Hide prev and next buttons on small screens */
}
  }
</style>
