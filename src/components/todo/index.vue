<template>
  <div>
    <input type="text" v-model="todo" />
    <button @click="addValue">内容添加</button>
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
