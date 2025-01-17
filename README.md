# **Email Automation Suite: Timestamping and Acknowledgment**

This project is a Node.js application for processing emails with timestamping, printing, and acknowledgment functionalities. The application provides APIs to:
- Save emails with timestamps.
- Print saved emails.
- Send acknowledgment emails to recipients.

---

## **Features**
1. **Receive and Save Emails**:
   - Saves incoming emails locally as `.txt` files.
   - Includes a timestamp for when the email was received.

2. **Print Emails**:
   - Prints saved emails via a connected printer.
   - Simulates printing if no printer is connected.

3. **Send Acknowledgment Emails**:
   - Sends acknowledgment emails to the sender, including:
     - The original email content.
     - The timestamp when the email was received.

4. **Simulated Functionality**:
   - For environments without a physical printer or SMTP server, features like printing and sending emails can be simulated.

---

The project uses **Express** (API framework), **Nodemailer** (email sending), **Body-parser** (request parsing), **Dotenv** (environment variables), **Winston** (logging), **Nodemon** (development server), and **fs** (file system operations).

### **Prerequisites**
- [Node.js](https://nodejs.org) (v14 or later)
- npm (comes with Node.js)
- [Git](https://git-scm.com/)

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/sanketmudaraddi/email-ack-system.git
   cd email-ack-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following configuration:
   ```env
   PORT=3000

   # SMTP Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   EMAIL_FROM_EMAIL=your-email@gmail.com
   EMAIL_FROM_NAME=Your Name
   ```

4. Start the application:
   ```bash
   npm run dev
   ```

---

## **User Workflow**
Here’s how the system works step-by-step:

### **1. Receive an Email**
1. A sender sends an email to your service.
2. The email is processed by the `/api/emails/receive` API.
   - The email content is saved locally as a `.txt` file in the `emails/` directory.
   - A timestamp is generated and associated with the email.

3. The system responds with a confirmation message and the timestamp.

---

### **2. Print the Saved Email**
1. You can print the saved email file by calling the `/api/print` API.
   - Provide the file path of the saved email (e.g., `./emails/1737093108114.txt`).
2. The system will:
   - Send the file to a connected printer.
   - Simulate printing if no printer is connected.

3. A success message is returned after the email is printed.

---

### **3. Send an Acknowledgment Email**
1. Use the `/api/acknowledgments/send` API to send an acknowledgment email to the sender.
2. The acknowledgment email will include:
   - The original email content.
   - The timestamp when the email was received.

3. The recipient will see the acknowledgment email in their inbox, and the system will log the success.

---

## **Logging**
Logs are stored in the `logs/app.log` file and include:
- Application startup information.
- Success and error logs for email processing, printing, and acknowledgment.

---

## **Development**
### **Scripts**
| Command           | Description                   |
|-------------------|-------------------------------|
| `npm start`       | Start the server.            |
| `npm run dev`     | Start the server with `nodemon` for development. |

---

## **Troubleshooting**
1. **Email Not Sent**:
   - Verify the SMTP settings in the `.env` file.
   - Check if the email is in the "Sent" folder of the configured email account.
   - Enable debug mode in `nodemailer` to log SMTP communication.

2. **Print Error**:
   - Ensure a printer is set up on your system (`lpstat -p`).
   - If no printer is available, use the simulated printing functionality.

---

## **License**
This project is licensed under the MIT License.

---
