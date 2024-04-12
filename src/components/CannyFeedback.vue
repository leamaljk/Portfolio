<template>
   <div id="feedback-container">
    <h1 class="square">I Value Your Feedback 
        <img src="../assets/images/logo/square.png" alt="My profile photo" class="profile-title" />

    </h1>
    <h2>Please share your thoughts on your recent experience with me.</h2>
    <p>Please be reminded that to leave a review you need to Sign Up with Canny to verify your review. Thank you for your time.</p>
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
    background: rgba(255, 255, 255, 0.4);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  #feedback-container h1 {
    font-family: "Libre Caslon Text", serif;
    font-weight: 800;
    font-size: 2.5em;
    color: #4a4949;
    margin-bottom: 1rem;
    letter-spacing: 1.5px;
    animation: fadeInUp 2s ease;
    text-align: center;
  }
  #feedback-container h2 {
    color: var(--secondary);
    text-align: center;
    
    font-weight: 200;
     
  }
  #feedback-container p {
    color: var(--title);
    text-align: center;
    margin-bottom: 40px;
     
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
