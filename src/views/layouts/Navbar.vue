<template>
  <nav class="navbar navbar-dark bg-primary fixed-top">
    <div class="container-fluid">

      <!-- Sidebar toggle button (mobile & md) -->
      <button
        class="btn btn-outline-light d-lg-none me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      <!-- Brand -->
      <a class="navbar-brand" href="#">HospitalMS</a>

      <!-- Navbar links -->
      <div class="d-none d-lg-flex ms-auto">
        <ul class="navbar-nav flex-row">
          <li class="nav-item me-3">
            <a class="nav-link text-white" href="#">Dashboard</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link text-white" href="#">Patients</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link text-white" href="#">Doctors</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link text-white" href="#">Appointments</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link text-white" href="#">Departments</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link text-white" href="#">Reports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger" href="#">Logout</a>
          </li>
        </ul>
      </div>

      <!-- Navbar collapse for mobile -->
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topNav"
        aria-controls="topNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse d-lg-none" id="topNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Dashboard</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Patients</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Doctors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Appointments</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Departments</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Reports</a>
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
/* No JS needed – Bootstrap handles collapse */
</script>

<style scoped>
.navbar-brand {
  font-weight: bold;
}

/* Hover effect for links */
.nav-link:hover {
  color: #ffc107; /* yellow on hover */
  transition: 0.2s;
}
</style>
