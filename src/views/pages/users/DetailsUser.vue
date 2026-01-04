<template>
  <div class="container-fluid py-5">
    <div class="card shadow-sm w-100">

      <!-- Header -->
      <div class="card-header bg-dark text-white py-3">
        <h5 class="mb-0 fw-semibold">User Profile</h5>
      </div>

      <!-- Body -->
      <div class="card-body px-4">

        <div class="row align-items-center">
          
          <!-- Left: Image -->
          <div class="col-md-3 text-center mb-4 mb-md-0">
            <img
              src="https://via.placeholder.com/200x200.png/0055ee?text=people+iste"
              alt="User Image"
              class="rounded-circle border"
              width="140"
              height="140"
            />
          </div>

          <!-- Right: Info -->
          <div class="col-md-9">

            <h4 class="fw-bold mb-1">
              Rachael Auer
            </h4>

            <span class="badge bg-secondary mb-3">
              Inactive
            </span>

            <div class="row mt-3">
              <div class="col-md-6 mb-2">
                <strong>Email:</strong>
                <span class="text-muted">qmante@example.net</span>
              </div>

              <div class="col-md-6 mb-2">
                <strong>Phone:</strong>
                <span class="text-muted">(972) 523-1016</span>
              </div>

              <div class="col-md-6 mb-2">
                <strong>Role ID:</strong>
                <span class="text-muted">2</span>
              </div>

              <div class="col-md-6 mb-2">
                <strong>Created At:</strong>
                <span class="text-muted">03 Jan 2026, 09:24 PM</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="card-footer d-flex justify-content-between px-4">
        <router-link to="/manageUser" class="btn btn-outline-secondary btn-sm">
          ← Back to Users
        </router-link>

        <div class="d-flex gap-2">
          <button class="btn btn-warning btn-sm">Edit</button>
          <button class="btn btn-danger btn-sm">Delete</button>
        </div>
      </div>

    </div>
  </div>
</template>
