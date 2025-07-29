# Contact Form Setup - Quick Guide

## Step 1: Install EmailJS
Run this command in your project terminal:
```bash
npm install @emailjs/browser
```

## Step 2: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email
3. Verify your account

## Step 3: Add Email Service
1. Click "Add New Service"
2. Choose "Gmail"
3. Connect your Gmail account (ranveer30654@gmail.com)
4. Copy the **Service ID** (looks like: service_xxxxxxx)

## Step 4: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set template content:

**Subject:** New message from {{from_name}} - {{subject}}

**Content:**
```
Hello Ranveer,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save and copy the **Template ID** (looks like: template_xxxxxxx)

## Step 5: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (looks like: xxxxxxxxxxxxxxx)

## Step 6: Update Contact.tsx
Replace these placeholders in Contact.tsx:
- `YOUR_SERVICE_ID` → your actual service ID
- `YOUR_TEMPLATE_ID` → your actual template ID  
- `YOUR_PUBLIC_KEY` → your actual public key

## Step 7: Test
1. Fill out the contact form
2. Click "Send Message"
3. Check your Gmail inbox!

## Example Configuration:
```typescript
emailjs.init('abcdefghijklmnop'); // Your public key

const result = await emailjs.sendForm(
  'service_abc123',    // Your service ID
  'template_xyz789',   // Your template ID
  form.current!,
  'abcdefghijklmnop'   // Your public key
);
```

That's it! Your contact form will now send emails directly to ranveer30654@gmail.com