<template>
    
<div id="app">
<MyNavigation /> 
</div>
<div  class="header">
<HeaderTop />
</div>
<router-view />
<!-- <div>
    <TypingArrow></TypingArrow>
</div> -->
<div>
<AboutMe />
</div>
<div>
<SkillsIcons></SkillsIcons>
</div>
<div>
<CardStyle />
</div>
<div>
<ContactFooter />
</div>
</template>

<script>
// import ToggleTheme from '../components/ToggleTheme.vue';
import MyNavigation from '../components/MyNavigation.vue';
import HeaderTop from '../components/HeaderTop.vue';
// import TypingArrow from '../components/TypingArrow.vue';
import AboutMe from '../components/AboutMe.vue';
import CardStyle from '../components/CardStyle.vue';
import ContactFooter from '../components/ContactFooter.vue'
import SkillsIcons from './SkillsIcons.vue';


export default {
  components: {
    // 'ToggleTheme': ToggleTheme,
    'MyNavigation': MyNavigation,
    'HeaderTop': HeaderTop,
    // 'TypingArrow': TypingArrow,
    'AboutMe': AboutMe,
    'CardStyle': CardStyle,
    'ContactFooter': ContactFooter,
    SkillsIcons
},
};

</script>

<style scoped>
#app{
margin-bottom: 8rem;

}
</style>