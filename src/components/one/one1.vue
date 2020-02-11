<template>
  <div>
    <label>{{label}}：</label>
    <input
      v-makeFocus="{ color: 'white', text: 'hello!' }"
      type="input"
      v-bind:value="value"
      v-on:change="isChange"
    >
  </div>
</template>

<script>
export default {
  model: {
    prop: "value", // 定义监听的元素原生属性，不可随意命名
    event: "change" // 定义监听的元素原生事件，不可随意命名
  },
  props: ["value", "label"], // 它的值由父组件用v-model传入，读取value才有意义
  methods: {
    isChange(e) {
      // 定义监听事件
      this.$emit("change", e.target.value); // 定义传递给父组件的值
    }
  }
};
</script>
