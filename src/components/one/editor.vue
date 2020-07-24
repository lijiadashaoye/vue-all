<template>
  <div class="wap">
    <div ref="toolbar" class="toolbar"></div>
    <div ref="text" class="text"></div>
  </div>
</template>
<script>
export default {
  props: {
    inData: String,
  },
  model: {
    prop: "inData",
    event: "returnBack",
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

