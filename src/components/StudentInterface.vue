<script setup lang="ts">
import type { Student } from '@/types/student'
import { getStudentOrderedListByLastName } from '@/utils/studentFilter'
import { ref, computed } from 'vue'
import StudentArray from '@/components/StudentArray.vue'

const props = defineProps<{
    students: Student[]
}>()

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const filterLetters = ref([] as String[])
const studentsOrderedByLastName = computed(() => getStudentOrderedListByLastName(props.students, filterLetters.value))

const letterClicked = (letter: string) => {
    if (filterLetters.value.includes(letter)) {
        filterLetters.value = filterLetters.value.filter((item) => item !== letter)
    } else {
        filterLetters.value.push(letter)
    }
}

</script>
<template>
    <div class="flex justify-center mt-10">
        <div class="flex">
            <div class="flex flex-col mr-10">
                <div class="text-center leading-tight hover:cursor-pointer text-slate-400" v-for="letter in alphabet" @click="letterClicked(letter)">
                    <span :class="{ [`text-black`]: filterLetters.includes(letter) }">{{ letter }} {{ console.log(filterLetters.includes(letter)) }}</span>
                </div>
            </div>
            <student-array :students="studentsOrderedByLastName"/>
        </div>
    </div>
</template>