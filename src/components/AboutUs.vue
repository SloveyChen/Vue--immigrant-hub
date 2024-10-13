<script setup>
import { ref } from "vue";
import axios from "axios";

// Define form data
const subject = ref("");
const messageText = ref("");
const attachment = ref(null);

// Handle file upload
const handleFileUpload = (event) => {
  attachment.value = event.target.files[0]; // Save file object
};

// Send email function (this is just an example, it can be integrated with the backend)
const sendEmail = async () => {
  console.log("Sending Email:");
  console.log("Subject:", subject.value);
  console.log("Message:", messageText.value);
  console.log(
    "Attachment:",
    attachment.value ? attachment.value.name : "No file selected"
  );
  // Send email function (this is just an example, it can be integrated with the backend)

  try {
    const formData = new FormData();
    formData.append("subject", subject.value);
    formData.append("messageText", messageText.value);
    if (attachment.value) {
      formData.append("attachment", attachment.value);
    }

    const response = await axios.post("/api/send-email", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Email sent successfully:", response.data);
    // Clear form
    subject.value = "";
    messageText.value = "";
    attachment.value = null;
    // Display success message
    alert("邮件发送成功！");
  } catch (error) {
    console.error("Error sending email:", error);
    alert("发送邮件时出错，请稍后再试。");
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="images">
      <div class="image">
        <img src="../assets/img.webp" alt="Image" />
      </div>
      <div class="text">Follow us to get more immigration advice</div>
    </div>

    <!-- Add an email form -->
    <div class="email-form">
      <h2>Email us</h2>
      <form @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="subject">Title:</label>
          <input
            type="text"
            id="title"
            v-model="subject"
            placeholder="Enter email title"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea
            id="message"
            v-model="messageText"
            placeholder="Enter your message"
            required
          ></textarea>
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
/* Adjust the overall wrapper style */
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
  font-size: 1.2rem; /* Reduce text size */
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
  transition: background-color 0.3s ease;
}

.text:hover {
  background-color: #e2e6ea;
}

/* Beautify table style */
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
  text-align: center; /* Center title */
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 0.9rem; /* Shrink label text */
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 0.9rem; /* Shrink the text in the input box */
}

textarea {
  height: 80px; /* Adjust text box height */
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
    font-size: 1rem; /* Reduce text size on mobile devices */
  }

  .email-form h2 {
    font-size: 1.2rem;
  }

  .form-group input,
  .form-group textarea {
    font-size: 0.8rem; /* The text in the mobile input box is smaller*/
  }
}
</style>
