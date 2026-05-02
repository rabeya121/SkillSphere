# 🎓 SkillSphere – Online Learning Platform

A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.

## 🌐 Live URL
[SkillSphere Live](https://skill-sphere-brown.vercel.app)

---

## ✨ Key Features

- 🎥 **Hero Slider** — Dynamic banner with Swiper.js
- 🔥 **Popular Courses** — Top 3 highest-rated courses
- 📚 **All Courses** — Browse all courses with search functionality
- 🔒 **Protected Route** — Course details only accessible when logged in
- 👤 **Authentication** — Email/Password & Google login with BetterAuth
- 📝 **User Profile** — View and update profile info
- 📌 **Learning Tips** — Study techniques and time management tips
- 🏆 **Top Instructors** — Featured instructor cards
- 🔥 **Trending Courses** — Most popular courses section
- 🔍 **Search** — Search courses by title
- 📱 **Fully Responsive** — Mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **Framework** — Next.js (App Router)
- **Styling** — Tailwind CSS, HeroUI
- **Authentication** — BetterAuth
- **Database** — MongoDB Atlas
- **Icons** — React Icons

---

## 📦 NPM Packages Used

| Package | Purpose |
|---------|---------|
| `better-auth` | Authentication |
| `swiper` | Hero slider |
| `react-hot-toast` | Toast notifications |
| `react-icons` | Icons |
| `mongodb` | Database |
| `@heroui/react` | UI Components |

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/rabeya121/SkillSphere.git
cd skillsphere
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root:
```dotenv
BETTER_AUTH_SECRET=your_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure
skillsphere/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── [...all]/
│   │   │           └── route.js
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── page.jsx
│   │   │   └── register/
│   │   │       └── page.jsx
│   │   ├── main/
│   │   │   ├── courses/
│   │   │   │   ├── page.jsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.jsx
│   │   │   ├── profile/
│   │   │   │   └── page.jsx
│   │   │   └── update-profile/
│   │   │       └── page.jsx
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── not-found.jsx
│   └── components/
│       ├── Navbar.jsx
│       ├── Footer.jsx
│       ├── Hero.jsx
│       ├── Stats.jsx
│       ├── PopularCourses.jsx
│       ├── LearningTips.jsx
│       ├── TopInstructors.jsx
│       └── TrendingCourses.jsx
├── lib/
│   ├── courses.js
│   ├── auth.js
│   └── auth-client.js
├── public/
│   └── images/
├── .env
├── next.config.js
└── README.md

---

## 👩‍💻 Developer
Rabeya Khatun b-13