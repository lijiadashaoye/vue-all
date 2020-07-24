<template>
  <div class="wap">
    <div ref="toolbar" class="toolbar"></div>
    <div ref="text" class="text"></div>
  </div>
</template>
<script>
export default {
  props: {
    inData: String, // 用来接收v-model里传递给子组件作为数据用的
  },
  model: {
    prop: "inData", // 定义v-model里，:value 绑定的当前组件里的属性名
    event: "returnBack", // 定义v-model里，执行数据反馈的事件
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    // 文档：https://www.kancloud.cn/wangfupeng/wangeditor3/332599
    var E = require("wangeditor");
    this.editor = new E(this.$refs.toolbar, this.$refs.text);
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.customConfig.onchangeTimeout = 2000;
    this.editor.customConfig.onchange = (html) => {
      this.returnBackFn(html);
    };
    this.editor.create();
    if (this.inData !== "") {
      this.editor.txt.html("" + this.inData);
    }
  },
  methods: {
    returnBackFn(html) {
      this.$emit("returnBack", html);
    },
  },
};
</script>

<style>
.wap {
  padding: 0;
}
.toolbar {
  width: 50px;
  display: flex!;
  flex-wrap: wrap;
  border: 1px solid rgb(199, 196, 196);
  width: 100%;
}
.toolbar > div {
  padding: 0 7px !important;
}
.text {
  width: 100%;
  box-sizing: border-box !important;
  border: 1px solid rgb(199, 196, 196);
}
.w-e-text {
  overflow-y: hidden !important;
}
</style>

