<script setup lang="ts">
import { api } from '@/config/api';
import type { User } from '@/interfaces/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

    const router =useRouter();

    let users =ref<User[]>([]);

    function getUsers(){
        api.get('users')
        .then(response=>{
            console.log(response.data);
            users.value = response.data.users;
        })
        .catch(error=>{
            console.log(error);
        })
    }
    getUsers();

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
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th width="160">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in users" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.fname }}{{ item.lname }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.phone }}</td>
              <td>
                 <span class="badge bg-success" v-if="item.status === 'active'">Active</span>
                <span class="badge bg-secondary" v-else>Inactive</span>
              </td>
              <td>
                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-primary">Details</button>
                    <button class="btn btn-sm btn-warning">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </div>
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
