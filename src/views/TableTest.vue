<template>
  <div class="shipper-list p-main">
    <wzj-table
            v-loading="tableLoading"
            :table-config="tableConfig"
            :table-data="tableData"
            :page="page"
            @togglePage="togglePage"
    >
      <template slot="toolsBar">
        <el-button type="primary">button</el-button>
      </template>
      <template
              slot="wzj"
              slot-scope="scope"
      >
        <div style="display: flex;justify-content: space-around">
          <div class="sky">
            {{scope.row.proName}}
          </div>
          <div
                  @click="checkStatus"
                  :class="{choose:status}"
          >
            星星
          </div>
        </div>
      </template>
<!--      <el-table-column slot="operate" label="操作" width="200" align="center" fixed="right">-->
<!--        <template slot-scope="scope">-->
<!--          <el-button type="text">编辑</el-button>-->
<!--        </template>-->
<!--      </el-table-column>-->
    </wzj-table>
  </div>
</template>

<script>
  export default {
    name: 'ShipperList',
    data() {
      return {
        status: false,
        tableLoading: false,
        tableConfig: [
          {
            prop: 'name',
            label: '仓库编码',
            render(row) {
              return row.code + 'hshshsh'
            }
          },
          {
            prop: 'code',
            label: '仓库名称'
          },
          {
            prop: 'proName',
            label: '项目名称',
            slot: 'wzj',
            width: 400
          }
        ],
        tableData: [
          {
            name: 1,
            code: 123,
            proName: '象牙山'
          }
        ],
        page: {
          total: 0,
          currentPage: 1,
          pageSize: 20
        }
      }
    },
    methods: {
      checkStatus(){
        this.status = !this.status
      },
      getList() {

      },
      togglePage(val) {
        this.page = val
        this.getList()
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .sky
    color skyblue
  .choose
    color red
</style>
