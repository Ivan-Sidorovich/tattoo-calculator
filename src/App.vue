<template>
  <main_content />
</template>

<script>
import main_content from "./components/main.vue";

export default {
  name: "App",
  components: {
    main_content,
  },
};
</script>

<style lang="sass">
#app
  height: 100%

html, body
  height: 100%
*
  margin: 0
  padding: 0

body
  font-family: 'Playfair Display', serif
</style>
 