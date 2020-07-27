<template>
  <div class="wap">
    <div ref="toolbar" class="toolbar"></div>
    <div ref="text" class="text"></div>
  </div>
</template>
<script>
export default {
  model: {
    prop: "tt", // 定义v-model里，v-bind 绑定的属性名
    event: "returnBack", // 定义v-model里，v-on 绑定的执行数据反馈的事件
  },
  data() {
    return {
      editor: null,
    };
  },
  computed: {
    tt: {
      set: function (t) {
        this.$emit("returnBack", t);
      },
      get: function (t) {
        return t.$attrs.tt;
      },
    },
  },
  mounted() {
    // 文档：https://www.kancloud.cn/wangfupeng/wangeditor3/332599
    var E = require("wangeditor");
    this.editor = new E(this.$refs.toolbar, this.$refs.text);
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.customConfig.onchangeTimeout = 2000; // 定义防抖延时
    this.editor.customConfig.onchange = (html) => {
      this.tt = html; // 设置inData的值，会同时执行上边的set函数
    };
    this.editor.create();
    if (this.tt !== "") {
      this.editor.txt.html("" + this.tt);
    }
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
  min-height: 205px;
}
.w-e-text {
  overflow-y: hidden !important;
}
</style>

