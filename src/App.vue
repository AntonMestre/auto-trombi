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

const yearSelected = ref(2024)
const students : Student[] = data.students
const studentsOfSelectedYear = computed(() => students.filter((student) => student.promotion === yearSelected.value))
const show = ref(false)

const showStudentInterface = () => {
  show.value = !show.value
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
</script>
<template>
  <body class="h-full">
    <div class="grid grid-cols-8 gap-4 h-screen pt-3">
      <div class="col-span-5 col-start-2 mt-5 self-end mb-8"><promotion-choice/></div>
      <div class="col-span-2 self-end mb-2"><div class="rounded-full bg-green-600 m-4 px-3 py-2 text-white font-bold cursor-pointer" @click="showStudentInterface()">Ajouter sa trombi</div></div>
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
      <div :class="{ [`col-start-2 col-end-7`]: show, [`col-start-2 col-end-9`]: !show }"  class="overflow-y-scroll">
        <student-array class="" :students="studentsOrderedByLastName"/>
      </div>
      <div class="col-span-2">
        <div v-if="show">
          <utility-interface>
            <add-student />
          </utility-interface>
        </div>
      </div>
    </div>
  </body>
</template>