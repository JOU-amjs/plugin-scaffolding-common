<template>
  <span class="main">This is a {{ name }}. And title is {{ title }}</span>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {
      name: '导航栏',
    };
  },
};
</script>
<style scoped>
.main {
  color: #000;
}
</style>