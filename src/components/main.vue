<template>
  <div class="container">
    <div class="content">
      <header>
        <h1>Калькулятор стоимости&nbsp;татуировки</h1>
        <p>Калькулятор расчитывает примерную стоимость таутеровки</p>
      </header>
      <div class="form">
        <selectSize v-on:choice="mathCollor" />
        <delectPleace v-on:choice="mathPleace" />
        <width v-on:end="mathWidth" />
        <height v-on:end="mathHeight" />
      </div>
      <result />
    </div>
  </div>
</template>

<script>
import height from "./height";
import width from "./width";
import selectSize from "./selectColor";
import delectPleace from "./selectPleace";
import result from "./result";

export default {
  components: {
    height,
    width,
    selectSize,
    delectPleace,
    result,
  },
  data() {
    return {
      widthTattoo: 0,
      heightTattoo: 0,
      choiceCollor: 0,
      choiceplace: 0,
    };
  },
  methods: {
    mathWidth(count) {
      this.widthTattoo = count;
    },
    mathHeight(count) {
      this.heightTattoo = count;
    },
    mathCollor(count) {
      this.choiceCollor = count;
      console.log(this.choiceCollor);
    },
    mathPleace(count) {
      this.choiceplace = count;
      console.log(this.choiceplace);
    },
  },
  computed: {
    all() {},
  },
};
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2? family = Playfair + Display & display = swap')

.center
  display: flex
  justify-content: center

body
  background: url(../img/background.jpg) no-repeat
  background-attachment: fixed
  background-position: 50% 0%

.container
  min-height: 100%
  overflow: scroll
  min-width: 100%
  margin: 0 auto

  .content
    position: relative
    margin: 0 auto
    width: 310px
    display: flex
    flex-direction: column
    align-items: center

    header
      margin-top: 107px
      text-align: center
      h1
        font-weight: 300
        font-size: 28px
        line-height: 33px
        color: #FBECEA

      p
        font-weight: 300
        font-size: 20px
        line-height: 23px
        color: #FBECEA

.form

  &_elemetn
    display: flex
    flex-direction: column
    margin-top: 20px
    position: relative

    input[type="number"]

      width: 114px
      height: 36px
      background: rgba(176, 133, 126, 0.61)
      border-radius: 6px
      -moz-appearance: none
      -webkit-appearance: none
      border: none
      position: relative
      outline: none
      -moz-appearance: textfield
      text-align: center
      font-weight: 300
      font-size: 16px
      line-height: 19px
      color: #383332

    p
      font-weight: 300
      font-size: 18px
      line-height: 21px
      color: #FBECEA
      margin-bottom: 15px

    .selectContainer
      position: relative
      display: flex
      flex-direction: column
      align-items: center

      .select
        display: flex
        justify-content: space-between
        align-items: center
        width: 308px
        height: 36px
        background: rgba(176, 133, 126, 0.61)
        border-radius: 6px
        -moz-appearance: none
        -webkit-appearance: none
        border: none
        position: relative
        outline: none
        backdrop-filter: blur(2px)
        p
          font-weight: 300
          font-size: 16px
          line-height: 19px
          color: #383332
          margin: 0 0 0 15px
        i
          margin-bottom: 5px
          margin-right: 13px

.result
  margin-top: 28px
  width: 308px
  height: 46px
  background: #FBECEA
  border-radius: 6px
  margin-bottom: 35px

  p
    font-weight: 300
    font-size: 20px
    line-height: 23px
    text-align: center
    color: #383332

.popUp
  width: 296px
  height: 0px
  background: rgba(251, 236, 234, 0.1)
  backdrop-filter: blur(4px)
  transition-duration: 0.5s
  overflow: hidden
  p
    margin-top: 10px
    margin-left: 9px
    margin-bottom: 9px

.border
  height: 1px
  width: 276px
  background-color: #FBECEA
  margin-left: 10px
</style>

