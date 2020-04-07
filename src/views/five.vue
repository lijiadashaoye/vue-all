<template>
  <div>
    <h2>css 学习</h2>
    <div class="content">
      <div class="self-data">
        <h3>css 获取自定义data-*数据</h3>
        <span data-descr="css 获取自定义data-*数据">看看</span>
        <ol>
          <li>::before 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。</li>
          <li>::after用来创建一个伪元素，作为已选中元素的最后一个子元素</li>
          <li>他们常通过 content 属性来为一个元素添加修饰性的内容</li>
          <li>由::before 和::after 生成的伪元素 包含在元素格式框内</li>
          <li>::after ::before 伪类元素与其他盒模型元素是可以相互影响的，就像他们是真正的元素一样，不过是被插入到相关元素中罢了</li>
          <li>:checked 伪类选择器,表示任何处于选中状态的表单元素</li>
          <li>:disabled 伪类表示任何被禁用的元素，为禁用元素设置样式</li>
        </ol>
      </div>

      <div class="animation">
        <h3>css 动画</h3>
        <p ref="isP">动画元素</p>
      </div>

      <div class="backgrounds">
        <h3>文字轮廓剪切背景图</h3>
        <p>文字轮廓剪切背景图</p>
      </div>

      <div class="background2">
        <h3>背景图缩写方法</h3>
        <ol>
          <li>background 缩写里每个属性值无所谓出现的顺序</li>
          <li>background 属性被指定多个背景层时，使用逗号分隔每个背景层。</li>
          <li>
            background-size 只能紧接着 background-position 出现，以"/"分割，即：
            background-position / background-size
            ，如：center/80% 、10% 20% / 100px 50px
          </li>
        </ol>
      </div>

      <div class="lvjing">
        <h3>滤镜</h3>
        <div class="brightness">
          <p>brightness(num) 将线性乘数应用于输入图像，使其看起来更亮或更暗，num>=0</p>
          <img src="../assets/2.jpeg" />
        </div>
        <div class="blurs">
          <p>blur(num) 将高斯模糊应用于输出图片 num>=0</p>
          <img src="../assets/2.jpeg" />
        </div>

        <div class="contrast">
          <p>contrast(num) 调整输入图像的对比度 num>=0</p>
          <img src="../assets/2.jpeg" />
        </div>
      </div>

      <div>
        <h3>阴影</h3>
        <p class="shadow shadow1">默认在外侧</p>
        <p class="shadow shadow2">用 inset 向内侧</p>
        <p class="shadow shadow3">多重阴影</p>
      </div>

      <div>
        <h3>边框</h3>
        <p class="border border1">四个不同颜色、形状、大小的值</p>
        <p class="border border2">两个值的</p>
      </div>

      <div>
        <h3>css 函数</h3>
        <ol>
          <li>calc() 允许在声明 CSS 属性值时执行一些计算，运算符的两边必须要有空白字符，比如，calc(50% + -8px)</li>
        </ol>
      </div>

      <div>
        <h3>表格</h3>
        <table class="isTable">
          <caption>Caption 表格标题</caption>
          <tr>
            <td>Some data</td>
            <td>Some more data</td>
          </tr>
          <tr>
            <td colspan="2">caret-color 用来定义插入光标（caret）的颜色</td>
          </tr>
          <tr>
            <td colspan="2">
              <input />
            </td>
          </tr>
        </table>
      </div>

      <div>
        <h3>剪切板操作</h3>
        <p>使用 document.execCommand 复制，先选中一些内容</p>
        <button @click="copy">复制</button>&nbsp;&nbsp;
        <button @click="seeClip">查看剪切板内容</button>
        <p>使用 Clipboard API 复制</p>
        <input id="input" type="text" v-model="inp" />
        <button @click="copy1">复制</button>&nbsp;&nbsp;
        <button @click="seeClip">查看剪切板内容</button>
        <p>{{clipContent}}</p>
      </div>

      <div class="column">
        <h3>多列布局</h3>
        <p>被多列布局的元素被多列布局被多列布局的元素被多列布局</p>
      </div>

      <div class="yuanzhui">
        <h3>圆锥渐变</h3>
        <section>属于background-image属性，只有chorme支持</section>
        <section>1 rad=180/π deg</section>
        <section>1 turn=360 deg</section>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <div>
          <p style="font-weight:bold;">渐变走向不同</p>
          <p>
            <span>锥形渐变方向</span>
            <span>圆形渐变方向</span>
          </p>
        </div>
      </div>

      <div>
        <h3>鼠标样式</h3>
        <div id="div">
          <p v-for="k in shubiao" :key="k" :style="{cursor:k}">{{k}}</p>
        </div>
      </div>

      <div>
        <h3>网格布局</h3>
        <p class="gridTip">只需要按行或者列控制布局（一维）用弹性盒子</p>
        <p class="gridTip">只需要同时按行和列控制布局（二维）用网格</p>
        <h4>repeat() 函数网格</h4>
        <div class="grid grid1">
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
          <div>Four</div>
          <div>Five</div>
        </div>
        <h4>自适应宽度弹性网格</h4>
        <p class="gridTip">
          子元素宽度可以固定，也可以使用 minmax() 设置宽度区间，但排列会随父元素宽度变化,
          如：minmax(100px,1fr)、minmax(100px,auto)、minmax(100px,200px)
        </p>
        <div class="setKuan">
          <label style="font-size:14px;" for="kuandu1">父元素宽度：</label>
          <input id="kuandu1" v-model="kuan1" />
          <span>px</span>
        </div>
        <div class="setKuan">
          <label style="font-size:14px;" for="kuandu2">子元素宽度：</label>
          <input id="kuandu2" v-model="kuan2" />
          <span>px</span>
        </div>
        <div
          class="grid grid2"
          :style="{width: `${kuan1}px`,'grid-template-columns': `repeat(auto-fill, minmax(${kuan2}px, 1fr))`
          }"
        >
          <div>One</div>
          <div>Two</div>
          <div>Three</div>
        </div>
        <div>
          <p>网格的跨行、跨列</p>
          <div class="wrapper">
            <div class="box1">One</div>
            <div class="box2">Two</div>
            <div class="box3">Three</div>
            <div class="box4">Four</div>
          </div>
          <div class="showGrid"></div>
        </div>
      </div>

      <div class="path">
        <h3>clip-path 背景剪切</h3>
        <p>背景剪切，是先创建背景，然后进行剪切，所以正常可以显示的内容，也会被裁剪</p>
        <section>
          <div>
            inset(top right bottom left): 参数写法类似margin，可写 1~4个参数
            <p class="path1">内容被剪切</p>
          </div>
          <div>
            circle(r at x y): r 即圆形的半径， 不接受负数作为该参数的，x y为圆心坐标
            <p class="path2"></p>
          </div>
          <div>
            ellipse(Xr Yr at x y): Xr表示x轴方向的半径，Yr 表示Y轴方向的半径
            <p class="path3"></p>
          </div>
          <div>
            polygon(x1 y1,x2 y2,x3 y3 ...): 每一对在列表中的参数都代表了多边形顶点的坐标，第一个点和最后一个点如果不同，会自动接合
            <p class="path4"></p>
          </div>
        </section>
      </div>

      <div>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 剪切板数据
      clipContent: "",
      inp: null,
      // 图标类型列表
      shubiao: [
        "auto",
        "default",
        "none",
        "context-menu",
        "help",
        "pointer",
        "progress",
        "wait",
        "cell",
        "crosshair",
        "text",
        "vertical-text",
        "alias",
        "copy",
        "move",
        "no-drop",
        "not-allowed",
        "e-resize",
        "n-resize",
        "ne-resize",
        "nw-resize",
        "s-resize",
        "se-resize",
        "sw-resize",
        "w-resize",
        "ew-resize",
        "ns-resize",
        "nesw-resize",
        "nwse-resize",
        "col-resize",
        "row-resize",
        "all-scroll",
        "zoom-in",
        "zoom-out",
        "grab",
        "grabbing"
      ],
      // 网格宽度
      kuan1: 260,
      kuan2: 80
    };
  },
  mounted() {
    // // 监听复制事件
    // document.addEventListener("copy", function(e) {
    //   // 若添加了，就可以使用 setData 设置添加到剪切板的内容
    //   e.preventDefault();
    //   e.clipboardData.setData("text/plain", "Hello, world!");
    // });
  },
  methods: {
    // 复制选中的内容
    copy() {
      document.execCommand("copy");
    },
    copy1() {
      // 查询浏览器权限
      navigator.permissions.query({ name: "clipboard-write" }).then(result => {
        // console.log(result);
        // console.log(  navigator.clipboard);
        // navigator.clipboard.writeText() 和 navigator.clipboard.write()
        // 方法让你往剪贴板写入任意文本或二进制数据。
        if (result.state == "granted" || result.state == "prompt") {
          navigator.clipboard.writeText(this.inp).then(
            function() {
              console.log("写入成功");
            },
            function() {
              console.log("写入失败");
            }
          );
        }
      });
    },
    // 查看剪切板
    seeClip() {
      // navigator.clipboard.readText() 和 navigator.clipboard.read()
      // 方法让你从剪贴板读取任意文本或二进制数据。
      navigator.clipboard.readText().then(t => (this.clipContent = t));
    }
  }
};
</script>

<style scoped>
@import url("./five.css");
.content {
  display: flex;
  flex-wrap: wrap;
}
.content > div {
  padding: 5px 10px;
  min-width: 100px;
  max-width: 360px;
  flex-shrink: 1;
}
</style>