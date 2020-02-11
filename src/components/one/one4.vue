<template>
  <div>混入</div>
</template>

<script>
export default {
  created() {
    console.log("来自混入子组件的created");
  },
  methods: {
    minMethods() {
      console.log("子组件中的对象型选项");
    }
  }
};
</script>
