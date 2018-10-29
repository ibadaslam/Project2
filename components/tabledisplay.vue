<template>
  <div>
    <v-layout row wrap>
      <v-flex md3 text-md-center>
        <v-card color="red" class="headline font-weight-bold">
          NAME
        </v-card>
      </v-flex>
      <v-flex md2 text-md-center class="pl-1">
        <v-card color="blue" class="headline font-weight-bold">
          AGE
        </v-card>
      </v-flex>
      <v-flex md2 text-md-center class="pl-1">
        <v-card color="green" class="headline font-weight-bold">
          CITY
        </v-card> 
      </v-flex>
      <v-flex md2 text-md-center class="pl-1">
        <v-card color="pink" class="headline font-weight-bold">
          Roll#
        </v-card> 
      </v-flex>
      <v-flex md3 text-md-center class="pl-1">
        <v-card color="yellow" class="headline font-weight-bold">
          Actions
        </v-card> 
      </v-flex>
    </v-layout>
    <v-layout row wrap v-for="(student, i) in students" :key="i">
    <v-flex md3 text-md-center title class="pa-1">
          <v-card color="green">
            {{student.name}}
          </v-card>
        </v-flex>
        <v-flex md2 text-xs-center title class="pa-1">
          <v-card color="green">
            {{student.email}}
          </v-card>
        </v-flex>
        <v-flex md2 text-xs-center title class="pa-1">
          <v-card color="green">
            {{student.age}}
          </v-card>
        </v-flex>
        <v-flex md2 text-xs-center title class="pa-1">
          <v-card color="green">
            {{student.rollNo}}
          </v-card>
        </v-flex>
        <v-flex md3 text-xs-center>
          <v-btn> Delete </v-btn>
          <v-btn> Edit </v-btn>
        </v-flex>
        </v-layout>
  </div>
</template>

<script>

export default {
  computed: {
    students() {
      return this.$store.getters['fetchStudents']
    }
  }
}
</script>
