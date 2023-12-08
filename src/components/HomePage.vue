<template>
    
<div id="app">
  <div>
<ToggleTheme />
</div>
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
<div>
<CarouselItem />
</div>
</template>

<script>
import ToggleTheme from '../components/ToggleTheme.vue';
import MyNavigation from '../components/MyNavigation.vue';
import TypingArrow from '../components/TypingArrow.vue';
import AboutMe from '../components/AboutMe.vue';
import MySkills from '../components/MySkills.vue';
import CarouselItem from '../components/CarouselItem.vue';

export default {
  components: {
    'ToggleTheme': ToggleTheme,
    'MyNavigation': MyNavigation,
    'TypingArrow': TypingArrow,
    'AboutMe': AboutMe,
    'MySkills': MySkills,
    'CarouselItem': CarouselItem,
  },
};

</script>