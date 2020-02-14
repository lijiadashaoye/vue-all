<template>
  <div>
    <h3>通过路由接收的参数：{{name}}</h3>
    重定向路由，本栏要去four，重定向到three组件
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  created() {
    // 获取路由传参
    this.name = this.$route.query.name;
  },
  methods: {}
};
</script>

<style>
</style>