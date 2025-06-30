# Professional Card Portfolio by WebPurposes
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/N4N01H8FBW)
![New Website Blue Mockup Instagram - Laptop](https://github.com/user-attachments/assets/247ff9ea-c8a0-4661-8529-0762a7763055)


![{3C1800E4-60CB-48CA-A9D7-8D752006E2DB}](https://github.com/user-attachments/assets/82f62201-647a-4868-b213-c1c3066ccce2)


[![Live Preview](https://img.shields.io/badge/Live%20Site-Vercel-%23007ACC?style=for-the-badge&logo=vercel&logoColor=white)](https://next-professional-card.vercel.app/)

"Welcome! I'm excited to share this professional card template with you. I hope this helps showcase your skills and experience effectively. Feel free to customize it to meet your needs and make it your own.

If you find this template useful, please consider giving it a star and sharing it with others who might benefit from it.

Best of luck with all your projects!"

⭐ Leave a star if you find this project helpful! ⭐️

## 🚀 Project Structure

Inside your Next.js project, you'll find the following folders and files:

```
public/
  ├── files/
  |      └── resume-cv.pdf
  ├── images/
  |      └── profile.png
  ├── favicon.ico
components/
  └── Card.js
pages/
  └── index.js
styles/
  ├── globals.css
  └── Card.module.css
```

## User Guide

This guide explains how to customize the template for your personal use:

### Card Customization

#### External Metadata
- **Title**: Change the page title in the browser tab by modifying the `<title>` tag in `pages/index.js`
- **Description**: Update the metadata description for search engines by editing the meta tags

#### Personal Information
- **Name**: Enter your full name in the name prop
- **Position**: Specify your current job title or desired position
- **About Me**: Write a concise professional bio (keep it under 500 characters for best appearance)
- **Social Links**: Add your LinkedIn and GitHub URLs
- **CV/Resume**: Link to your downloadable resume PDF
- **Profile Image**: Add your professional headshot

### File Management

- **Resume**: Place your PDF resume in the `public/files/` folder
- **Profile Image**: Add your profile image to the `public/images/` folder (PNG or WebP recommended)
- **Favicon**: Replace the default favicon in the `public/` directory

### Style Customization

In the `styles` folder, you'll find:
- `globals.css`: For general styling across the site
- `Card.module.css`: For specific card component styling including colors, fonts, shadows, etc.

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (version 14.x or newer)
- npm or yarn

### Installation

#### Option 1: Clone the Repository

```bash
git clone https://github.com/webpurposes/next-professional-card.git
cd next-professional-card
npm install
```

#### Option 2: Download as ZIP

1. Download the ZIP file from the GitHub repository
2. Extract to your preferred location
3. Navigate to the folder and run:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

View your site at http://localhost:3000

### Building for Production

```bash
npm run build
```

## Deployment

### Deploying to Vercel

The easiest way to deploy this Next.js app:

1. Push your code to GitHub
2. Import your project to Vercel
3. Let Vercel handle the rest!

You can also use Vercel CLI:

```bash
vercel
```

### Other Deployment Options

This Next.js app can also be deployed to other platforms like Netlify, AWS Amplify, or any service that supports Next.js.

## Commands

All commands are run from the project root:

| Command | Action |
|---------|--------|
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server at localhost:3000 |
| `npm run build` | Builds your production site |
| `npm start` | Serves the production build |
| `npm run lint` | Runs ESLint |

## 👀 Want to learn more about Next.js?

Check out the [Next.js Documentation](https://nextjs.org/docs) to learn more about features and API.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

