<template>
  <main_content />
</template>

<script>
import main_content from "./components/main.vue";

export default {
  data() {
    return {
      status: false,
    };
  },
  name: "App",
  components: {
    main_content,
  },
};
</script>

<style lang="sass">
body
  background: url(./img/background.jpg) fixed no-repeat
  background-position: 50% 0%
  z-index: 0

#app
  height: 100%
  overflow: scroll
  margin: 0 auto
  position: relative

*
  margin: 0
  padding: 0

body
  font-family: 'Playfair Display', serif
  position: fixed
  width: 100%
  height: 100%
  
</style>
 