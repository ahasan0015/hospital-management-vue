<script setup lang="ts">
import Navbar from './views/layouts/Navbar.vue';
import Sidebar from './views/layouts/Sidebar.vue';




</script>

<template>
    <!-- Navbar component -->
  <Navbar />

  <div class="container-fluid">
    <div class="row" style="margin-top:56px">

      <!-- Sidebar component -->
      <Sidebar />

      <!-- Main content -->
      <main class="col-lg-10 ms-sm-auto px-4">
        

      </main>

    </div>
  </div>
  
</template>

<style scoped></style>
