<template>
  <div class="module-title">
    <i
      :class="isShow ? 'el-icon-minus' : 'el-icon-plus'"
      @click="changeStatus"
    ></i>
    <div class="title-name">{{ titleName }}</div>
    <div class="line"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "WzjTitle",
  props: {
    isShow: {
      type: Boolean,
      default: () => false
    },
    titleName: {
      type: String,
      default: () => "基本信息"
    }
  },
  methods: {
    changeStatus() {
      this.$emit("update:isShow", !this.isShow);
    }
  }
};
</script>

<style scoped lang="stylus">
.module-title
  display: flex;
  align-items: center;
  font-size: 14px
  color #222
  i
    width:14px;
    line-height:14px;
    font-size: 10px
    font-weight: 700
    text-align: center;
    background:rgba(24,144,255,1);
    color #fff
    border-radius:2px;
    margin-right: 8px
  .line
    flex 1
    margin-left: 7px
    border: 1px dashed #C5CFD6
</style>
