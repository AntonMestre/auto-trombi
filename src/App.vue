<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import StudentInterface from '@/components/StudentInterface.vue'
import data from '@/data/persistance.json'
import type { Student } from '@/types/student'
import { ref } from 'vue'
import UtilityInterface from '@/components/UtilityInterface.vue'
import AddStudent from '@/components/AddStudent.vue'

const students : Student[] = data.students
const show = ref(false)

const showStudentInterface = () => {
  show.value = !show.value
}
</script>
<template>
  <header>
   <nav-bar @add-trombi="showStudentInterface"/>
  </header>
  <body class="max-h-screen">
    <div class="flex justify-center">
      <div class="flex flex-row w-11/12">
        <student-interface :students="students" />
        <div v-if="show">
          <utility-interface>
            <add-student />
          </utility-interface>
        </div>
      </div>
    </div>
  </body>
</template>