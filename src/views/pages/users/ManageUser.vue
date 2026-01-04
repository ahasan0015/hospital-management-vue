<script setup lang="ts">
import { api } from '@/config/api';
import type { User } from '@/interfaces/user';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

    const router =useRouter();

    let users =ref<User[]>([]);
    const successMessage = ref<string>('');

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
    onMounted(() =>{
        getUsers();
    });

    function handleDelete(id:number){
        let confirmation = confirm('Are you sure to delete this User');

        if(confirmation){
            api.delete(`users/${id}`)
            .then(response =>{
                console.log(response.data.users);
                successMessage.value = 'User deleted successfully ✅';
                getUsers(); 

                setTimeout(() => {
                    successMessage.value = '';
                }, 3000);
            })
            .catch(error =>{
                console.log(error);
            });
        }

    }

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
                        <input type="text" class="form-control" placeholder="Full Name"/>
                    </div>
                    
                    <div class="col-md-4">
                        <input type="email" class="form-control" placeholder="Email Address"/>
                    </div>
                    
                    <div class="col-md-4">
                        <router-link to="/createUser" type="button" class="btn btn-primary w-100">
                            Add User
                        </router-link>
                    </div>
                    <div v-if="successMessage" class="alert alert-success">
                    {{ successMessage }}
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
              <td>{{ item.fname }} {{ item.lname }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.phone }}</td>
              <td>
                 <span class="badge bg-success" v-if="item.status === 'active'">Active</span>
                <span class="badge bg-secondary" v-else>Inactive</span>
              </td>
              <td>
                <div class="d-flex gap-2">
                    <router-link to="/DetailsUser" class="btn btn-sm btn-primary">Details</router-link>
                    <button class="btn btn-sm btn-warning">Edit</button>
                    <button @click="handleDelete(item.id)" class="btn btn-sm btn-danger">Delete</button>
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
