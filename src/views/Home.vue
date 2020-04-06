<template>
  <div class="home">
    <wzj-title :isShow.sync="titleShow" titleName="基本信息"></wzj-title>
    <wzj-title :isShow.sync="titleShow" titleName="产品信息">
      <div class="title-slot">
        <span class="slot-type">产品个数</span>(8)
        <span class="slot-type">版本个数</span>(12)
      </div>
    </wzj-title>

    <el-button @click="isEdit = !isEdit" type="primary">编辑</el-button>

    <wzj-panel
      v-show="titleShow"
      :info="info"
      :isEdit="isEdit"
      @deletCol="deletCol"
      class="animated fadeInDown"
    >
      <template slot="wzj" slot-scope="scope">
        <div style="color: red">{{ scope.row.value }}</div>
      </template>
    </wzj-panel>

    <wzj-table
      v-loading="tableLoading"
      :table-config="tableConfig"
      :table-data="tableData"
      :page="page"
      @togglePage="togglePage"
    >
      <template slot="wzj" slot-scope="scope">
        <div style="display: flex;justify-content: space-around">
          <div class="sky">
            {{ scope.row.proName }}
          </div>
          <div @click="checkStatus" :class="{ choose: status }">
            星星
          </div>
        </div>
      </template>
    </wzj-table>
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
      /* title */
      titleShow: false,

      isEdit: false,
      info: [
        {
          name: "行业总监0",
          value: "尼古拉斯赵四0",
          render(row) {
            return `
              <span style="color: skyblue">${row.value}</span>
            `;
          }
        },
        { name: "行业总监1", value: "尼古拉斯赵四1" },
        { name: "行业总监2", value: "尼古拉斯赵四2" },
        { name: "行业总监3", value: "尼古拉斯赵四3" },
        { name: "行业总监4", value: "尼古拉斯赵四4", slotName: "wzj" }
      ],

      /* table-data*/
      status: false,
      tableLoading: false,
      tableConfig: [
        {
          prop: "name",
          label: "仓库编码",
          render(row) {
            return row.code + "hshshsh";
          }
        },
        {
          prop: "code",
          label: "仓库名称"
        },
        {
          prop: "proName",
          label: "项目名称",
          slot: "wzj",
          width: 400
        }
      ],
      tableData: [
        {
          name: 1,
          code: 123,
          proName: "象牙山"
        },
        {
          name: 12,
          code: 223,
          proName: "象牙山2"
        }
      ],
      page: {
        total: 0,
        currentPage: 1,
        pageSize: 20
      }
    };
  },
  methods: {
    deletCol(index) {
      this.info.splice(index, 1);
    },
    checkStatus() {
      this.status = !this.status;
    },
    getList() {},
    togglePage(val) {
      this.page = val;
      this.getList();
    }
  }
};
</script>
<style lang="stylus" scoped>
.title-slot
  font-size: 12px
  color #222
  .slot-type
    color #666
    margin-left: 15px
    margin-right: 5px
.sky
  color skyblue
.choose
  color red
</style>
