# Portfolio Site

A modern, clean personal portfolio built with Astro and Tailwind CSS.

## Features

- **Home**: Hero section with introduction and featured work
- **Work**: Project showcase with filtering capabilities
- **Ceramics**: Photo gallery for ceramic art pieces
- **Contact**: Contact form and information

## Tech Stack

- **Astro**: Modern static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Clean Architecture**: Organized components and layouts

## Getting Started

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

## Customization

### Content

- Update personal information in the pages
- Replace placeholder project data with your actual projects
- Add your own ceramic pieces to the gallery
- Customize contact information

### Styling

- Modify colors and typography in `tailwind.config.mjs`
- Update component styles in individual `.astro` files
- Add custom CSS if needed

### Images

- Replace placeholder gradients with actual project images
- Add ceramic photos to the gallery
- Update the favicon in `/public/favicon.svg`

## Structure

```
src/
├── layouts/
│   └── Layout.astro          # Base layout with navigation
├── pages/
│   ├── index.astro           # Home page
│   ├── work.astro            # Work portfolio
│   ├── ceramics.astro        # Ceramics gallery
│   └── contact.astro         # Contact page
└── components/               # Reusable components (add as needed)
```

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Netlify**: Connect your Git repository
- **Vercel**: Import your project
- **GitHub Pages**: Use GitHub Actions
- **Any static host**: Upload the `dist/` folder after building

## License

This project is open source and available under the MIT License.

