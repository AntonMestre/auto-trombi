<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import PromotionPalette from '@/components/PromotionPalette.vue'
import data from '@/data/persistance.json'
import type { Student } from '@/types/student'

const students : Student[] = data.students
</script>

<template>
  <header>
   <nav-bar/>
  </header>
  <body class="h-screen">
    <promotion-palette :students="students" />
  </body>
</template>