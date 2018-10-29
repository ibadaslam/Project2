<template>
  <div>
    <TableDisplay></TableDisplay>
    <hr>
    <Addstudent></Addstudent>
  </div>
</template>

<script>
import Addstudent from '~/components/addstudent.vue'
import TableDisplay from '~/components/tabledisplay.vue'

export default {
components: {
    Addstudent,
    TableDisplay
  }
}
</script>
