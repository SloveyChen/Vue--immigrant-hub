<template>
  <div class="tableContainer">
    <div class="btnContainer">
      <el-button type="primary" @click="exportToExcel">Export to Excel</el-button>
    </div>
    <el-table :data="paginatedData" @filter-change="handleFilterChange">
      <el-table-column prop="username" label="Username" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="userLevel" label="User Level" />
      <el-table-column prop="registerDate" label="Registration Date" sortable />
      <el-table-column prop="lastLoginTime" label="Last Login Time"  />
      <el-table-column prop="accountStatus" label="Account Status" :filters="statusFilters" :filter-method="filterByStatus">
        <template #default="{ row }">
          {{ row.accountStatus }}
        </template>
      </el-table-column>
      <el-table-column prop="adminPermissions" label="Admin Permissions" />
    </el-table>
   <div class="btnContainer" style="margin-top: 10px;">
     <el-pagination
         @current-change="handleCurrentChange"
         v-model:current-page="currentPage"
         v-model:page-size="pageSize"
         :total="filteredData.length"
         layout="total, prev, pager, next,"

     />
   </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import * as XLSX from 'xlsx';

import FileSaver from 'file-saver';
import { ElTable, ElTableColumn, ElPagination } from 'element-plus';
import moment from "moment";

// State variables
const users = generateRandomUsers(20);
const currentPage = ref(1);
const pageSize = ref(10);
const selectedStatus = ref(null);

// Status filters for the table
const statusFilters = [
  { text: 'Active', value: 'Active' },
  { text: 'Inactive', value: 'Inactive' },
  { text: 'Pending', value: 'Pending' },
];

// Computed properties
const filteredData = computed(() => {
  return users.filter(user => {
    return !selectedStatus.value || user.accountStatus === selectedStatus.value;
  });
});
const handleFilterChange = (filters) => {
  const isReset = Object.values(filters).every(value => value.length === 0);
  if (isReset) {
    selectedStatus.value = null;
  }
};
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return filteredData.value.slice(start, start + pageSize.value);
});

// Methods
const handleCurrentChange = (page) => {
  currentPage.value = page;
};

const filterByStatus = (value, row) => {
  selectedStatus.value = value;
  return row.accountStatus === value;
};

// Function to generate random user data
function generateRandomUsers(count) {
  const usernames = Array.from({ length: count }, (_, i) => `User ${i + 1}`);
  const emails = Array.from({ length: count }, (_, i) => `user${i + 1}@example.com`);
  const userLevels = ['User', 'Administrator'];
  const accountStatuses = ['Active', 'Inactive', 'Pending'];

  return Array.from({ length: count }, () => ({
    username: usernames[Math.floor(Math.random() * count)],
    email: emails[Math.floor(Math.random() * count)],
    userLevel: userLevels[Math.floor(Math.random() * userLevels.length)],
    registerDate:  moment(new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()).format('YYYY-MM-DD'),
    lastLoginTime: moment(new Date(Date.now() - Math.random() * 1000000000).toLocaleString()).format('YYYY-MM-DD HH:mm:ss') ,

    accountStatus: accountStatuses[Math.floor(Math.random() * accountStatuses.length)],
    adminPermissions: Math.random() < 0.5 ? 'Yes' : 'No',
  }));
}

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(filteredData.value);
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
  const excelBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array'
  });
  const data = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
  });
  FileSaver.saveAs(data, 'tableData.xlsx');
};
</script>

<style scoped>
.tableContainer{
  width: 80%;
  margin: 0 auto;
}
.btnContainer{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}
</style>
<style>
html{
  overflow: hidden auto;
}
</style>
