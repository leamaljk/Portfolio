<template>
    <div id="skills-section">
      <h1 class="skills-title">Skills</h1>
      <div id="skills-container">
        <div v-for="skill in skills" :key="skill.name" class="skill">
          <img :src="skill.icon" :alt="skill.name" class="skill-icon">
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
        { name: 'HTML', icon: require('@/assets/images/skills/1 (12).webp') },
        { name: 'CSS', icon: require('@/assets/images/skills/1 (7).webp') },
        { name: 'JavaScript', icon: require('@/assets/images/skills/1 (13).webp') },
        { name: 'SASS', icon: require('@/assets/images/skills/1 (19).webp') },
        { name: 'Figma', icon: require('@/assets/images/skills/1 (9).webp') },
        { name: 'TailwindCSS', icon: require('@/assets/images/skills/1 (21).webp') },
        { name: 'Wordpress', icon: require('@/assets/images/skills/1 (4).webp') },
        { name: 'UI/UX', icon: require('@/assets/images/skills/1 (1).webp') },
        { name: 'Vue.js', icon: require('@/assets/images/skills/1 (3).webp') },
        { name: 'React', icon: require('@/assets/images/skills/1 (17).webp') },
        { name: 'Node.js', icon: require('@/assets/images/skills/1 (5).webp') },
        { name: 'Express', icon: require('@/assets/images/skills/1 (22).webp') },
        { name: 'PostgreeSql', icon: require('@/assets/images/skills/1 (18).webp') },
        { name: 'PgAdmin', icon: require('@/assets/images/skills/1 (8).webp') },
        { name: 'MongoDb', icon: require('@/assets/images/skills/1 (15).webp') },
        { name: 'Mongoose', icon: require('@/assets/images/skills/1 (14).webp') },
        { name: 'GIT', icon: require('@/assets/images/skills/1 (10).webp') },
        { name: 'GitHub', icon: require('@/assets/images/skills/1 (11).webp') },
        { name: 'API', icon: require('@/assets/images/skills/1 (6).webp') },
        { name: 'SEO', icon: require('@/assets/images/skills/1 (20).webp') },
        { name: 'OWASP', icon: require('@/assets/images/skills/1 (16).webp') },
        { name: 'VScode', icon: require('@/assets/images/skills/1 (2).webp') },
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
  font-family: "Libre Caslon Text", serif;
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