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
          <li>background-size 只能紧接着 background-position 出现，以"/"分割，如：center/80% 、10% 20% / 100px 50px</li>
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

      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
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
  max-width: 300px;
  flex-shrink: 1;
}
</style>