<template>
    <div class="auth-container">
      <h2>Firebase Authentication</h2>
      <el-form :model="form">
        <!-- Email input box -->
        <el-form-item label="Email">
          <el-input v-model="form.email" placeholder="Email" />
        </el-form-item>
       <!-- Password input box -->
        <el-form-item label="Password">
          <el-input v-model="form.password" type="password" placeholder="Password" />
        </el-form-item>
        <!-- Register Button -->
        <el-button type="primary" @click="register">Register</el-button>
        <!-- Login Button -->
        <el-button type="success" @click="login">Login</el-button>
      </el-form>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  import { useRouter } from 'vue-router';
  import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
  
  const router = useRouter();
  const form = ref({
    email: '',
    password: ''
  });
  let auth = getAuth()
  // Firebase Register
  const register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.value.email, form.value.password);
      ElMessage({
        message: 'Registration successful!',
        type: 'success',
      });
      localStorage.setItem('token', userCredential.user.uid);
    } catch (error) {
      ElMessage.error(`Registration failed: ${error.message}`);
    }
  };
  
  // Firebase Lgoin in
  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, form.value.email, form.value.password);
      ElMessage({
        message: 'Login successful!',
        type: 'success',
      });
      localStorage.setItem('token', userCredential.user.uid);
      setTimeout(() => {
        router.push('/mainpageuser'); 
      }, 1000);
    } catch (error) {
      ElMessage.error(`Login failed: ${error.message}`);
    }
  };
  </script>
  
  <style scoped>
  
  .auth-container {
    width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  </style>
  