# 🧑‍💻 PeerHire - Frontend Internship Assignment

## 🚀 Overview

This project is a submission for the PeerHire Frontend Internship Assignment. It includes a **Freelancer Profile Page** and a **Project Bidding Dashboard**, built using **React.js** and **Tailwind CSS**, with **MUI** used for some UI components.

The goal was to simulate a real-world freelancing platform interface, focusing on interactivity, responsive design, and local state persistence using LocalStorage.

---

## 📄 Features

### 👤 Freelancer Profile Page

- Displays freelancer details (name, skills, experience, and portfolio links).
- Lists completed projects with descriptions and dates.
- Includes a 1–5 ⭐ rating system.
  - Ratings are saved using **LocalStorage**.
  - Average rating is displayed and updates in real time.

### 📊 Project Bidding Dashboard

- Displays a list of available projects (from mock API or JSON file).
- Freelancers can:
  - Submit bids (amount, duration, and proposal).
  - View status of submitted bids (**Pending / Accepted / Rejected**).
- Bid data is stored in **LocalStorage** for persistence.

### 🌗 Dark Mode

- Toggleable dark mode using Tailwind CSS.
- User preference (light/dark) can be stored and remembered using LocalStorage (bonus).

---

## 🛠️ Tech Stack

- **React.js**
- **Tailwind CSS**
- **Material UI (MUI)**
- **Mock API / JSON File**

---

## 📂 Folder Structure (Simplified)
## 📁 Freelancer_Profile/

```bash
├── packages/                           # README.md containing deployment steps, important json and java script packages
├── public/
│   ├── index.html                      # HTML entry point
│   └── assets/                         # Logo, manifest, icons, etc.
│
├── src/
│   ├── components/
│   │   └── FreelancerProfile.js        # Main UI component for profile
│   ├── App.js                          # App entry point
│   ├── index.js                        # Renders App to the DOM
│   ├── index.css                       # Tailwind base styles
│   ├── App.css                         # Custom styles
│   └── ...                             # Additional config or utility files
│
├── tailwind.config.js                 # Tailwind CSS configuration
├── postcss.config.js                  # PostCSS setup for Tailwind
├── package.json                       # Project dependencies and metadata
└── README.md                          # You're reading it :)
```
## 📁 Project_Bidding_Dashboard/

```bash
├── packages/
│   ├── README.md                     # Package information
│   ├── package-lock.json             # Exact dependency tree
│   ├── package.json                  # Project dependencies and scripts
│   └── tailwind.config.js            # Tailwind CSS configuration
│
├── public/
│   ├── favicon.ico                   # Favicon for browser tab
│   ├── index.html                    # HTML entry point
│   ├── logo192.png                   # App logo
│   ├── logo512.png                   # App logo (larger)
│   ├── manifest.json                 # PWA manifest
│   ├── projects.json                 # Mock project data
│   └── robots.txt                    # SEO / crawler settings
│
├── src/
│   ├── App.css                       # Custom styles
│   ├── App.js                        # Main application logic
│   ├── App.test.js                   # Unit tests
│   ├── BidForm.js                    # Component to place a bid
│   ├── DarkModeToggle.js             # Toggle for dark mode
│   ├── ProjectList.js                # Component to display available projects
│   ├── index.css                     # Tailwind base styles
│   ├── index.js                      # React DOM render
│   ├── logo.svg                      # App logo (SVG format)
│   ├── reportWebVitals.js            # Performance measurement
│   └── setupTests.js                 # Test environment setup
```
## 🌍 Deployment

**Freelancer Profile:**  
🔗 [https://task01-git-main-akshat-priyadarshis-projects.vercel.app](https://task01-git-main-akshat-priyadarshis-projects.vercel.app)

**Project Bidding Dashboard:**  
🔗 [https://task02-git-main-akshat-priyadarshis-projects.vercel.app](https://task02-git-main-akshat-priyadarshis-projects.vercel.app)/
📧 Contact
```bash
  idhnap2005@gmail.com
```
Author Name-Akshat Priyadarshi
