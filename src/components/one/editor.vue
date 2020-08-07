<template>
  <div class="wapd">
    <div ref="toolbar" class="toolbar"></div>
    <span v-if="show" class="pla">请输入</span>
    <div ref="text" class="text"></div>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  model: {
    prop: "inData",
    event: "returnBack",
  },
  computed: {
    inData: {
      set: function (t) {
        let k = t;
        if (this.checkVal(t)) {
          k = "";
          this.show = true;
        } else {
          this.show = false;
        }
        this.$emit("returnBack", k);
      },
      get: function (t) {
        return t.$attrs.inData;
      },
    },
  },
  data() {
    return {
      editor: null,
      show: true,
    };
  },

  mounted() {
    // 文档：https://www.kancloud.cn/wangfupeng/wangeditor3/332599
    this.editor = new E(this.$refs.toolbar, this.$refs.text);
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.customConfig.onchangeTimeout = 200;
    this.editor.customConfig.onchange = (html) => {
      this.inData = html;
    };
    this.editor.create();
    if (this.inData !== "") {
      this.editor.txt.html("" + this.inData);
      this.show = false;
    }
  },
  methods: {
    checkVal(str) {
      let num = 0,
        reg = /<p>(&nbsp;|&nbsp;\s+)+<\/p>|<p>(<br>)+<\/p>/g;
      while (num < str.length && str != "") {
        num++;
        let k = str.match(reg);
        if (k) {
          str = str.replace(k[0], "");
        }
      }
      return str == "";
    },
  },
};
</script>

