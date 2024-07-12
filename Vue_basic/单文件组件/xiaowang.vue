<template>
  <!-- 
        组件的结构
     -->
  <div class="demo">
    <h2>姓名：{{xiaowang}}</h2>
    账号：<input type="text">
    密码：<input type="text">
    <button @click="showname">点我</button>
  </div>
</template>

<script>
// 组件交互
export default {
  name: 'xiaowang',
  data() {
    return {
      xiaowang: "小王",
    };
  },
  methods: {
    showname() {
      alert(this.xiaowang)
    },
  }
}

</script>


<style>
/* 组件的样式 */
.demo {
  background-color: black;
}
</style>