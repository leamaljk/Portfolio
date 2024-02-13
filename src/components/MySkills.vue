<template>
  <div id="skills-wrapper">
    <div class="skills-block">
      <h2 class="skills-heading">Hard Skills</h2>
      <div class="skills-container">
        <span class="skill hard" v-for="skill in hardSkills" :key="skill">{{ skill }}</span>
      </div>
    </div>
    <div class="skills-block">
      <h2 class="skills-heading">Soft Skills</h2>
      <div class="skills-container">
        <span class="skill soft" v-for="skill in softSkills" :key="skill">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hardSkills:[
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
        'Self-motivated', 'Critical Thinking','Kind', 'Interpersonal Skills',
        'Cooperative', 'Considerate',  'Collaboration',
        'Attention to detail', 'Organized'

        ],
    };
  },
};
</script>

<style scoped>
#skills-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.skills-block {
  margin-bottom: 2rem;
}

.skills-heading {
  font-family: 'DM Serif Display', serif;
  line-height: 1.6;
  color: var(--title);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-align: left;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill {
  font-family: 'Noto Serif TC', serif;
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  white-space: nowrap;
}

.hard {
  background-color: #b19afc;
  color: white;
  border: 1.3px solid #fff;

}

.soft {
  background-color: #fff;
  color: #564f70;
  border: 1px solid #564f70;
}

.skill:hover {
  /* transform: translateX(-5px); */
  background-color: var(--primaryRed);
  color: #fff;
}

@media (max-width: 768px) {
  .skills-block {
    width: 100%;
  }
}
</style>
