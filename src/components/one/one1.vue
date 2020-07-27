<template>
  <div>
    <label>{{kk}}：</label>
    <input
      v-makeFocus:[canshu]="{ color: 'white', text: 'hello!' }"
      type="input"
      v-bind:value="value"
      v-on:change="isChange"
    />
  </div>
</template>

<script>
export default {
  // https://www.cnblogs.com/mark5/p/11603428.html
  model: {
    prop: "value", // 定义v-bind的属性，v-bind默认是v-bind:value形式，所以这里用prop: "value"
    event: "changed", // 定义给父组件反馈值的方法，v-on绑定的事件
  },
  props: ["value", "kk"], // 它的值由父组件用v-model传入，实际上通过:value 方式绑定的value
  methods: {
    isChange(e) {
      // 定义监听事件
      this.$emit("changed", e.target.value); // 给父组件反馈值
    },
  },
  data() {
    return {
      canshu: "v-makeFocus:[canshu]",
    };
  },
  created() {
    console.log("$parent：", this.$parent);
    console.log("$attrs：", this.$attrs);
    console.log(this);
  },
};
</script>
