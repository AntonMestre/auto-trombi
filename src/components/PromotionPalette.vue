<script setup lang="ts">
import type { Student } from '@/types/student'
import StudentCard from '@/components/StudentCard.vue'
import { getStudentOrderedListByLastName } from '@/utils/studentFilter'

const props = defineProps<{
    students: Student[]
}>()

const studentsOrdered = getStudentOrderedListByLastName(props.students)
console.log(studentsOrdered)
</script>
<template>
    <div class="flex justify-center mt-10">
        <div class="w-4/5">
            <div class="flex flex-wrap">
                <div class="mx-3" v-for="student in studentsOrdered" v-bind:key="student.id">
                    <StudentCard :student="student"/>
                </div>
            </div>
        </div>
    </div>
</template>