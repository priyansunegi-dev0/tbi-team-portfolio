# Team Portfolio - Anmol & Priyansu

A collaborative full-stack portfolio website showcasing a 7-day development sprint. Built with React, Node.js, and MongoDB.

## 📋 Project Overview

This portfolio demonstrates a complete team workflow:
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB
- **Deployment**: Vercel (Frontend) & Render (Backend)
- **DevOps**: GitHub Actions CI/CD Pipeline

## 🎯 Team Roles

### Anmol - Frontend Lead + DevOps
- React architecture and UI/UX implementation
- Tailwind CSS styling and responsive design
- Vercel deployment and GitHub Actions pipelines
- **Mutual Contributions**: API Integration, Database Design, Deployment Strategy

### Priyansu - Backend Lead + Database
- RESTful API development with Express
- MongoDB Atlas database design and optimization
- Render deployment and server configuration
- **Mutual Contributions**: Frontend Performance, Error Handling, API Documentation

## 🚀 Features

### Interactive Sections
1. **The Team** - Meet Anmol and Priyansu with their roles and mutual contributions
2. **Tech Stack** - Complete technology overview with ownership labels
3. **7-Day Execution Timeline** - Detailed day-by-day development plan
4. **Git Workflow** - Best practices for version control and CI/CD
5. **Kanban Board** - Real-time project management visualization

### Design Highlights
- Dark theme with sophisticated color palette
- Custom cursor animations
- Responsive mobile-first design
- Smooth fade-in animations on scroll
- Fixed navigation with section links

## 📁 Project Structure

```
PORTFOLIO/
├── src/
│   ├── components/
│   │   └── TeamPortfolio.jsx       # Main portfolio component
│   ├── App.jsx                      # Root component
│   ├── main.jsx                     # Vite entry point
│   └── index.css                    # Global styles
├── index.html                       # HTML template
├── vite.config.js                   # Vite configuration
├── package.json                     # Dependencies
└── README.md                        # This file
```

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool with HMR
- **Tailwind CSS** - Utility-first styling
- **Axios 1.6.2** - HTTP client

### Backend (Not in this repo)
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - ODM library

### DevOps & Deployment
- **GitHub** - Version control & collaboration
- **GitHub Actions** - CI/CD automation
- **Vercel** - Frontend deployment
- **Render** - Backend deployment

## 🎨 Color System

The portfolio uses a sophisticated dark theme:
- **Deepest Black**: `#0a0a0f` - Main background
- **Dark Navy**: `#111118` - Secondary backgrounds
- **Card Dark**: `#16161f` - Card backgrounds
- **Hover State**: `#1a1a25` - Interactive states
- **Border**: `#2a2a3a` - Dividers & borders
- **Accent Green**: `#7fffb2` - Anmol (Frontend)
- **Accent Red**: `#ff6b6b` - Priyansu (Backend)
- **Accent Purple**: `#a78bfa` - Both/Team

## 🚀 Quick Start

### Prerequisites
- Node.js v16 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/priyansunegi-dev0/tbi-team-portfolio.git
cd tbi-team-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will run on `http://localhost:3000`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📅 7-Day Development Sprint

### Day 1: Setup
- GitHub repo + branch protection + Kanban board
- React + Vite + Tailwind setup
- Node.js + Express + MongoDB Atlas connection

### Day 2: Core Features
- Home page hero section, Navbar + Footer
- Projects REST API (GET/POST/DELETE)
- Contact form backend route

### Day 3: Personal Pages
- Portfolio pages for both team members
- Skills grid and project cards
- Individual project listings

### Day 4: Integration
- Contact form UI + Axios integration
- CORS + .env configuration
- End-to-end API testing

### Day 5: Polish
- Responsive mobile design
- Animation and transitions
- Error handling and validation

### Day 6: Deployment
- Vercel frontend deployment
- Render backend deployment
- GitHub Actions CI/CD pipeline

### Day 7: Ship
- Final PR review and testing
- Documentation and screenshots
- Live site verification

## 📊 Git Workflow

### Branch Strategy
- `main` - Production branch (protected)
- `develop` - Development branch
- `feature/*` - Feature branches from develop

### Commit Convention
```
feat: New feature
fix: Bug fix
style: Code style changes
chore: Build/setup changes
docs: Documentation changes
```

### Pull Request Process
1. Create feature branch from develop
2. Commit with semantic messages
3. Push to GitHub and open PR
4. Team review + CI checks
5. Merge to develop, then to main for deployment

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root:

```
VITE_API_URL=http://localhost:5000
```

### Vite Configuration
Edit `vite.config.js` for custom build settings:

```javascript
export default {
  server: {
    port: 3000,
  }
}
```

## 📝 Frontend Tasks

**Anmol's Primary Tasks:**
- React + Vite Setup & Routing
- Home Page, Navbar & Footer
- Contact Form UI + Axios Integration
- Backend API Testing & Review
- Vercel Deployment & GitHub Actions

**Mutual Tasks:**
- API Integration
- Database Design
- Deployment Strategy

## 📝 Backend Tasks (Reference)

**Priyansu's Primary Tasks:**
- Node.js + Express Server Setup
- MongoDB Atlas + Mongoose
- Projects & Contact APIs
- Frontend UI Testing & Feedback
- Render Deployment & API Docs

**Mutual Tasks:**
- Frontend Performance
- Error Handling
- API Documentation

## 🎯 Key Achievements

✅ Full-stack application built in 7 days  
✅ Responsive design with custom styling  
✅ GitHub Actions CI/CD pipeline  
✅ Automated deployment process  
✅ Professional portfolio showcase  
✅ Team collaboration workflow  

## 📞 Contact & Links

- **GitHub Repo**: https://github.com/priyansunegi-dev0/tbi-team-portfolio
- **Live Portfolio**: https://tbi-team-portfolio.vercel.app
- **Backend API**: https://tbi-team-portfolio-backend.onrender.com

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Want to contribute? 
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built by Anmol & Priyansu**  
Ship fast. Ship together. 🚀
