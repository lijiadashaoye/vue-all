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
          <li>:after :before 伪类元素与其他盒模型元素是可以相互影响的，就像他们是真正的元素一样，不过是被插入到相关元素中罢了</li>
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
}
.content > div {
  padding: 5px 10px;
  max-width: 300px;
}
</style>