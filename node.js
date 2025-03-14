import express from "express";
import sgMail from "@sendgrid/mail";
import multer from "multer";
import fs from "fs";
import path from "path";

const app = express();
const upload = multer({ dest: "uploads/" });

// Set the SendGrid API key
sgMail.setApiKey(
  "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"
);

app.post("/api/send-email", upload.single("attachment"), async (req, res) => {
  try {
    const { subject, messageText } = req.body;
    const attachment = req.file;

    let attachments = [];
    if (attachment) {
      const fileContent = fs.readFileSync(attachment.path);
      attachments.push({
        content: fileContent.toString("base64"),
        filename: attachment.originalname,
        type: attachment.mimetype,
        disposition: "attachment",
      });
    }
    
    console.log("see")
    const msg = {
      to: ["chenxiaoguangcxg@hotmail.com", "slovey99521@gmail.com"], // Recipient's Email
      from: "chenxiaoguangcxg@hotmail.com", // The sender email address you have verified on SendGrid
      subject: subject,
      text: messageText,
      attachments: attachments,
    };

    await sgMail.send(msg);

    // Delete temporary files
    if (attachment) {
      fs.unlinkSync(attachment.path);
    }

    res.status(200).json({ message: "邮件发送成功" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "发送邮件时出错" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
