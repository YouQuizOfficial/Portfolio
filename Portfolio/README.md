# Personal Portfolio Website

A modern, responsive portfolio website to showcase your skills, projects, and contact information.

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design
- **Interactive Elements**: Smooth scrolling, animations, and interactive components
- **Contact Form**: Easy way for visitors to get in touch
- **Project Showcase**: Highlight your best work
- **Skills Section**: Display your technical skills

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla JS, no frameworks)
- Font Awesome Icons
- Google Fonts
- EmailJS for form handling

## Getting Started

1. Clone this repository or download the files
2. Open `index.html` in your browser to view the website
3. Customize the content to make it your own

## Customization

### Personal Information

Edit the `index.html` file to update:

- Your name
- Professional title
- About section
- Skills
- Projects
- Contact information

### Profile Image

Replace `assets/images/profile.jpg` with your own image.

### Project Images

Replace the project images in `assets/images/` folder:
- project1.jpg
- project2.jpg 
- project3.jpg

### Colors

Change the colors in the CSS variables in `assets/css/styles.css`:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --dark-color: #343a40;
    --light-color: #f8f9fa;
    /* other variables */
}
```

## Structure

```
.
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # CSS styles
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Image files
│       ├── profile.jpg
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
└── README.md               # This documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is available for personal and commercial use.

## Acknowledgements

- Font Awesome for the icons
- Google Fonts for the typography

## Contact Form Setup

The contact form uses EmailJS to send emails without a backend. Follow these steps to set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service:
   - Go to "Email Services" and click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the authentication steps
   - Note the Service ID (e.g., "service_xxxxxxx")

3. Create an email template:
   - Go to "Email Templates" and click "Create New Template"
   - Design your template with these variables:
     - {{to_email}} - Your email (officialyouquiz@gmail.com)
     - {{from_name}} - Sender's name
     - {{from_email}} - Sender's email
     - {{subject}} - Email subject
     - {{message}} - Email message
   - Save the template
   - Note the Template ID (e.g., "template_xxxxxxx")

4. Get your API key:
   - Go to Account > API Keys
   - Copy your public key

5. Update the code:
   - Open `index.html` and replace "YOUR_PUBLIC_KEY" with your actual public key
   - Open `assets/js/script.js` and replace:
     - "YOUR_SERVICE_ID" with your service ID
     - "YOUR_TEMPLATE_ID" with your template ID

After these steps, the contact form will send emails to officialyouquiz@gmail.com whenever someone submits the form. 