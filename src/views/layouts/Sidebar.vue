<template>
  <nav
    id="sidebarMenu"
    class="col-lg-2 bg-light sidebar collapse d-lg-block"
  >
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">

        <!-- Dashboard -->
        <li class="nav-item">
          <router-link to="/" class="nav-link active" href="#">Dashboard</router-link>
        </li>
        <!-- ---Users Dropdown---- -->
        <li class="nav-item">
          <a
            class="nav-link d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            href="#usersMenu"
            role="button"
            aria-expanded="false"
            aria-controls="usersMenu"
          >
            Users
            <span class="bi bi-chevron-down"></span>
          </a>
          <div class="collapse" id="usersMenu">
            <ul class="nav flex-column ms-3">
              <li class="nav-item"><router-link to="/manageUser" class="nav-link" href="#">Manage Users</router-link></li>
              <li class="nav-item"><a class="nav-link" href="#">Add Patient</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Add Patient</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Add Patient</a></li>
            </ul>
          </div>
        </li>

        <!-- Patients Dropdown -->
        <li class="nav-item">
          <a
            class="nav-link d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            href="#patientsMenu"
            role="button"
            aria-expanded="false"
            aria-controls="patientsMenu"
          >
            Patients
            <span class="bi bi-chevron-down"></span>
          </a>
          <div class="collapse" id="patientsMenu">
            <ul class="nav flex-column ms-3">
              <li class="nav-item"><router-link to="/paitent" class="nav-link" href="#">List Patients</router-link></li>
              <li class="nav-item"><a class="nav-link" href="#">Add Patient</a></li>
            </ul>
          </div>
        </li>

        <!-- Doctors Dropdown -->
        <li class="nav-item">
          <a
            class="nav-link d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            href="#doctorsMenu"
            role="button"
            aria-expanded="false"
            aria-controls="doctorsMenu"
          >
            Doctors
            <span class="bi bi-chevron-down"></span>
          </a>
          <div class="collapse" id="doctorsMenu">
            <ul class="nav flex-column ms-3">
              <li class="nav-item"><a class="nav-link" href="#">List Doctors</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Add Doctor</a></li>
            </ul>
          </div>
        </li>

        <!-- Appointments Dropdown -->
        <li class="nav-item">
          <a
            class="nav-link d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            href="#appointmentsMenu"
            role="button"
            aria-expanded="false"
            aria-controls="appointmentsMenu"
          >
            Appointments
            <span class="bi bi-chevron-down"></span>
          </a>
          <div class="collapse" id="appointmentsMenu">
            <ul class="nav flex-column ms-3">
              <li class="nav-item"><a class="nav-link" href="#">List Appointments</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Add Appointment</a></li>
            </ul>
          </div>
        </li>

        <!-- Departments Dropdown -->
        <li class="nav-item">
          <a
            class="nav-link d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            href="#departmentsMenu"
            role="button"
            aria-expanded="false"
            aria-controls="departmentsMenu"
          >
            Departments
            <span class="bi bi-chevron-down"></span>
          </a>
          <div class="collapse" id="departmentsMenu">
            <ul class="nav flex-column ms-3">
              <li class="nav-item"><a class="nav-link" href="#">List Departments</a></li>
              <li class="nav-item"><a class="nav-link" href="#">Add Department</a></li>
            </ul>
          </div>
        </li>

        <!-- Reports -->
        <li class="nav-item">
          <a class="nav-link" href="#">Reports</a>
        </li>

        <!-- Logout -->
        <li class="nav-item">
          <a class="nav-link text-danger" href="#">Logout</a>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script setup>
/* No JS needed - Bootstrap collapse handles dropdown */
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
}

/* Active link */
.nav-link.active {
  background-color: #0d6efd;
  color: white;
}

/* Hover effect for all links */
.nav-link:hover {
  background-color: #0bd767; /* darker blue */
  color: white;
  transition: 0.2s;
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
