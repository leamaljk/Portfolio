<template>
    
<div id="app">
<MyNavigation /> 
</div>
<div>
  <NewHeader></NewHeader>
</div>
<router-view />


<div>
<CardStyle />
</div>

<div>
  <WebPackages></WebPackages>
</div>
<div>
<AboutMe />
</div>
<div>
<SkillsIcons></SkillsIcons>
</div>
<div>
  <ContactForm></ContactForm>
<ContactFooter />
</div>
</template>

<script>
import MyNavigation from '../components/MyNavigation.vue';

import AboutMe from '../components/AboutMe.vue';
import CardStyle from '../components/CardStyle.vue';
import ContactFooter from '../components/ContactFooter.vue'
import SkillsIcons from './SkillsIcons.vue';
import WebPackages from './WebPackages.vue';
import ContactForm from './ContactForm.vue';
import NewHeader from './NewHeader.vue';




export default {
  components: {

    'MyNavigation': MyNavigation,
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