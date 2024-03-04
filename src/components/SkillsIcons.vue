<template>
    <div id="skills-section">
      <h1 class="skills-title">Skills</h1>
      <div id="skills-container">
        <div v-for="skill in skills" :key="skill.name" class="skill">
          <img v-lazy="skill.icon" :alt="skill.name" class="skill-icon">
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: [
        { name: 'HTML', icon: require('@/assets/images/skills/1 (12).png') },
        { name: 'CSS', icon: require('@/assets/images/skills/1 (7).png') },
        { name: 'JavaScript', icon: require('@/assets/images/skills/1 (13).png') },
        { name: 'SASS', icon: require('@/assets/images/skills/1 (19).png') },
        { name: 'Figma', icon: require('@/assets/images/skills/1 (9).png') },
        { name: 'TailwindCSS', icon: require('@/assets/images/skills/1 (21).png') },
        { name: 'Wordpress', icon: require('@/assets/images/skills/1 (4).png') },
        { name: 'UI/UX', icon: require('@/assets/images/skills/1 (1).png') },
        { name: 'Vue.js', icon: require('@/assets/images/skills/1 (3).png') },
        { name: 'React', icon: require('@/assets/images/skills/1 (17).png') },
        { name: 'Node.js', icon: require('@/assets/images/skills/1 (5).png') },
        { name: 'Express', icon: require('@/assets/images/skills/1 (22).png') },
        { name: 'PostgreeSql', icon: require('@/assets/images/skills/1 (18).png') },
        { name: 'PgAdmin', icon: require('@/assets/images/skills/1 (8).png') },
        { name: 'MongoDb', icon: require('@/assets/images/skills/1 (15).png') },
        { name: 'Mongoose', icon: require('@/assets/images/skills/1 (14).png') },
        { name: 'GIT', icon: require('@/assets/images/skills/1 (10).png') },
        { name: 'GitHub', icon: require('@/assets/images/skills/1 (11).png') },
        { name: 'API', icon: require('@/assets/images/skills/1 (6).png') },
        { name: 'SEO', icon: require('@/assets/images/skills/1 (20).png') },
        { name: 'OWASP', icon: require('@/assets/images/skills/1 (16).png') },
        { name: 'VScode', icon: require('@/assets/images/skills/1 (2).png') },
]
      }
    }
  }
  </script>
  
  <style scoped>
#skills-section {
  max-width:100%;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}

.skills-title {
 font-size: 2.5em;
  color: #4a4949;
  margin-bottom: 40px;
}

#skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
   
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    border-radius: 15px;
    padding:2rem 1rem;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 93%;
    margin-left: auto;
    margin-right: auto;
    animation: fadeIn 1s ease 0.5s;
    animation-fill-mode: both;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.skill-icon {
  width: 80px; /* Icons are of equal sizes */
  height: 80px; /* Maintain square aspect ratio */
  object-fit: contain; /* Keep the aspect ratio of the icons */
}

.skill-icon:hover{
    transform: scale(1.3);
}

.skill-name {
  margin-top: 10px;
  font-size: 0.85rem;
  color: #666;
}

@media (max-width: 768px) {
  .skills-title {
    font-size: 2rem;
  }

  .skill-icon {
    width: 60px; /* Slightly smaller icons on mobile */
    height: 60px;
  }

  .skill-name {
    font-size: 0.75rem;
  }
}
</style>