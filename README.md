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

