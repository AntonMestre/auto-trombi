<script setup lang="ts">
import type { Student } from '@/types/student'
import { getImageUrl } from '@/utils/image'

defineProps<{
    student: Student
}>()

</script>
<template>
    <div class="hover:cursor-pointer hover:bg-gray-200 rounded-lg hover:opacity-75" @click="$emit('focusOnStudent', student)">
        <figure><img class="rounded-lg w-32 h-32" :src=getImageUrl(student.profilPic)  alt="profil-pic" /></figure>
        <div class="flex flex-col text-center">
            <div>{{ student.lastName }}  {{ student.firstName }}</div>
            <div class="italic text-zinc-400">{{ student.company }}</div>
        </div>
    </div>
</template>