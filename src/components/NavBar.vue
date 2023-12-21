<script setup lang="ts">

</script>
<template>
    <div class="flex justify-center">
        <div class="navbar bg-base-100 w-11/12 max-h-5 shadow-md mt-5 rounded-lg">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">Auto-trombi</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                <div class="rounded-full bg-green-600 m-4 px-3 py-2 text-white font-bold cursor-pointer" @click="$emit('addTrombi')">Ajouter sa trombi</div>
                </ul>
            </div>
        </div>
    </div>
</template>