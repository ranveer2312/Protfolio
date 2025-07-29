# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for free account
3. Verify your email

## Step 2: Create Email Service
1. Go to Email Services
2. Add New Service
3. Choose Gmail (recommended)
4. Connect your Gmail account (ranveer30654@gmail.com)
5. Copy the Service ID

## Step 3: Create Email Template
1. Go to Email Templates
2. Create New Template
3. Use this template:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Copy the Template ID

## Step 4: Get Public Key
1. Go to Account Settings
2. Copy your Public Key

## Step 5: Install EmailJS
```bash
npm install @emailjs/browser
```

## Step 6: Update Contact Component
Replace the commented EmailJS code with your actual keys:

```typescript
import emailjs from '@emailjs/browser';

// In handleSubmit function:
const result = await emailjs.send(
  'YOUR_SERVICE_ID',     // From Step 2
  'YOUR_TEMPLATE_ID',    // From Step 3
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'      // From Step 4
);
```

## Benefits of EmailJS:
- ✅ Messages sent directly to your inbox
- ✅ No dependency on visitor's email client
- ✅ Professional delivery
- ✅ Free tier: 200 emails/month
- ✅ Reliable and secure