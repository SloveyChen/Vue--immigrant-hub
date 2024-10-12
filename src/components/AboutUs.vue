<script setup>
import { ref } from 'vue';

// 定义表单数据
const subject = ref('');
const messageText = ref('');
const attachment = ref(null);

// 处理文件上传
const handleFileUpload = (event) => {
  attachment.value = event.target.files[0]; // 保存文件对象
};

// 发送电子邮件函数 (此处只是示例，可以与后端进行集成)
const sendEmail = () => {
  console.log('Sending Email:');
  console.log('Subject:', subject.value);
  console.log('Message:', messageText.value);
  console.log('Attachment:', attachment.value ? attachment.value.name : 'No file selected');
  // 此处可用axios向后端发送请求
};
</script>

<template>
  <div class="wrapper">
    <div class="images">
      <div class="image">
        <img src="../assets/img.webp" alt="Image">
      </div>
      <div class="text">Follow us to get more immigration advice</div>
    </div>

    <!-- 添加电子邮件发送表格 -->
    <div class="email-form">
      <h2>Email us</h2>
      <form @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="subject">Title:</label>
          <input type="text" id="title" v-model="subject" placeholder="Enter email title" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="messageText" placeholder="Enter your message" required></textarea>
        </div>
        <div class="form-group">
          <label for="attachment">Attachment:</label>
          <input type="file" id="attachment" @change="handleFileUpload" />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* 调整整体的wrapper样式 */
.wrapper {
  width: 100%;
  padding: 20px 10%;
  background: linear-gradient(135deg, #e6e6fa, #d8bfd8); 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.images {
  display: flex;
  width: 90%;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.image {
  flex: 2;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

.text {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem; /* 缩小文本大小 */
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
  transition: background-color 0.3s ease;
}

.text:hover {
  background-color: #e2e6ea;
}

/* 美化表格样式 */
.email-form {
  margin-top: 50px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 20px auto;
}

.email-form h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: center; /* 标题居中 */
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 0.9rem; /* 缩小label文本 */
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-group input, .form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem; /* 缩小输入框文本 */
}

textarea {
  height: 80px; /* 调整文本框高度 */
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4682b4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 10px;
}

button:hover {
  background-color: #5a9bd6;
}

@media (max-width: 768px) {
  .text {
    font-size: 1rem; /* 缩小移动端的文本大小 */
  }

  .email-form h2 {
    font-size: 1.2rem;
  }
  
  .form-group input, .form-group textarea {
    font-size: 0.8rem; /* 移动端输入框文本更小 */
  }
}
</style>
