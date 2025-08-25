# Rucha Khanolkar Portfolio

A modern, clean personal portfolio built with Astro and Tailwind CSS, showcasing work experience, case studies, ceramics, and personal projects.

## 🌟 Features

### **Main Navigation**
- **Work**: Professional experience timeline with case studies
- **Ceramics**: Photo gallery showcasing ceramic art pieces
- **Archived**: Collection of past projects and classwork
- **About Me**: Personal bio, social links, and resume

### **Interactive Elements**
- **Side Panel Navigation**: Smooth sliding panels for content
- **Case Study Pages**: Detailed project breakdowns with images
- **Responsive Design**: Mobile-first approach with full-width mobile panels
- **Scroll Management**: Smart scroll behavior when panels are open

## 🚀 Tech Stack

- **Astro**: Modern static site generator for fast, optimized sites
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Responsive Design**: Mobile-first responsive design approach
- **GitHub Pages**: Automated deployment with GitHub Actions
- **Clean Architecture**: Organized components and layouts

## 📱 Site Structure

### **Core Pages**
- **Home** (`/`): Hero section with navigation to all sections
- **Work** (`/work`): Professional experience and case studies
- **Ceramics** (`/ceramics`): Ceramic art gallery

### **Interactive Sections** (via Side Panels)
- **Work Experience**: Timeline of professional roles at Fiserv, Publicis Sapient, Decibel Therapeutics
- **Case Studies**: 
  - Verizon Security Dashboard
  - Study Tracker (Decibel Therapeutics)
  - MyChart Healthcare App
  - Rose Bud Thorn App
  - Curious Boston Data Project
- **Design Class Work**: Typography and poster projects
- **About Me**: Personal bio, social links, and resume

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js installed on your system.

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd portfolio-site
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

Build the site for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## 🎨 Customization

### Content

- Update personal information in the Layout.astro file
- Replace project data with your actual projects
- Add your own ceramic pieces to the gallery
- Customize case study content and images

### Styling

- Modify colors and typography in `tailwind.config.mjs`
- Update component styles in individual `.astro` files
- Add custom CSS in `src/styles/global.css`

### Images

- Replace project images in the `/public/` directory
- Add ceramic photos to the gallery
- Update the favicon in `/public/favicon.png`

## 📁 Project Structure

```
src/
├── layouts/
│   └── Layout.astro          # Base layout with side panel navigation
├── pages/
│   ├── index.astro           # Home page with hero section
│   ├── work.astro            # Work portfolio page
│   └── ceramics.astro        # Ceramics gallery page
├── styles/
│   └── global.css            # Global styles and Tailwind imports
└── components/               # Reusable components (add as needed)

public/                       # Static assets (images, PDFs, favicon)
├── favicon.png              # Site favicon
├── rucha.png                # Profile photo
├── resume.pdf               # Resume file
└── [project images]         # All project and ceramic images
```

## 🚀 Deployment

This site is automatically deployed to **GitHub Pages** using GitHub Actions:

- **Repository**: `https://github.com/rak9812/ruchakhanolkarportfolio`
- **Live Site**: `https://rak9812.github.io/ruchakhanolkarportfolio`
- **Deployment**: Automatic deployment on push to main branch

### Alternative Deployment Options

This is a static site that can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository
- **Vercel**: Import your project
- **Any static host**: Upload the `dist/` folder after building

## 🔧 Key Features

### **Side Panel System**
- Smooth sliding animations
- Mobile-responsive design (full-width on mobile)
- Scroll management and body scroll locking
- Escape key support for closing panels

### **Case Study Navigation**
- Back buttons for easy navigation
- Consistent layout across all case studies
- Image galleries and project details
- Professional presentation of work

### **Mobile Experience**
- Full-width side panels on mobile devices
- Touch-friendly navigation
- Optimized spacing and typography
- Responsive image layouts

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Cursor AI**

