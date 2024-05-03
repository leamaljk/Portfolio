<template>
 
 <div class="center-title">
      <img src="@/assets/images/titles/11.webp" alt="PearlDesign" class="titles" >
    </div>
    <div id="feedback-container">
    <p>Please share your thoughts on your recent experience with me.<br>To leave a review you need to Sign Up with Canny to verify your review. <br> Thank you for your time.
      <br><img src="../assets/images/NoviLogo/8.webp" alt="My profile photo" class="profile-title" />

    </p>
    <div data-canny />
  </div>
  </template>
  
  <script>
  /* global Canny */
  const BoardToken = '7429456d-9ad5-354b-af62-0b78f056c6c7';
  
export default {
  mounted() {
    (function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(window,document,"canny-jssdk","script");

    Canny('render', {
      boardToken: BoardToken,
      basePath: null, // See step 2
      ssoToken: null, // See step 3,
      theme: 'light', // options: light [default], dark, auto
    });
  }
}
</script>
  
  <style scoped>
  
 body { 
  font-family: 'Raleway', sans-serif;
}
.textV2.headingMd {
font-size: 1rem;
font-family: 'Raleway', sans-serif;
text-transform: uppercase;
}
  #feedback-container {
    font-family: "Raleway", sans-serif;
    max-width: 1200px;
    margin: auto;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
  }
  #feedback-container h1 {
    font-family: "Libre Caslon Text", serif;
    font-weight: 800;
    font-size: 3em;
    color:var(--secondary);
    margin: 3rem 0;
    letter-spacing: 1.5px;
    animation: fadeInUp 2s ease;
    text-align: center;
  }

  #feedback-container h1:hover{
    color: var(--title);
  }
  #feedback-container h2 {
    color:#333;
    text-align: center;
    
    font-weight: 200;
     
  }
  #feedback-container p {
    color: var(--darkergray);
    text-align: center;
    margin-bottom: 40px;
     
  }
  .titles {
  display: flex;
  justify-content: center; /* This will center the image horizontally */
  align-items: center; /* This will center the image vertically */
  width: 500px; /* You need a specific height to align items in the center vertically */
}

img .titles{
  justify-content: center; /* This will center the image horizontally */
  align-items: center;
}
.center-title{
  margin: 2rem auto;
  text-align: center;
  display: flex;
  justify-content: center;
}
  .profile-title {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    object-fit: cover;
    position: relative;
    top: 40px;
    margin-left: 20px;
    border: 1px dotted var(--secondary);
  }
  .profile-title:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {

    .square{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }

    .profile-title{
        position: relative;
        top: 0px;
    }
    #feedback-container h1 {
    font-size: 2rem;
  }
  #feedback-container h2 {
    font-size: 1.2rem;
  }
  .titles {
  display: flex;
  text-align: center;
  justify-content: center; /* This will center the image horizontally */
  align-items: center; /* This will center the image vertically */
  width: 300px; /* You need a specific height to align items in the center vertically */
}
}

  @media (max-width: 480px) {
    #feedback-container h1 {
    font-size: 2rem;
  }

  #feedback-container h2 {
    font-size: 1.2rem;
  }

}
</style>
