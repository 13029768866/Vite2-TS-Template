<template>
  <div class="home">
    <!--wzj
    <wzj-title></wzj-title>
    <el-button @click="isEdit = !isEdit" type="primary">编辑</el-button>
    <wzj-info-panel
      :info="info"
      :isEdit="isEdit"
      :rowColNum = "rowColNum"
      @deletRow="deletRow"
    >
      <template
        slot="wzj"
        slot-scope="scope"
      >
          <div style="color: red">{{scope.row.value}}</div>
      </template>
    </wzj-info-panel>
    <team-add></team-add>
    <table-test></table-test>-->
    <wzj-panel></wzj-panel>
  </div>
</template>

<script>
import TeamAdd from "./dialog/TeamAdd";
import TableTest from "./TableTest";
export default {
  name: "Home",
  components: {
    TeamAdd,
    TableTest
  },
  data() {
    return {

      rowColNum: 2,
      isEdit: false,
      info: [
        { name: "行业总监0", value: "尼古拉斯赵四0",
          render(row){
            return `
              <span style="color: skyblue">${row.value}</span>
            `
          }
        },
        { name: "行业总监1", value: "尼古拉斯赵四1" },
        { name: "行业总监2", value: "尼古拉斯赵四2" },
        { name: "行业总监3", value: "尼古拉斯赵四3" },
        { name: "行业总监4",value: "尼古拉斯赵四4",slotName:'wzj'},
      ]
    };
  },
  methods: {
    deletRow(index){
      this.info.splice(index, 1)
      // console.log(this.info);
    }
  }
};
</script>

