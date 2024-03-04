<template>
    
<div id="app">
<MyNavigation /> 
</div>
<div>
  <NewHeader></NewHeader>
<!-- <HeaderTop></HeaderTop> -->
</div>
<router-view />

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
  <WebPackages></WebPackages>
</div>

<div>
  <ContactForm></ContactForm>
<ContactFooter />
</div>
</template>

<script>
// import ToggleTheme from '../components/ToggleTheme.vue';
import MyNavigation from '../components/MyNavigation.vue';
// import HeaderTop from '../components/HeaderTop.vue';
// import TypingArrow from '../components/TypingArrow.vue';
import AboutMe from '../components/AboutMe.vue';
import CardStyle from '../components/CardStyle.vue';
import ContactFooter from '../components/ContactFooter.vue'
import SkillsIcons from './SkillsIcons.vue';
import WebPackages from './WebPackages.vue';
import ContactForm from './ContactForm.vue';
import NewHeader from './NewHeader.vue';




export default {
  components: {
    // 'ToggleTheme': ToggleTheme,
    'MyNavigation': MyNavigation,
    // 'HeaderTop': HeaderTop,
    // 'TypingArrow': TypingArrow,
    'AboutMe': AboutMe,
    'CardStyle': CardStyle,
    'ContactFooter': ContactFooter,
    SkillsIcons, WebPackages, ContactForm,
    NewHeader
},
};

</script>

<style scoped>
#app{
margin-bottom: 3.6rem;

}
</style>