<template>
  <div>
    <h2>js 学习</h2>
    <div class="content"></div>
  </div>
</template>

<script>
import six from "./six.js";
export default {
  data() {
    return {
      isClick: ""
    };
  },
  mounted() {
    let wap = document.getElementsByClassName("content")[0],
      add = document.createDocumentFragment();
    for (let i = 0; i < six.arr.length; i++) {
      let button = document.createElement("button");
      button.className = "buttons";
      button.innerHTML = six.arr[i].name;
      button.addEventListener("click", six.arr[i].fn);
      button.addEventListener("click", () => this.isClicked(six.arr[i].name));
      add.appendChild(button);
    }
    wap.appendChild(add);

    
  
  },
  methods: {
    // 按钮点击变更颜色
    isClicked(str) {
      let buttons = document.querySelectorAll(".content button");
      buttons.forEach(tar => {
        if (tar.innerHTML === str) {
          tar.classList.add("beClick");
        } else {
          tar.classList.remove("beClick");
        }
      });
    }
  }
};
</script>

<style>
.content {
  display: flex;
}
.content > div {
  width: 300px;
  margin: 5px;
  padding: 5px;
}
.buttons {
  padding: 2px 10px;
  border-radius: 3px;
  margin: 5px;
}
.beClick {
  color: red;
}
</style>