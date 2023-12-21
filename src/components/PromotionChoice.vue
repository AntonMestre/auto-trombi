<script setup lang="ts">
import { ref, onMounted } from 'vue';
import data from '@/data/persistance.json'
import type { Student } from '@/types/student'

const students : Student[] = data.students

const years = ref<number[]>([])

students.forEach(student => {
    if (!years.value.includes(student.promotion)) {
        years.value.push(student.promotion)
    }
})

</script>
<template>
    <div>
        <h1>Promotion Choice</h1>
        <div class="flex flex-col h-7 w-full">
            <div class="text-xs -rotate-45">2017 - Création IMT Atlantique</div>
            <div class="w-2 h-2 rounded-full bg-zinc-300"></div>
        </div>
    </div>
</template>