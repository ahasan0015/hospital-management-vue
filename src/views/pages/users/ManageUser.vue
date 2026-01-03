<script setup lang="ts">

</script>

<template>
  <div class="container py-5">
    <div class="card">
      <div class="card-header bg-dark text-white">
        <h5 class="mb-0">User Management</h5>
      </div>

      <div class="card-body">
        <!-- User Form (Static) -->
        <form class="mb-4">
          <div class="row g-3">
            <div class="col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Full Name"
              />
            </div>

            <div class="col-md-4">
              <input
                type="email"
                class="form-control"
                placeholder="Email Address"
              />
            </div>

            <div class="col-md-4">
              <router-link to="/createUser" type="button" class="btn btn-primary w-100">
                Add User
              </router-link>
            </div>
          </div>
        </form>

        <!-- User Table (Static) -->
        <table class="table table-bordered table-striped">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th width="160">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Ahasan Habib</td>
              <td>ahasan@gmail.com</td>
              <td>
                <button class="btn btn-sm btn-warning me-2">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Roxy</td>
              <td>roxy@gmail.com</td>
              <td>
                <button class="btn btn-sm btn-warning me-2">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>John Doe</td>
              <td>john@gmail.com</td>
              <td>
                <button class="btn btn-sm btn-warning me-2">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
