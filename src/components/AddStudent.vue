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

enum stateForm{
    NAMES,
    IMG_BIRTHDATE,
    COMPANY,
    PROMOTION,
}

const state = ref<stateForm>(stateForm.NAMES)

const moveBackward = () => {
    if (state.value == stateForm.NAMES) {
        return
    }
    state.value--
}

const moveForward = () => {
    if (state.value == stateForm.PROMOTION) {
        return
    }
    state.value++
}
</script>
<template>
    <form>
        <div class="h-96">
            <h1 class="text-2xl ml-5 mb-6 font-bold">Add a trombi</h1>

            <div class="flex justify-center">
                <div class="self-center mr-5">
                    <button type="button"  :class="{ [`btn-disabled`]: state == stateForm.NAMES }" @click="moveBackward" class="btn btn-circle btn-outline btn-sm self-end mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>
                    </button>
                </div>
                <div class="w-13">
                    <div v-if="state == stateForm.NAMES">
                        <label class="form-control w-full max-w-xs">
                            <div class="label" for="firstName">
                                <span class="label-text">First name</span>
                            </div>
                            <input type="text" placeholder="John" class="input input-bordered w-full max-w-xs" v-model="student.firstName" />
                        </label>
                    </div>

                    <div v-if="state == stateForm.NAMES" class="mt-5">
                        <label class="form-control w-full max-w-xs">
                            <div class="label" for="lastName">
                                <span class="label-text">Last name</span>
                            </div>
                            <input type="text" placeholder="Burger" class="input input-bordered w-full max-w-xs" v-model="student.lastName" />
                        </label>
                    </div>

                    <div v-if="state == stateForm.IMG_BIRTHDATE">
                        <label class="form-control w-full max-w-xs">
                            <div class="label" for="birthDate">
                                <span class="label-text">Birth date</span>
                            </div>
                            <input type="date" class="input input-bordered w-full max-w-xs" v-model="student.birthDate" />
                        </label>
                    </div>
                    
                    <div v-if="state == stateForm.IMG_BIRTHDATE" class="mt-5">
                        <label class="form-control w-full max-w-xs">
                            <div class="label" for="profilPic">
                                <span class="label-text">Profile Picture (Can't work because a FrontEnd application can't save image)</span>
                            </div>
                            <input type="file" class="file-input input-bordered w-full max-w-xs" />
                        </label>
                    </div>

                    <div v-if="state == stateForm.COMPANY">
                        <label class="form-control w-full max-w-xs">
                            <div class="label" for="company">
                                <span class="label-text">Company</span>
                            </div>
                            <input type="text" placeholder="La Poste" class="input input-bordered w-full max-w-xs" v-model="student.company" />
                        </label>
                    </div>

                    <div v-if="state == stateForm.PROMOTION">
                        <label class="form-control w-full max-w-xs">
                            <div class="label" for="promotion">
                                <span class="label-text">Promotion</span>
                            </div>
                            <input type="text" class="input input-bordered w-full max-w-xs" v-model="student.promotion" />
                        </label>
                    </div>

                </div>
                <div class="self-center ml-5">
                    <button type="button" :class="{ [`btn-disabled`]: state == stateForm.PROMOTION }" @click="moveForward" class="btn btn-circle btn-outline btn-sm self-end mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                    </button>
                </div>
            </div>
            <div class="flex flex-col mt-10">
                <div class="self-center">
                    <ul class="steps steps-vertical lg:steps-horizontal">
                        <li class="step step-success"></li>
                        <li :class="{ [`step-success`]: !(state == stateForm.NAMES) }" class="step"></li>
                        <li :class="{ [`step-success`]: !(state == stateForm.NAMES || state == stateForm.IMG_BIRTHDATE) }" class="step"></li>
                        <li :class="{ [`step-success`]: !(state == stateForm.NAMES || state == stateForm.IMG_BIRTHDATE || state == stateForm.COMPANY) }" class="step"></li>
                    </ul>
                </div>
                <div class="self-center">
                    <input :class="{ [`btn-disabled`]:  !(state == stateForm.PROMOTION)}" @click="submitForm" type="submit" value="Submit" class="btn" />
                </div>
            </div>
        </div>
    </form>
</template>
<style scoped>
</style>