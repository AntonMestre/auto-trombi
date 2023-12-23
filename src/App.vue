<script setup lang="ts">
import data from '@/data/persistance.json'
import type { Student } from '@/types/student'
import { ref } from 'vue'
import UtilityInterface from '@/components/UtilityInterface.vue'
import AddStudent from '@/components/AddStudent.vue'
import PromotionChoice from '@/components/PromotionChoice.vue'
import { computed } from 'vue'
import { getStudentOrderedListByLastName } from '@/utils/studentFilter'
import StudentArray from '@/components/StudentArray.vue'
import StudentInterface from '@/components/StudentInterface.vue'

const yearSelected = ref(2024 as Number)
const students : Student[] = data.students
const studentsOfSelectedYear = computed(() => students.filter((student) => student.promotion === yearSelected.value))
const showAddStudentInterface = ref(false)

const changeAddStudentInterfaceStatus = () => {
  showAddStudentInterface.value = !showAddStudentInterface.value
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const filterLetters = ref([] as String[])
const studentsOrderedByLastName = computed(() => getStudentOrderedListByLastName(studentsOfSelectedYear.value, filterLetters.value))

const letterClicked = (letter: string) => {
    if (filterLetters.value.includes(letter)) {
        filterLetters.value = filterLetters.value.filter((item) => item !== letter)
    } else {
        filterLetters.value.push(letter)
    }
}

const changePromotion = (year: Number) => {
  yearSelected.value = year
}

const onFocusStudent = ref(false)
const focusedStudent = ref({} as Student)

const callBackOnFocusStudent = (student: Student) => {
  focusedStudent.value = student
  onFocusStudent.value = true
}

const closeUtility = () => {
  onFocusStudent.value = false
  showAddStudentInterface.value = false
}
</script>
<template>
  <body class="h-full">
    <div class="grid grid-cols-8 gap-4 h-screen pt-3">
      <div class="col-span-5 col-start-2 mt-5 self-end mb-8"><promotion-choice @changing-promotion="changePromotion"/></div>
      <div class="col-span-2 self-end mb-4">
       <button @click="changeAddStudentInterfaceStatus()" class="btn btn-neutral">Ajouter sa trombi</button>
      </div>
      <div class="col-span-1 justify-self-end">
        <div class="flex justify-center">
          <div class="flex">
              <div class="flex flex-col mr-10">
                  <div class="text-center leading-tight hover:cursor-pointer hover:text-black text-slate-400" v-for="letter in alphabet" @click="letterClicked(letter)">
                      <span :class="{ [`text-black`]: filterLetters.includes(letter) }">{{ letter }}</span>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div :class="{ [`col-start-2 col-end-7`]: showAddStudentInterface || onFocusStudent, [`col-start-2 col-end-9`]: !showAddStudentInterface }"  class="overflow-y-scroll">
        <student-array @focus-on-student-to-app="callBackOnFocusStudent" :students="studentsOrderedByLastName"/>
      </div>
      <div v-if="showAddStudentInterface || onFocusStudent" class="col-span-2 flex flex-col">
        <button class="btn btn-circle btn-outline btn-sm self-end mr-2" @click="closeUtility">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div v-if="showAddStudentInterface && !onFocusStudent">
          <utility-interface>
            <add-student />
          </utility-interface>
        </div>
        <div v-if="onFocusStudent && !showAddStudentInterface">
          <utility-interface>
            <student-interface :student="focusedStudent"/>
          </utility-interface>
        </div>
      </div>
    </div>
  </body>
</template>