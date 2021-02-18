<template>
  <div class="form_elemetn">
    <p>Выберите высоту татуировки</p>
    <input
      type="range"
      min="0"
      max="25"
      id="line"
      v-model="heightTatoo"
      
    />
    <div class="center">
      <div class="meaning">
        <p>{{ heightTatoo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heightTatoo: 4,
    };
  },
  methods: {},
};
</script>