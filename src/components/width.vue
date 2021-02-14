<template>
  <div class="form_elemetn">
    <p>Выберите ширину татуировки</p>
    <input
      type="range"
      min="0"
      max="100"
      id="line"
      value="0"
    />
    <div class="center">
      <input type="number" v-bind:value="widthTattoo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drag_status: false,
      widthTattoo: 0,
      x: 0,
    };
  },
  methods: {
    touch(e) {
      this.drag_status = true;
      this.x = e.changedTouches[0].pageX - e.target.offsetLeft;
      console.log("touch");
    },
    move(e) {
      if (!this.drag_status) return false;
      e.target.style.left = e.changedTouches[0].pageX - this.x + "px";
      if (e.target.offsetLeft < 0) e.target.style.left = 0 + "px";
      if (
        e.target.offsetLeft >
        e.target.parentElement.offsetWidth - e.target.offsetWidth
      )
        e.target.style.left =
          e.target.parentElement.offsetWidth - e.target.offsetWidth + "px";
      this.widthTattoo = Math.round(e.target.offsetLeft);
      this.$emit('end', this.widthTattoo)
    },
  },
};
</script>