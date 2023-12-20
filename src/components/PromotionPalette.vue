<script setup lang="ts">
import type { Student } from '@/types/student'
import StudentCard from '@/components/StudentCard.vue'
import { getStudentOrderedListByLastName } from '@/utils/studentFilter'
import { ref, computed } from 'vue'

const props = defineProps<{
    students: Student[]
}>()

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
alphabet.map((letter, index) => {
    alphabet[index] = letter.toUpperCase()
})

const filterLetters = ref([] as String[])

const studentsOrdered = computed(() => getStudentOrderedListByLastName(props.students, filterLetters.value))

const letterClicked = (letter: String) => {
    if (filterLetters.value.includes(letter)) {
        filterLetters.value = filterLetters.value.filter((item) => item !== letter)
    } else {
        filterLetters.value.push(letter)
    }
}

</script>
<template>
    <div class="flex justify-center mt-10">
        <div class="w-4/5 flex">
            <div class="flex flex-col mr-10"><div class="text-center leading-tight hover:cursor-pointer" v-for="letter in alphabet" @click="letterClicked(letter)">{{ letter }}</div></div>
            <div class="flex flex-wrap">
                <template v-for="(studentsLetter, index) in studentsOrdered" v-bind:key="index">
                    <template v-for="(student, indexStudent) in studentsLetter" v-bind:key="indexStudent">
                        <div class="mb-5" :class="{ [`mr-2`]: indexStudent == studentsLetter.length-1}">
                            <StudentCard class="mx-3" :student="student"/>
                            <div v-if="indexStudent == 0 && indexStudent == studentsLetter.length-1">
                                <div class="flex">
                                    <div class="leftRule"></div><div class="mx-2 font-bold">{{ student.lastName.charAt(0) }}</div><div class="rightRule"></div>
                                </div>
                            </div>
                            <div v-else-if="indexStudent == 0">
                                <div class="flex">
                                    <div class="leftRule"></div><div class="mx-2 font-bold">{{ student.lastName.charAt(0) }}</div><div class="righRuleForTheStart"></div>
                                </div>
                            </div>
                            <div v-else-if="indexStudent == studentsLetter.length-1">
                                <div class="flex">
                                    <div class="rightRule"></div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="flex">
                                    <div class="middleRule"></div>
                                </div>
                            </div>
                        </div>
                    </template>
                </template >
            </div>
        </div>
    </div>
</template>