<template>
  <nav class="navbar navbar-dark bg-primary fixed-top">
    <div class="container-fluid">

      <!-- Sidebar toggle button for md & sm -->
      <button
        class="btn btn-outline-light d-lg-none me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle sidebar"
      >
        ☰ Menu
      </button>

      <a class="navbar-brand" href="#">HospitalMS</a>

      <!-- Navbar links -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="topNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Settings</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" href="#">Logout</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script setup>
/* No JS needed - Bootstrap handles toggle */
</script>

<style scoped>
/* Optional styles */
</style>
