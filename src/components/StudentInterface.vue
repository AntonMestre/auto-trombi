<script setup lang="ts">
import type { Student } from '@/types/student'
import { getImageUrl } from '@/utils/image'

defineProps<{
    student: Student
}>()

const getAge = (birthDate: string) => {
    const today = new Date()
    const birthDateObject = new Date(birthDate)
    let age = today.getFullYear() - birthDateObject.getFullYear()
    const month = today.getMonth() - birthDateObject.getMonth()
    if (month < 0 || (month === 0 && today.getDate() < birthDateObject.getDate())) {
        age--
    }
    return age
}
</script>
<template>
    <div class="flex flex-col items-center">
        <div><figure><img class="rounded-full w-32 h-32" :src=getImageUrl(student.profilPic)  alt="profil-pic" /></figure></div>
        <div class="student-charac">Firt Name age - Last Name</div>
        <div>{{ student.firstName }} - {{ student.lastName }}</div>
        <div class="student-charac">Age</div>
        <div>{{ getAge(student.birthDate) }}</div>
        <div class="student-charac">Promotion</div>
        <div>{{ student.promotion }}</div>
        <div class="student-charac">Company</div>
        <div>{{ student.company }}</div>
    </div>
</template>
<style>
.student-charac {
    font-size: 0.8rem;
    color: hsl(216, 7%, 41%);
    margin-top: 20px;
}

</style>

