<template lang="html">
<div class="good" @click='skipToDetail'>
  <div class="box">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    skipToDetail() {

    }
  }
}
</script>

<style lang="scss" scoped>
.good {
  display: inline-block;
  width: 5rem;
  height: 5rem;
  border: 1px solid orange;
  box-sizing: border-box;
  .box {}
}
</style>
