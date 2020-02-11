<template>
  <div>
    <div class="nav">
      <button
        :class="{active:activeNum==='one'}"
        @click="toRoute('one')"
      >one</button>&nbsp;&nbsp;
      <button
        :class="{active:activeNum==='two'}"
        @click="toRoute('two')"
      >two</button>&nbsp;&nbsp;
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNum: ""
    };
  },
  watch: {
    $route: function(...d) {
      this.activeNum = d[0].name;
    }
  },
  mounted() {
    this.activeNum = this.$route.name;
  },
  methods: {
    toRoute(tar) {
      this.$router.push({
        name: tar,
        query: {
          name: tar
        }
      });
    },
    fuwu() {
      return "从App组件传递的服务";
    }
  },
  // 定义全局以来注入服务提供者
  provide() {
    return {
      fuwu: this.fuwu
    };
  }
};
</script>
<style >
.wap {
  display: flex;
  flex-wrap: wrap;
}
.wap > div {
  padding: 0 10px;
}
.nav button {
  font-size: 14px;
  padding: 2px 8px;
}
p,
h3 {
  padding: 2px;
  margin: 2px 0;
}
.active {
  color: red;
}
</style>