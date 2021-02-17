<template>
  <div>
    <h1>Testing Area</h1>
    <AddTaskButton> </AddTaskButton>
    <TaskCard> </TaskCard>
  </div>
</template>

<script>
import AddTaskButton from '@/components/AddTaskButton.vue'
import TaskCard from '@/components/TaskCard.vue'

export default {
  components: {
    AddTaskButton,
    TaskCard
  }
  
}
</script>

