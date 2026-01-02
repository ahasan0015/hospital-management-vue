<template>
  <nav
    id="sidebarMenu"
    class="col-lg-2 bg-light sidebar collapse d-lg-block"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" href="#">Dashboard</a>
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
  </nav>
</template>

<script setup>
/* No JS needed */
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
}

/* Active link style */
.nav-link.active {
  background-color: #0d6efd;
  color: #fff;
}

/* Mobile & md screens */
@media (max-width: 991px) {
  .sidebar {
    position: fixed;
    top: 56px; /* navbar height */
    left: 0;
    width: 250px;
    height: 100vh;
    z-index: 1050;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .sidebar.collapse.show {
    transform: translateX(0);
  }
}
</style>
