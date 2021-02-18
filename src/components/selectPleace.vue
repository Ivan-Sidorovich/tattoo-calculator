<template>
  <div class="form_elemetn">
    <p>Выберите место нанесения</p>
    <div class="selectContainer">
      <div class="select" v-on:click="chenge">
        <p>{{ please }}</p>
        <i class="fas fa-sort-down"></i>
      </div>
      <div class="popUp" v-bind:class="{ done: invisible }">
        <p v-on:click="select" id="31">Шея/ за ухом</p>
        <div class="border"></div>
        <p v-on:click="select" id="30">Клюяица / грудь</p>
        <div class="border"></div>
        <p v-on:click="select" id="27">Ребра/ живот</p>
        <div class="border"></div>
        <p v-on:click="select" id="25">Спина</p>
        <div class="border"></div>
        <p v-on:click="select" id="25">Плечо / прелплечье</p>
        <div class="border"></div>
        <p v-on:click="select" id="31">кисть / пальцы</p>
        <div class="border"></div>
        <p v-on:click="select" id="25">бедро/ голень</p>
        <div class="border"></div>
        <p v-on:click="select" id="31">Ступня</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      invisible: false,
      please: "Место нанесения",
    };
  },
  methods: {
    chenge() {
      this.invisible = !this.invisible;
    },
    select(elem) {
      this.please = elem.target.innerHTML;
      this.chenge();
      this.$emit("choice", elem.target.id);
    },
  },
};
</script>

<style lang="sass" scoped>
.done
  height: 330px
  overflow: hidden
  transition-duration: 0.5s
</style>