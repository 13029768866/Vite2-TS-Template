<template>
  <div id="app">
    {{$store.state.age}}
    <button @click="syncChange()">同步修改</button>
    <button @click="asyncChange()">异步修改</button>
<!--      <router-view/>-->
  </div>
</template>

<script>
  /*window.addEventListener("beforeunload",()=>{
    console.log(1);
    sessionStorage.setItem("age",this.$store.age)
  })*/

export default {
  name: 'app',
  components: {

  },
  mounted(){
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem("age",this.$store.state.age)
    })
    console.log(sessionStorage.getItem('age'));
    if (sessionStorage.getItem("age") ) {
      let res = +(sessionStorage.getItem("age",this.$store.state.age))
      this.$store.commit('SYNC_EQUAL',res)
    }
  },
  methods:{
    syncChange(){
      this.$store.commit('SYNC_CHANGE',10)
    },
    asyncChange(){
      this.$store.dispatch('asyncChange',5)
    }
  }
}
</script>

<style>

</style>
