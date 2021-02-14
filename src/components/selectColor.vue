<template>
  <div class="form_elemetn">
    <p>Выберите цветность татуировки</p>
    <div class="selectContainer">
      <div class="select" v-on:touchstart="chenge">
        <p>{{ please }}</p>
        <i class="fas fa-sort-down"></i>
      </div>
      <div class="popUp" v-bind:class="{ done: invisible }">
        <p v-on:touchstart="select" id="1">Однотонная</p>
        <div class="border"></div>
        <p v-on:touchstart="select" id="1.1">2 цвета</p>
        <div class="border"></div>
        <p v-on:touchstart="select" id="1.2">3 и более цвета</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      invisible: false,
      please: "Цвет",
    };
  },
  methods: {
    chenge() {
      this.invisible = !this.invisible;
    },
    select(elem) {
      this.please = elem.target.innerHTML;
      this.chenge();
      this.$emit('choice', elem.target.id)
    },
  },
};
</script>

<style lang="sass" scoped>
.done
  transition-duration: 0.5s
  height: 121px
  overflow: hidden
</style>