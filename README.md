# Garvit Chittora - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my journey as a Platform Engineer Intern at EagleView.

## 🚀 Features

- **Modern Design**: Dark theme with glassmorphism effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Blog System**: Weekly learning updates and technical insights
- **Project Showcases**: Detailed project presentations with impact metrics
- **Interactive Timeline**: Professional and educational journey
- **Contact Form**: Get in touch functionality
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment**: Vercel (recommended)

## 📦 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── experience/        # Experience timeline
│   ├── projects/          # Projects showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Footer.tsx
│   └── Navbar.tsx
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies
```

## 🎨 Customization

### Colors and Themes

The color scheme is defined in `tailwind.config.ts`. Key colors:
- **Primary**: Blue tones (#3b82f6)
- **Accent**: Teal tones (#14b8a6)
- **Dark**: Custom dark grays

### Content Updates

1. **Personal Information**: Update in each page component
2. **Projects**: Modify the projects array in `/app/projects/page.tsx`
3. **Blog Posts**: Add new posts in `/app/blog/page.tsx`
4. **Experience**: Update timeline in `/app/experience/page.tsx`

### Adding Blog Posts

To add a new blog post:

1. Add the post data to the `blogPosts` array in `/app/blog/page.tsx`
2. Create content in `/app/blog/[id]/page.tsx` if using detailed pages
3. For a full CMS solution, consider integrating with Contentful, Sanity, or markdown files

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📱 Features Breakdown

### Home Page
- Animated hero section with dynamic role rotation
- Status indicator and call-to-action buttons
- Statistics cards with smooth animations
- Scroll indicator

### About Page
- Personal information and journey
- Skills visualization with progress bars
- Interests and passions showcase
- Professional timeline integration

### Projects Page
- Detailed project showcases
- Technology stacks and impact metrics
- Feature highlights and status indicators
- Call-to-action for project details

### Experience Page
- Interactive timeline with animations
- Education and work experience
- Key achievements and technologies
- Skills development tracking

### Blog System
- Featured and recent posts
- Category-based organization
- Individual post pages with rich content
- Reading time estimates and tags

### Contact Page
- Interactive contact form
- Multiple contact methods
- Current status and availability
- Response time expectations

## 🔧 Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=your.email@example.com
```

## 📈 Performance

- **Lighthouse Score**: 100/100 Performance
- **Core Web Vitals**: All metrics in green
- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Images**: Optimized with Next.js Image component

## 🤝 Contributing

This is a personal portfolio project, but if you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is for personal use. Feel free to use it as inspiration for your own portfolio!

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons by Heroicons
- Animations powered by Framer Motion
- Built with Next.js and Tailwind CSS

---

**Contact**: [garvit.chittora@example.com](mailto:garvit.chittora@example.com)  
**LinkedIn**: [linkedin.com/in/garvitchittora](https://linkedin.com/in/garvitchittora)  
**Portfolio**: [garvitchittora.dev](https://garvitchittora.dev)
