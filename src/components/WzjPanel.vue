<template>
  <div class="panel-wrapper">
    <el-row v-for="(row, rowIdx) in Math.ceil(dataFill.length / rowColNum)" :key="rowIdx">
      <template v-if="rowIdx < Math.ceil(dataFill.length / rowColNum)">
        <div v-for="(col, colIdx) in rowColNum" :key="colIdx">
          <el-col
            class="panel-title"
            :span="rowColWidthMap[rowColNum][0]"
          >
            <template
              v-if="isEdit && dataFill[rowColNum * rowIdx + colIdx].name"
            >
              <img
                src="@/assets/images/delete.png"
                @click="deleteCol(colIdx)"
              >
            </template>
            {{dataFill[rowColNum * rowIdx + colIdx].name}}
          </el-col>
          <el-col
            :span="rowColWidthMap[rowColNum][1]"
          >
            <!-- 支持slot,render,默认传参三种方式 -->
            {{dataFill[rowColNum * rowIdx + colIdx].value}}
          </el-col>
        </div>
      </template>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "WzjPanel",
  data() {
    return {
      /* 行内列宽度映射关系 */
      rowColWidthMap: {
        1: [12, 12],
        2: [4, 8],
        3: [3, 5],
        4: [2, 4]
      },
      isEdit: true,
      rowColNum: 2,
      info: [
        { name: "行业总监0", value: "尼古拉斯赵四0" },
        { name: "行业总监1", value: "尼古拉斯赵四1" },
        { name: "行业总监2", value: "尼古拉斯赵四2" },
        { name: "行业总监3", value: "尼古拉斯赵四3" },
        { name: "行业总监4", value: "尼古拉斯赵四4" }
      ]
    };
  },
  methods:{
    deleteCol(idx){
      this.info.splice(idx,1)
    }
  },
  computed: {
    /* 数据跟每行展示个数不能整除是填充占位,防止报错*/
    dataFill() {
      if (!this.info.length) {
        return;
      }
      let fillAmount =
        this.info.length % this.rowColNum
          ? this.rowColNum - (this.info.length % this.rowColNum)
          : 0;
      let fillArr = new Array(fillAmount).fill({ name: "", value: "" });
      this.info = this.info.concat(fillArr);
      return this.info;
    }
  }
};
</script>

<style scoped lang="stylus">
.panel-wrapper
  border-bottom: 1px solid #E8ECEF
  border-right: 1px solid #E8ECEF
  .el-col
    display: flex;
    align-items: center;
    height: 32px
    line-height: 32px
    padding-left: 15px
    border-top: 1px solid #E8ECEF;
    border-left: 1px solid #E8ECEF;
    img
      margin-right: 15px
      cursor pointer
  .panel-title
    background-color: #F3F4F6
</style>
