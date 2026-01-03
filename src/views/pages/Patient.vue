<template>
  <div>
    <!-- Page Header -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Patients</h2>
      <button class="btn btn-primary">+ Add Patient</button>
    </div>

    <!-- Patients Table -->
    <div class="table-responsive">
      <table class="table table-bordered table-hover">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>35</td>
            <td>Male</td>
            <td>1234567890</td>
            <td>
              <button class="btn btn-sm btn-info me-1">Edit</button>
              <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Female</td>
            <td>0987654321</td>
            <td>
              <button class="btn btn-sm btn-info me-1">Edit</button>
              <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Michael Brown</td>
            <td>42</td>
            <td>Male</td>
            <td>5678901234</td>
            <td>
              <button class="btn btn-sm btn-info me-1">Edit</button>
              <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Sara Wilson</td>
            <td>30</td>
            <td>Female</td>
            <td>4567890123</td>
            <td>
              <button class="btn btn-sm btn-info me-1">Edit</button>
              <button class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
/* No JS needed, static page */
</script>

<style scoped>
.table th,
.table td {
  vertical-align: middle;
}

.btn {
  min-width: 70px;
}
</style>
