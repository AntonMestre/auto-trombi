<script setup lang="ts">
import type { Student } from '@/types/student'
import { ref } from 'vue'
import { useStudents } from '@/utils/students'

const studentsStore = useStudents();

const student = ref<Student>({
    id: Math.ceil(Math.random()*1000000),
    firstName: '',
    lastName: '',
    birthDate: '',
    promotion: 2024,
    company: '',
    profilPic: '',
})

const submitForm = () => {
    studentsStore.addStudent(student.value)
}
</script>
<template>
    <form class="flex flex-col">
        <label for="firstName">First name:</label>
        <input type="text" class="inputForm" id="firstName" v-model="student.firstName">

        <label for="lastName">Last name:</label>
        <input type="text" class="inputForm" id="lastName" v-model="student.lastName">

        <label for="birthDate">Birth date:</label>
        <input type="date" class="inputForm" id="birthDate" v-model="student.birthDate">

        <label for="promotion">Promotion:</label>
        <input type="text" class="inputForm" id="promotion" v-model="student.promotion">

        <label for="company">Company:</label>
        <input type="text" class="inputForm" id="company" v-model="student.company">

        <label for="profilPic">Profile Picture (Can't work because a FrontEnd application can't save image):</label>
        <input type="file" class="inputForm" id="profilPic">

        <button @click="submitForm" type="submit" class="rounded-full bg-green-600 m-4 px-3 py-2 text-white font-bold cursor-pointer">Submit</button>
    </form>
</template>
<style scoped>
.inputForm {
    border-radius: 5px;
    border: 1px solid #ccc;
}
form > label {
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left:5px;
    margin-right:5px;
    font-weight: bold;
}

form > input {
    margin-top: 4px;
    margin-bottom: 5px;
    margin-left:5px;
    margin-right:5px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
</style>