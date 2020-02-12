<template>
  <p>路由参数this.$route.params：{{canshu}}</p>
</template>

<script>
export default {
  data() {
    return {
      canshu: ""
    };
  },
  mounted() {
    this.canshu = this.$route.params.id;
  }
};
</script>
