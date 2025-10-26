# Book Vibe — Boi Poka
Book Vibe — Boi Poka is a React-based book listing web app built with Vite, Tailwind CSS, and DaisyUI. It allows users to explore books, view detailed information, and manage a personalized Read List using browser local storage. The project features responsive card layouts, toast notifications, and dynamic routing with React Router. It’s lightweight, fast, and fully deployed on Netlify for a smooth single-page experience.

---

## Table of contents
- [Demo](#demo)  
- [Tech stack](#tech-stack)  
- [Directory structure](#directory-structure)  
- [Features](#features)  
- [Quick Start](#quick-start)  
- [Available Scripts](#available-scripts)  
---

## Demo
Live: **https://book-vibe-boi.netlify.app/**

---

## Tech stack
- React (Vite)  
- React Router  
- Tailwind CSS + DaisyUI (UI primitives)  
- react-toastify (notifications)  
- Local storage utility for read/wish lists  
- Netlify (hosting)

---

## 📁 Directory Structure

```
public/
├─ booksData.json
├─ vite.svg
├─ _redirects

src/
├─ App.css
├─ App.jsx
├─ index.css
├─ main.jsx
├─ assets/
│  ├─ books.jpg
│  └─ react.svg
├─ components/
│  ├─ Banner.jsx
│  ├─ Book.jsx
│  ├─ BookDetails.jsx
│  ├─ Books.jsx
│  ├─ Dashboard.jsx
│  ├─ ErrorPage.jsx
│  ├─ Footer.jsx
│  ├─ Home.jsx
│  ├─ ListedBooks.jsx
│  ├─ Navbar.jsx
│  └─ Root/
│     └─ Root.jsx
└─ utility/
   └─ AddToDB.js
```

This structure represents a typical **Vite + React project** setup.
- `public/` holds static assets and redirect rules for Netlify.
- `src/` contains the main application code, assets, components, and utilities.


---

## Features
- Browse book cards (responsive layout)  
- View book details (route-based)  
- Mark books as **Read** (persisted in `localStorage`)  
- Read list management (view, sort)  
- Toast notifications for actions  
- 404 / error page handling  
- Deployed and configured for Netlify (includes `_redirects`)

---

## Quick Start

### Requirements
- Node.js (>= 16 recommended)
- npm or yarn

## 🚀 Local Setup

### 1. Clone the Repository
```bash
git clone <https://github.com/Muhammad-Abu-Yusuf-Nayeem/book-vibe-47.git>
cd <repo-folder>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

Now open **[http://localhost:5173](http://localhost:5173)** (or the port shown by Vite).

---

## 🏗️ Build for Production
```bash
npm run build
```

### Preview the Production Build Locally
```bash
npm run preview
```

---

## 📜 Available Scripts

These assume a standard **Vite + React** setup in `package.json`:

| Script | Description |
|--------|--------------|
| `npm run dev` | Start development server |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` / `npm run format` | (If configured) Code quality and formatting tools |

---

## 📦 Notes & Deployment

- The file **`public/_redirects`** is included for **SPA routing** on Netlify.  
- Ensure **`booksData.json`** path is preserved during deployment.  
  Netlify serves files from the `/public` folder by default in Vite.  
- If you see **404 errors** for `booksData.json`, verify that:
  - The file exists in the final build output.
  - The Netlify publish directory includes it.

---

