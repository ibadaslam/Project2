<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex offset-md4 md3>
          <v-text-field 
          v-model="name" 
          label="Name">
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex offset-md4 md3>
          <v-text-field 
          v-model="age" 
          label="Age">
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex offset-md4 md3>
          <v-text-field 
          v-model="city" 
          label="City">
          </v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex offset-md4 md3>
          <v-text-field 
          v-model="rollNo" 
          label="Roll Number">
          </v-text-field>
        </v-flex>
        <v-flex offset-md4 md4>
            <v-btn color="blue">submit</v-btn>
            <v-btn color="red">clear</v-btn>
      </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

export default {
  
}
</script>

