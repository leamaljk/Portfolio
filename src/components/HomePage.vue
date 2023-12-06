<template>
    
<div id="app">
<MyNavigation /> 
</div>
<router-view />
<div>
    <TypingArrow></TypingArrow>
</div>
<div>
<AboutMe />
</div>
<div>
<MySkills />
</div>
</template>

<script>
import MyNavigation from '../components/MyNavigation.vue';
import TypingArrow from '../components/TypingArrow.vue';
import AboutMe from '../components/AboutMe.vue';
import MySkills from '../components/MySkills.vue';

export default {
  components: {
    'MyNavigation': MyNavigation,
    'TypingArrow': TypingArrow,
    'AboutMe': AboutMe,
    'MySkills': MySkills
  },
};
</script>
