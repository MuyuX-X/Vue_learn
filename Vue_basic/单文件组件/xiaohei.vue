<template>
  <!-- 
        组件的结构
     -->
  <div class="demo">
    <h2>姓名：{{ xiaohei }}</h2>
    账号：<input type="text" /> 密码：<input type="text" />
    <button @click="showname">点我</button>
  </div>
</template>

<script>
// 组件交互
export default {
  name: "xiaohei",
  data() {
    return {
      xiaohei: "小黑",
    };
  },
  methods: {
    showname() {
      alert(this.xiaohei);
    },
  },
};
</script>
<style>
/* 组件的样式 */
.demo {
  background-color: red;
}
</style>
