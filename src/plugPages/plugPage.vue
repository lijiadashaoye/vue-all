<template>
  <div class="plugPage">vue插件页面
    <p>{{plugInputData.data}}</p>
  </div>
</template>

<script>
export default {
  name: "testPlugPage",
  props:['plugInputData'],
  data(){
    return{
      
    }
  },
};
</script>

<style scoped>
.plugPage{
  padding:2px 5px;
  background:pink;
  font-size:16px;
}
.plugPage>p{
  font-size:14px;
}
</style>