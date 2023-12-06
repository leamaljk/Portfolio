<template>
    <div id="skills-wrapper">
      <div class="skills-block">
        <h2 class="skills-heading">Hard Skills</h2>
        <div class="skills-grid">
          <div class="hard" v-for="skill in hardSkills" :key="skill">{{ skill }}</div>
        </div>
      </div>
      <div class="skills-block">
        <h2 class="skills-heading">Soft Skills</h2>
        <div class="skills-grid">
          <div class="soft" v-for="skill in softSkills" :key="skill">{{ skill }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hardSkills: [
          'HTML',
          'CSS',
          'JavaScript',
          'Animation',
          'SASS',
          'Vue',
          'React',
          'Node.js',
          'Express',
          'MongoDb',
          'Mongoose',
          'PostgreeSql',
          'PgAdmin 4',
          'GIT',
          'GitHub',
          'RESTful Api',
          'SEO',
          'OWASP',
          'VS Code'
          
        ],
        softSkills: [
          
        'Teamwork', 'Communication', 'Problem Solving',
        'Self-motivated', 'Critical Thinking', 'Interpersonal Skills',
        'Cooperative', 'Considerate', 'Kind', 'Collaboration',
        'Attention to detail', 'Organized'

        ],
      };
    },
  };
  </script>
  
  <style scoped>
  #skills-wrapper {
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }
  
  .skills-block {
    width: 45%; 
  }
  
  .skills-heading {
    font-family: 'Tenor Sans', sans-serif;
    color: #747070;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: left;
    animation: fadeInUp 1s ease;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 10px;
  }
  
  .soft:hover{
    background-color: #d7d4d4;

  }
  .hard:hover {
    background-color: #d7d4d4;
}

  .hard {
    font-family: 'Tenor Sans', sans-serif;
    background-color:#f00707; /* Adjust the color to match your design */
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
  }
  .soft{
    font-family: 'Tenor Sans', sans-serif;
    background-color:#fff; /* Adjust the color to match your design */
    color: #f00707;
    padding: 10px 0;

    border-radius: 5px;
    text-align: center;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    #skills-wrapper {
      flex-direction: column;
    }
  
    .skills-block {
      width: 100%;
    }
  }
  </style>
  