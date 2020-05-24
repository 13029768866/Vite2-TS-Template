<template>
  <div class="home">
    <el-checkbox border size="medium" v-model="totalCheckAll" @change="totalCheckAllChange">全局全选</el-checkbox>
   <template v-for="item in checkAllArr">
     <check-all
         :checkAll.sync="item.checkAll"
         :checkedItem.sync="item.checkedItem"
        :allItem.sync="item.allItem"
     ></check-all>
   </template>
  </div>
</template>

<script>
import CheckAll from "../components/CheckAll";

export default {
  name: 'Home',
  components: {
    CheckAll
  },
  data(){
    return {
      totalCheckAll:false,
      checkAllArr:[
        {
          checkAll: false,
          checkedItem: ['上海', '北京'],
          allItem:['上海', '北京', '广州', '深圳']
        },
        {
          checkAll: false,
          checkedItem: ['上海', '北京'],
          allItem:['上海', '北京', '广州', '深圳']
        }
      ]
    }
  },
  watch:{
    checkAllArr:{
      handler:function () {
        this.handleTotalCheckAll()
      },
      deep:true
    }
  },
  methods:{
    totalCheckAllChange(val){
      this.checkAllArr.map(item => {
        item.checkAll = val;
        item.checkedItem = val?item.allItem: [];
      })
    },
    handleTotalCheckAll(){
      let secondCheckedAll = []
      this.checkAllArr.map(item => {
        secondCheckedAll.push(item.checkAll)
      })
      console.log(secondCheckedAll);
      this.totalCheckAll = secondCheckedAll.every(item => item === true)
    }
  }
}
</script>
