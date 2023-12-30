<script setup lang="ts">
import { ref } from 'vue';
import type { Student } from '@/types/student'

const props = defineProps<{
    students: Student[]
}>()

const years = ref<number[]>([])
const yearSelected = ref(2024)

props.students.forEach(student => {
    if (!years.value.includes(student.promotion)) {
        years.value.push(student.promotion)
    }
})
years.value.sort((a, b) => a - b)

const changeYear = (year: number) => {
    yearSelected.value = year
}

</script>
<template>
    <div class="flex">
        <div class="flex flex-col">
            <div class="h2 w-2 pb-2">
                <div class="text-xs -rotate-45">2017</div>
            </div>
            <div class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-black"></div>
                <div class="timeLine"></div>
            </div>
        </div>
        <div v-for="year in years" :key="year">
            <div @click="$emit('changingPromotion', year); changeYear(year)" class="flex flex-col w-full hover:cursor-pointer parent">
                <div class="h2 w-2 pb-2">
                    <div :class="{ 'text-green-600': yearSelected==year, 'text-zinc-400': yearSelected!==year }" class="text-xs -rotate-45 firstchild" >{{ year }}</div>
                </div>
                <div class="flex items-center">
                    <div class="w-2 h-2 rounded-full  secondchild" :class="{ 'bg-green-600': yearSelected==year, 'bg-zinc-400': yearSelected!==year }"></div>
                    <div class="timeLine"></div>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <div class="h2 w-2 pb-2">
                <div class="text-xs -rotate-45">2027</div>
            </div>
            <div class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-black"></div>
            </div>
        </div>

    </div>
</template>
<style>
.timeLine {
    border-bottom: 2px rgb(212 212 216) solid;
    width: 70px;
}

.parent:hover .firstchild {
    color: black;
}

.parent:hover .secondchild {
    background-color: black;
}
</style>
