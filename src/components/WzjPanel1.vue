<template>
  <div class="panel-wrapper">
    <el-button @click="wancheng" v-if="isEdit" type="primary">完成</el-button>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row v-for="(row, rowIdx) in dataFill" :key="rowIdx">
        <template v-if="rowIdx < Math.ceil(dataFill.length / rowColNum)">
          <div v-for="(col, colIdx) in rowColNum" :key="colIdx">
            <el-col class="panel-title" :span="rowColWidthMap[rowColNum][0]">
              <template
                      v-if="isEdit && dataFill[rowColNum * rowIdx + colIdx].name"
              >
                <img
                        src="@/assets/images/delete.png"
                        @click="deleteCol(rowColNum * rowIdx + colIdx)"
                />
              </template>
              {{ dataFill[rowColNum * rowIdx + colIdx].name }}
            </el-col>
            <el-col
                    v-if="!isEdit"
                    class="pannel-content"
                    :span="rowColWidthMap[rowColNum][1]"
            >
              <!-- 支持slot,render,默认传参三种方式 -->
              <template v-if="dataFill[rowColNum * rowIdx + colIdx].slotName">
                <slot
                        :name="dataFill[rowColNum * rowIdx + colIdx].slotName"
                        :row="dataFill[rowColNum * rowIdx + colIdx]"
                ></slot>
              </template>
              <template v-else-if="dataFill[rowColNum * rowIdx + colIdx].render">
                <div
                        v-html="
                  dataFill[rowColNum * rowIdx + colIdx].render(
                    dataFill[rowColNum * rowIdx + colIdx]
                  )
                "
                ></div>
              </template>
              <template v-else>
                {{ dataFill[rowColNum * rowIdx + colIdx].value }}
              </template>
            </el-col>
            <el-col
                    v-if="isEdit"
                    class="pannel-content"
                    :span="rowColWidthMap[rowColNum][1]"
            >
              <!-- 支持slot,render,默认传参三种方式 -->
              <template v-if="dataFill[rowColNum * rowIdx + colIdx].slotName">
                <slot
                        :name="dataFill[rowColNum * rowIdx + colIdx].slotName"
                        :row="dataFill[rowColNum * rowIdx + colIdx]"
                ></slot>
              </template>
              <template v-else-if="dataFill[rowColNum * rowIdx + colIdx].render">
                <div
                        v-html="
                  dataFill[rowColNum * rowIdx + colIdx].render(
                    dataFill[rowColNum * rowIdx + colIdx]
                  )
                "
                ></div>
              </template>
              <template v-else>
                <el-input
                        v-if="dataFill[rowColNum * rowIdx + colIdx].name"
                        size="mini"
                        v-model="dataFill[rowColNum * rowIdx + colIdx].value"
                        placeholder="placeholder"></el-input>
              </template>
            </el-col>
          </div>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "WzjPanel",
    props: {
      rowColNum: {
        type: Number,
        default: () => 2
      },
      isEdit: {
        type: Boolean,
        default: () => false
      },
      info: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        /* 行内列宽度映射关系 */
        rowColWidthMap: {
          1: [12, 12],
          2: [4, 8],
          3: [3, 5],
          4: [2, 4]
        },
        oInfo: this.info,
        form:[

        ]
      };
    },
    methods: {
      deleteCol(idx) {
        this.$emit("deletCol", idx);
      },
      wancheng(){

      }
    },
    computed: {
      /* 数据跟每行展示个数不能整除是填充占位,防止报错*/
      dataFill() {
        this.oInfo = this.info;
        if (!this.oInfo.length) {
          return;
        }
        let fillAmount =
            this.oInfo.length % this.rowColNum
                ? this.rowColNum - (this.oInfo.length % this.rowColNum)
                : 0;
        let fillArr = new Array(fillAmount).fill({ name: "", value: "" });
        this.oInfo = this.oInfo.concat(fillArr);
        console.log(this.oInfo);
        return this.oInfo;

      }
    }
  };
</script>

<style scoped lang="stylus">
  .panel-wrapper
    border-bottom: 1px solid #E8ECEF
    border-right: 1px solid #E8ECEF
    .el-col
      font-size: 12px
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
      color #222
      background-color: #F3F4F6
    .pannel-content
      color #666

</style>
