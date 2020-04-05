<template>
  <div class="wrapper">
    <el-row class="table-info"
            v-for="(row,index) in renderData"
            :key="index"
    >
      <template v-if="index < Math.ceil(renderData.length / rowColNum)">
        <div v-for="(c, k) in rowColNum" :key="k">
          <el-col class="info-title" :span="map[rowColNum][0]">
            <template v-if="isEdit && renderData[rowColNum * index + k].name">
              <el-button
                      size="mini" @click="deleteRow(rowColNum * index + k)" type="danger">删除
              </el-button>

            </template>
            {{renderData[rowColNum * index + k].name}}
          </el-col>
          <el-col :span="map[rowColNum][1]">
            <template v-if="renderData[rowColNum * index + k].slotName">
              <slot
                      :name="renderData[rowColNum * index + k].slotName"
                      :row="renderData[rowColNum * index + k]"
              ></slot>
            </template>
            <template v-else-if="renderData[rowColNum * index + k].render">
              <div v-html="renderData[rowColNum * index + k].render(renderData[rowColNum * index + k])"></div>
            </template>
            <template v-else>
              {{renderData[rowColNum * index + k].value}}
            </template>
          </el-col>
        </div>
      </template>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "WzjInfoPanel",
    props:{
      rowColNum:{
        type: Number,
        default:()=> 2
      },
      isEdit: {
        type: Boolean,
        default:()=> false
      },
      info:{
        type: Array,
        default:()=>[]
      }
    },
    data(){
      return {
        map: {
          1: [12, 12],
          2: [4, 8],
          3: [3, 5],
          4: [2, 4]
        },
        oInfo: this.info,
        isFill: false
      }
    },
    computed: {
      renderData() {
        this.oInfo = this.info
        if(!this.oInfo.length){ return };
        let fillNum = this.oInfo.length % this.rowColNum?
            this.rowColNum - this.oInfo.length % this.rowColNum:
            0;
        this.isFill = fillNum? false: true;
        let newArr = new Array(fillNum).fill({name: "", value: ""});
        this.oInfo = this.oInfo.concat(newArr);
        return this.oInfo
      }
    },
    methods: {
      deleteRow(index) {
        this.$emit('deletRow', index)
      }
    }
  }
</script>

<style lang="stylus">
  .wrapper
    border-bottom: 1px solid #E8ECEF
    border-right: 1px solid #E8ECEF
    .info-title
      background-color: #F3F4F6
  .table-info
    .el-col
      height: 32px
      line-height: 32px
      padding-left: 15px
      border-top: 1px solid #E8ECEF;
      border-left: 1px solid #E8ECEF;
</style>