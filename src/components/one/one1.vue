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
  model: {
    prop: "value", // 定义监听的元素原生属性，不可随意命名
    event: "change" // 定义监听的元素原生事件，不可随意命名
  },
  props: ["value", "kk"], // 它的值由父组件用v-model传入，实际上通过:value 方式绑定的value
  methods: {
    isChange(e) {
      // 定义监听事件
      this.$emit("change", e.target.value); // 定义传递给父组件的值
    }
  },
  data() {
    return {
      canshu: "v-makeFocus:[canshu]"
    };
  },
  created() {
    console.log("$parent：", this.$parent);
    console.log("$attrs：", this.$attrs);
  }
};
</script>
