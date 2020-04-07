<template>
  <div>
    子组件：定义好插槽名称和在子组件里写出来的要显示的内容，&lt;slot&gt; 标签是用来显示父组件中的内容
    <slot name="header"></slot>
    子组件：name='header'写法命名插槽
    <slot name="content" v-bind:jigou="jigou"></slot>
    <slot name="footer" v-bind:user="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jigou: "子组件中的数据，传递给父组件，并在父组件中解构",
      user: "子组件中的数据，传递给父组件"
    };
  }
};
</script>