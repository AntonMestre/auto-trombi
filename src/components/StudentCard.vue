<script setup lang="ts">
import type { Student } from '@/types/student'
import { getImageUrl } from '@/utils/image'

defineProps<{
    student: Student
}>()

</script>
<template>
    <div class="">
    <figure><img class="rounded-lg" :src=getImageUrl(student.profilPic)  alt="profil-pic" /></figure>
    <div class="">
        <div class="">{{ student.lastName }}  {{ student.firstName }}</div>
    </div>
    </div>
</template>