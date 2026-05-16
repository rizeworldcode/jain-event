const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, eventType, message } = req.body;

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "vikasjangid3352@gmail.com",
        pass: "wtqe znhi gtmv oyfa",
      },
    });

    // Mail details
    const mailOptions = {
      from: email,
      to: "vikasjangid3352@gmail.com",
      subject: `New Message From ${name} - ${eventType}`,
      text: `
You have a new enquiry from your website:

Name: ${name}
Email: ${email}
Phone: ${phone}
Event Type: ${eventType}

Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Message Sent Successfully",
    });

  } catch (error) {
    console.error("Mail Error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});