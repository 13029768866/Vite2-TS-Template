<template>
  <div>
    <el-checkbox :value="checkAll" @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <div style="margin: 15px 0;"></div>

    <el-checkbox-group
      v-model="privateCheckedItem"
      @change="handleCheckedItemChange"
    >
      <el-checkbox v-for="item in allItem" :label="item" :key="item">{{
        item
      }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  props: {
    checkAll: {
      type: Boolean,
      default: () => false
    },
    checkedItem: {
      type: Array,
      default: () => []
    },
    allItem: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      /* 私有化属性 */
      privateCheckedItem: []
    };
  },
  mounted(){
    this.privateInit()
  },
  watch: {
    checkedItem: {
      handler: function() {
        this.privateInit();
      },
      immediate: true,
    }
  },
  methods: {
    privateInit() {
      this.privateCheckedItem = JSON.parse(JSON.stringify(this.checkedItem));
    },
    /* 全选 */
    handleCheckAllChange(val) {
      let res = val ? this.allItem : [];
      this.$emit("update:checkAll", val);
      this.$emit("update:checkedItem", res);
    },
    /* 反选 */
    handleCheckedItemChange(value) {
      console.log('value',value);
      let checkedCount = value.length;
      let res = checkedCount === this.allItem.length;
      this.$emit("update:checkAll", res);
      this.$emit("update:checkedItem", value);
    }
  }
};
</script>
