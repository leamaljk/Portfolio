<template>
<CookiesInfo></CookiesInfo>
<div id="app">
<MyNavigation /> 
</div>
<div>
  <ImageSlideshow />
</div>
<router-view />
<div>
  <WebPackages></WebPackages>
</div>
<div>
  <FreeQuote></FreeQuote>
</div>
<div>
<CardStyle />
</div>


<div>
<AboutMe />
</div>
<div>
<SkillsIcons></SkillsIcons>
</div>
<div>
    <CannyFeedback></CannyFeedback>
  </div>
<div>
<ContactForm></ContactForm>
<ContactFooter />
</div>
<TermsAndConditions></TermsAndConditions>
</template>

<script>
import CookiesInfo from '../components/CookiesInfo.vue';
import FreeQuote from '../components/FreeQuote.vue';
import MyNavigation from '../components/MyNavigation.vue';

import AboutMe from '../components/AboutMe.vue';
import CardStyle from '../components/CardStyle.vue';
import ContactFooter from '../components/ContactFooter.vue'
import SkillsIcons from './SkillsIcons.vue';
import WebPackages from './WebPackages.vue';
import ContactForm from './ContactForm.vue';
import ImageSlideshow from './ImageSlideshow.vue';
import TermsAndConditions from './TermsAndConditions.vue';
import CannyFeedback from './CannyFeedback.vue';




export default {
  components: {
    CookiesInfo,
    'MyNavigation': MyNavigation,
    'AboutMe': AboutMe,
    'CardStyle': CardStyle,
    'ContactFooter': ContactFooter,
    SkillsIcons, WebPackages, ContactForm,
    ImageSlideshow,TermsAndConditions, CannyFeedback,FreeQuote
},
};

</script>

<style scoped>
#app{
margin-bottom: 3.6rem;

}
</style>