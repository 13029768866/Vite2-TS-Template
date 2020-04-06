<template>
  <div class="v-table">
    <div body-style="padding: 10px">
      <div style="margin-bottom: 10px">
        <slot name="toolsBar" />
      </div>
      <el-table
        :data="tableData"
        border
        strip
        empty-text="暂无数据～"
        @sort-change="val => emitMethod('sort-change', val)"
        @selection-change="val => emitMethod('selection-change', val)"
      >
        <el-table-column
          v-if="selected"
          fixed="left"
          align="center"
          type="selection"
          width="55"
        >
        </el-table-column>
        <slot name="insert" />
        <el-table-column
          v-for="(v, k) in tableConfig"
          :key="`table${k}`"
          :prop="v.prop"
          :label="v.label"
          :align="v.align || 'center'"
          :width="v.width"
          :min-width="v.minWidth"
          :sortable="v.sortable"
        >
          <template slot-scope="scope">
            <template v-if="!v.slot">
              <template v-if="v.render">
                <div v-html="v.render(scope.row)">
                  <!--                 {{ v.render(scope.row) }}-->
                </div>
              </template>
              <template v-else>
                {{ scope.row[v.prop] || "-" }}
              </template>
            </template>
            <template v-else>
              <slot :name="v.slot" :row="scope.row" :$index="scope.$index" />
            </template>
          </template>
        </el-table-column>
        <slot name="appends" />
        <slot name="operate" />
      </el-table>
      <el-pagination
        v-if="!hidePage"
        background
        :layout="pageConfig.layout"
        :total="total"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        :page-sizes="pageConfig.pageSizes"
        :pager-count="pageConfig.pagerCount"
        style="margin-top: 10px;text-align: right"
        @size-change="val => emitPageConfig(val, 'size-change')"
        @current-change="val => emitPageConfig(val, 'current-change')"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "WzjTable",
  props: {
    // 表格数据
    tableData: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Boolean,
      default: () => false
    },
    hidePage: {
      type: Boolean,
      default: () => false
    },
    // 表格配置项，可以不传，通过slot自定义内容
    tableConfig: {
      type: Array,
      default: () => []
    },
    // 分页信息
    page: {
      type: Object,
      default: () => {
        return {
          total: 0,
          currentPage: 1,
          pageSize: 20
        };
      }
    },
    // 分页信息
    pageConfig: {
      type: Object,
      default: () => {
        return {
          pageSizes: [20, 50, 100],
          pagerCount: 7,
          layout: "total, sizes, prev, pager, next, jumper"
        };
      }
    }
  },
  data() {
    return {
      currentPage: this.page.currentPage,
      total: this.page.total,
      pageSize: this.page.pageSize
    };
  },
  watch: {
    "page.currentPage"(newVal, oldVal) {
      this.currentPage = newVal;
    },
    "page.total"(newVal, oldVal) {
      this.total = newVal;
    }
  },
  methods: {
    emitMethod(methodName, val) {
      this.$emit(methodName, val);
    },
    emitPageConfig(val, type) {
      if (type === "size-change") {
        this.currentPage = 1;
        this.pageSize = val;
      }
      if (type === "current-change") {
        this.currentPage = val;
      }
      this.$emit("togglePage", {
        currentPage: this.currentPage,
        total: this.total,
        pageSize: this.pageSize
      });
    }
  }
};
</script>
<style lang="stylus" scoped></style>
