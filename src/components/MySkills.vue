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
          'Figma',
          'Tailwindcss',
          'Wordpress',
          'UI/UX',
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
          
        
'Communication', 'Time Management', 'Problem-Solving', 'Adaptability', 'Attention to Detail', 'Self-Motivation', 'Negotiation', 'Empathy and User-Centric Thinking', 'Networking', 'Project Management','Organized'

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
  line-height: 1.6;
  color: var(--primaryRed);
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
  padding: 0.2rem 0.6rem;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  white-space: nowrap;
}



.soft , .hard{
  background-color: #fff;
  color: #564f70;
  border: 1px solid #564f70;
}

.skill:hover {
  /* transform: translateX(-5px); */
  background: linear-gradient(
        135deg,
        #e6c146dd 0%, /* Lighter shade of gold */
        #d3af37d7 25%, /* Your specified gold color */
        #b8972ccb 50%, /* Darker shade of gold */
        #d3af37dd 75%, /* Your specified gold color again */
        #e6c146e1 100% /* Lighter shade of gold to finish */
    );
  color: #fff;
}

@media (max-width: 768px) {
  .skills-block {
    width: 100%;
  }
}
</style>
