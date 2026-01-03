<template>
  <div class="container my-4">
    <h1 class="mb-4">Create User</h1>

    <form>
      <div class="row g-3">

        <!-- First Name -->
        <div class="col-md-6">
          <label class="form-label">First Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter first name"
          />
        </div>

        <!-- Last Name -->
        <div class="col-md-6">
          <label class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter last name"
          />
        </div>

        <!-- Email -->
        <div class="col-md-6">
          <label class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
          />
        </div>

        <!-- Phone -->
        <div class="col-md-6">
          <label class="form-label">Phone</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter phone"
          />
        </div>

        <!-- Password -->
        <div class="col-md-6">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Enter password"
          />
        </div>

        <!-- Confirm Password -->
        <div class="col-md-6">
          <label class="form-label">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Confirm password"
          />
        </div>

        <!-- Role -->
        <div class="col-md-6">
          <label class="form-label">Role</label>
          <select class="form-select">
            <option selected disabled>Select role</option>
            <option>Admin</option>
            <option>User</option>
            <option>Doctor</option>
          </select>
        </div>

        <!-- Status -->
        <div class="col-md-6">
          <label class="form-label">Status</label>
          <select class="form-select">
            <option selected>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <!-- Image Upload -->
        <div class="col-md-12">
          <label class="form-label">Profile Image</label>
          <input
            type="file"
            class="form-control"
            accept="image/*"
          />
        </div>

        <!-- Submit Button -->
        <div class="col-12 mt-3">
          <button type="button" class="btn btn-primary w-100">
            Create User
          </button>
        </div>

      </div>
    </form>
  </div>
</template>
