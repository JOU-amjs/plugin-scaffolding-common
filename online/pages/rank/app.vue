<template>
  <div>
    <header :title="title" />
    <span>This is a Rank page.</span>
  </div>
</template>

<script>
import Header from '../../components/Header.vue';

export default {
  components: { HeaderLayout: Header },
  data() {
    return {
      title: '排行榜',
    };
  },
  mounted() {
    console.log('rank mounted');
  },
};
</script>
<style scoped>

</style>