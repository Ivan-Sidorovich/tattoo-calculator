<template>
  <div class="form_elemetn">
    <p>Выберите высоту татуировки</p>
    <input type="range" min="0" max="100" id="line" value="0" />
    <div class="center">
      <input type="number" v-bind:value="heightTatoo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heightTatoo: 0,
      x: 0,
    };
  },
  methods: {
    touch(e) {
      this.x = e.changedTouches[0].pageX - e.target.offsetLeft;
    },
    move(e) {
      e.target.style.left = e.changedTouches[0].pageX - this.x + "px";
      if (e.target.offsetLeft < 0) e.target.style.left = 0 + "px";
      if (
        e.target.offsetLeft >
        e.target.parentElement.offsetWidth - e.target.offsetWidth
      )
        e.target.style.left =
          e.target.parentElement.offsetWidth - e.target.offsetWidth + "px";
      this.heightTatoo = Math.round(e.target.offsetLeft);
      this.$emit("end", this.heightTatoo);
    },
  },
};
</script>

<style >
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