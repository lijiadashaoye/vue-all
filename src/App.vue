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
      <button
        :class="{active:activeNum==='three'}"
        @click="toRoute('four')"
      >four</button>
      <button
        :class="{active:activeNum==='five'}"
        @click="toRoute('five')"
      >five</button>
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
      if (tar !== "four") {
        this.$router.push({
          name: tar,
          query: {
            name: tar
          }
        });
      } else {
        this.$router.push({
          path: "/four",
          query: {
            name: tar
          }
        });
      }
    },
    fuwu() {
      return "从App组件传递的服务";
    }
  },
  // 定义全局注入服务，依赖注入所提供的属性是非响应式
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
h3,
h4 {
  padding: 2px;
  margin: 2px 0;
}
.active {
  color: #657eeb;
}
ul {
  list-style-type: none;
}
</style>