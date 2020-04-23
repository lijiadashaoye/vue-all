<template>
  <div>
    <h2>js 学习</h2>
    <div id="content"></div>
    <div class="toFlex">
      <div class="wa">
        父元素内部向下滚动时，当子元素p距离父元素底边差20px时，执行一个回调
        <div></div>
        <p id="fasd">asdf</p>
      </div>
      <div>

      </div>
    </div>
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
    let wap = document.getElementById("content"),
      add = document.createDocumentFragment();
    for (let i = six.arr.length; i--; ) {
      let button = document.createElement("button");
      button.className = "buttons";
      button.id = six.arr[i].fn.name;
      button.innerHTML = six.arr[i].name;
      button.addEventListener("click", six.arr[i].fn);
      button.addEventListener("click", () => this.isClicked(six.arr[i].name));
      add.appendChild(button);
    }
    wap.appendChild(add);

    // // 设置关闭浏览器当前tab页动作，出现一个弹框，让用户做选择
    // window.addEventListener("beforeunload", function(e) {
    //   e.preventDefault();
    //   e.returnValue = "关闭当前浏览器页面";  // 返回值
    //   return "true"; // 如果有 return 则直接关闭页面
    // });

    // // 监听浏览器最小化，最大化，即浏览器可视状态
    // document.addEventListener("visibilitychange", function() {
    //   if (!document.hidden) {
    //     console.log("浏览器最大化，可视状态");
    //   } else {
    //     console.log("浏览器最小化，不可视状态");
    //   }
    // });

    // 临近事件，只在移动设备上有效果，需要距离传感器
    // 例如，当用户在手机靠近耳朵的状态下拨打电话时，可以通过关闭智能手机的屏幕来应对。
    // window.addEventListener("userproximity", function(event) {
    //   if (event.near) {
    //     navigator.mozPower.screenEnabled = false;
    //   } else {
    //     navigator.mozPower.screenEnabled = true;
    //   }
    // });

    // 设备振动 200毫秒，单次振动
    // window.navigator.vibrate(200)

    // 振动模式
    // 一组数值描述了设备振动并且不振动的交替时间段。
    // 数组中的每个值都将转换成一个整数，然后交替解释为设备应该振动的毫秒数和不振动的毫秒数。
    // 不停的振动就是循环执行函数;
    // window.navigator.vibrate([200, 100, 200]);

    // 停止振动，不给参数就可以
    // window.navigator.vibrate()

    // 只能监听 localStorage 数据变化，而且需要不同浏览器tab页面
    // window.addEventListener("storage", function(e) {
    //   console.log(e);
    // });

    // https://www.jianshu.com/p/31facd4934d7
    // 普通的webworker直接使用new Worker()即可创建，这种webworker是当前页面专有的。
    // 然后还有种共享worker(SharedWorker)，这种是可以多个标签页、iframe共同使用的
    // SharedWorker可以被多个window共同使用，但必须保证这些标签页都是同源的
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
.content,
.toFlex {
  display: flex;
}
.toFlex > div {
  width: 300px;
  margin: 5px;
}
.buttons {
  padding: 2px 10px;
  border-radius: 3px;
  margin: 5px;
}
.beClick {
  color: red;
}
.wa {
  width: 200px;
  height: 200px;
  border: 1px solid;
  overflow-y: scroll;
  position: relative;
}

.wa p {
  background: rgb(203, 180, 226);
  height: 50px;
  position: absolute;
  top: 300px;
  left: 0;
  margin: 0;
}
.wa div {
  width: 50px;
  height: 20px;
  border: 1px solid;
  position: absolute;
  top: 260px;
}
</style>