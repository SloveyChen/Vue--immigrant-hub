<template>
  <div class="tableContainer">
  <div class="btnContainer">
    <el-button type="primary" @click="exportToExcel">Export to Excel</el-button>
  </div>
      <el-table :data="paginatedData" border     @filter-change="handleFilterChange">
        <el-table-column prop="name" label="Activity Name" />
        <el-table-column prop="date" label="Activity Date" sortable />
        <el-table-column prop="location" label="Location" />
        <el-table-column prop="participants" label="Participants" />
        <el-table-column prop="organizer" label="Organizer" />
        <el-table-column prop="registrationDeadline" label="Registration Deadline" />

        <el-table-column
            prop="status"
            label="Status"
            :filters="filterOptions.status"
            :filter-method="filterMethod"
       >
        </el-table-column>

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
import {ElPagination} from "element-plus";
import * as XLSX from "xlsx";


import FileSaver from 'file-saver';
const generateRandomActivities = () => {
  const statuses = ['Upcoming', 'Ongoing', 'Completed'];
  const activities = [];
  for (let i = 1; i <= 20; i++) {
    activities.push({
      id: i,
      name: `Activity ${i}`,
      date: `2024-10-${String(i).padStart(2, '0')}`,
      location: `Location ${i}`,
      participants: Math.floor(Math.random() * 100) + 1,
      organizer: `Organizer ${i}`,
      registrationDeadline: `2024-10-${String(i + 5).padStart(2, '0')}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }
  return activities;
};
const activities = ref(generateRandomActivities());
const selectedStatus = ref(null);
const currentPage = ref(1);
const pageSize = ref(10);
const filteredData = computed(() => {
  return activities.value.filter(a => {
    return !selectedStatus.value || a.status === selectedStatus.value;
  });
});
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  return filteredData.value.slice(start, start + pageSize.value);
});
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




// Filter options for each column
const filterOptions = {
  status: [{ text: 'Upcoming', value: 'Upcoming' }, { text: 'Ongoing', value: 'Ongoing' }, { text: 'Completed', value: 'Completed' }]
};

const handleFilterChange = (filters) => {
  const isReset = Object.values(filters).every(value => value.length === 0);
  if (isReset) {
   selectedStatus.value = null;
  }
};

// Filter method
const filterMethod = (value, row, column) => {
  selectedStatus.value = value;
  if (!value) return true;

  const key = column.property;
  return row[key] === value;
};

// Pagination method
const handleCurrentChange = (page) => {
  currentPage.value = page;
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
