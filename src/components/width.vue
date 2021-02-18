<template>
  <div class="form_elemetn">
    <p>Выберите ширину татуировки</p>
    <input type="range" min="0" max="25" id="line" v-model="widthTattoo" />
    <div class="center">
      <div class="meaning">
        <p>{{ widthTattoo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widthTattoo: 4,
    };
  },
  methods: {},
};
</script>

<style>
input[type="range"] {
  -webkit-appearance: none;
  width: 308px;
  margin-bottom: 17px;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 308px;
  height: 3px;
  background: rgba(176, 133, 126, 0.61);
  border-bottom: 2px solid #fbecea;
  border-top: 2px solid #fbecea;
  border-radius: 6px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #fbecea;
  margin-top: -7.5px;
}
</style>