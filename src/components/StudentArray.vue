<script setup lang="ts">
import type { Student } from '@/types/student'
import StudentCard from './StudentCard.vue';

defineProps<{
    students: Student[][]
}>()

const emit = defineEmits(['focusOnStudentToApp'])

const callback = (student: Student) => {
    emit('focusOnStudentToApp', student)
}
</script>
<template>
    <div class="flex flex-wrap">
        <template v-for="(studentsLetter, index) in students" v-bind:key="index">
            <template v-for="(student, indexStudent) in studentsLetter" v-bind:key="indexStudent">
                <div class="mb-5 transition-opacity" :class="{ [`mr-2`]: indexStudent == studentsLetter.length-1}">
                    <StudentCard @focus-on-student="callback" class="mx-3 myfadein" :student="student"/>
                    <div v-if="indexStudent == 0 && indexStudent == studentsLetter.length-1">
                        <div class="flex myfadein">
                            <div class="leftRule"></div><div class="mx-2 font-bold">{{ student.lastName.charAt(0) }}</div><div class="rightRule"></div>
                        </div>
                    </div>
                    <div v-else-if="indexStudent == 0">
                        <div class="flex myfadein">
                            <div class="leftRule"></div><div class="mx-2 font-bold">{{ student.lastName.charAt(0) }}</div><div class="righRuleForTheStart"></div>
                        </div>
                    </div>
                    <div v-else-if="indexStudent == studentsLetter.length-1">
                        <div class="flex myfadein">
                            <div class="rightRule"></div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="flex myfadein">
                            <div class="middleRule"></div>
                        </div>
                    </div>
                </div>
            </template>
        </template >
    </div>
</template>
<style scoped>
.myfadein {
  opacity: 0; /* Initially hide the div */
  animation: fadeIn 2s ease forwards; /* Apply the fadeIn animation */
}

@keyframes fadeIn {
  from {
    opacity: 0; /* Start from completely transparent */
  }
  to {
    opacity: 1; /* Fade to fully visible */
  }
}
</style>