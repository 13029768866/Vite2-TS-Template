<template>
  <div>
    <h1 text-center text-red border border-solid>
      <div class="i-ep-aim"></div>
      Todo List
    </h1>
    <input type="text" v-model="todo" />
    <el-button @click="addValue">内容添加</el-button>
    <TodoList :todoArr="todoArr" />
  </div>
</template>

<script setup lang="ts">
  import TodoList from './todo-list';

  const todo = ref('');
  const todoArr = ref<string[]>([]);
  const addValue = () => {
    if (!todo.value) return;
    todoArr.value.push(todo.value);
  };
</script>
