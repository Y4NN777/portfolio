# 🚀 Y4NN777 - Portfolio

A stunning, modern portfolio website built with cutting-edge technologies and beautiful animations inspired by Aceternity UI design principles.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.0-FF0055)
![React](https://img.shields.io/badge/React-19.0-61DAFB)

## ✨ Features

### 🎨 Modern UI/UX
- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Dark/Light Mode**: Beautiful theme switching with smooth transitions
- **Animated Components**: Stunning animations powered by Framer Motion
- **Custom Animations**: Pulse glow, floating elements, gradient shifts, typing effects, and more
- **Geometric Accents**: Subtle background patterns and decorative elements

### 🌐 Internationalization (i18n)
- **Multi-language Support**: Built-in translation system with English and French
- **Easy Extension**: Add new languages by extending the translation object
- **Context-based**: Uses React Context API for global translation access
- **Type-safe**: Full TypeScript support for translation keys

### 📧 Contact Integration
- **EmailJS Integration**: Send messages directly from the contact form
- **Form Validation**: Client-side validation for better UX
- **Status Feedback**: Real-time submission status (idle, success, error)

### 📊 Analytics
- **PostHog Integration**: Privacy-focused product analytics
- **Page View Tracking**: Automatic pageview capture
- **Exception Tracking**: Built-in error tracking
- **Page Leave Capture**: Track user engagement

### 🎯 Portfolio Sections
- **Hero Section**: Eye-catching introduction with typewriter effect for roles
- **Overview Section**: About me with core skills and experience
- **Tech Stack**: Visual display of technologies and tools
- **Experience**: Professional work history with detailed descriptions
- **Projects**: Showcase of featured projects with live demos and GitHub links
- **Certifications**: Display of professional certifications and achievements
- **Contact**: Interactive contact form with social media links
- **Footer**: Professional footer with additional information

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.5**: React framework with App Router and Turbopack
- **React 19.0**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development

### Styling & UI
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **Framer Motion 12**: Production-ready animation library
- **Radix UI**: Accessible, unstyled component primitives
  - Separator, Slot, Tooltip components
- **Lucide React**: Beautiful icon library
- **Iconify**: Comprehensive icon framework

### Utilities
- **clsx & tailwind-merge**: Conditional className utilities
- **class-variance-authority**: Component variant management

### Services & Integrations
- **EmailJS**: Email service for contact form
- **PostHog**: Product analytics and feature flags

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Main portfolio page
│   │   ├── globals.css         # Global styles and CSS variables
│   │   └── icon.png            # App icon
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── HeroSection.tsx         # Landing hero section
│   │   │   ├── Navigation.tsx          # Top navigation bar
│   │   │   ├── OverviewSection.tsx     # About me section
│   │   │   ├── TechStackSection.tsx    # Technologies display
│   │   │   ├── ExperienceSection.tsx   # Work experience
│   │   │   ├── ProjectsSection.tsx     # Featured projects
│   │   │   ├── CertificationsSection.tsx
│   │   │   ├── ContactSection.tsx      # Contact form
│   │   │   ├── Footer.tsx
│   │   │   ├── Background.tsx          # Animated background
│   │   │   ├── SectionHeader.tsx       # Reusable section header
│   │   │   └── TypewriterRole.tsx      # Typewriter animation
│   │   ├── ThemeProvider.tsx   # Dark/light mode provider
│   │   ├── ThemeToggle.tsx     # Theme switcher component
│   │   ├── PostHogProvider.tsx # Analytics provider
│   │   └── AnimatedBackground.tsx
│   ├── contexts/
│   │   └── TranslationContext.tsx  # i18n context and provider
│   └── lib/
│       └── i18n/
│           └── translations.ts  # Translation dictionaries
├── public/                      # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
├── postcss.config.mjs          # PostCSS configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.x or higher
- **npm**: 10.x or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Y4NN777/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy the example environment file and configure it:
   ```bash
   cp env-example .env
   ```
   
   Update `.env` with your actual values:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

### Development

Run the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Running Production Build

```bash
npm start
```

Starts the production server.

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality and consistency.

## 🌍 Localization (i18n)

The portfolio includes a lightweight, extensible translation system:

### How It Works

- **Translation Provider**: Copy is served through the `TranslationProvider` (`src/contexts/TranslationContext.tsx`)
- **Translation Hook**: Use `const { t, locale, setLocale } = useTranslations();` in any component
- **Translation Files**: All strings live in `src/lib/i18n/translations.ts`
- **Default Locale**: French (`fr`) is the default locale

### Supported Sections

The following sections are fully internationalized:
- Navigation
- Hero Section
- Overview/About
- Tech Stack
- Experience
- Projects
- Certifications
- Contact

### Adding a New Language

1. **Add the locale tree** in `src/lib/i18n/translations.ts`:
   ```typescript
   export const translations = {
     en: { /* English translations */ },
     fr: { /* French translations */ },
     es: { /* Add Spanish */ }
   };
   ```

2. **Update the TranslationProvider** (optional):
   - Change `defaultLocale` in `src/contexts/TranslationContext.tsx`
   - Or wire it to routing/user preference

3. **Use translations in components**:
   ```typescript
   const { t } = useTranslations();
   return <h1>{t("hero.tagline")}</h1>;
   ```

## 🎨 Theming

### Dark/Light Mode

The portfolio supports automatic theme switching:

- **Theme Provider**: `src/components/ThemeProvider.tsx` manages theme state
- **Theme Toggle**: Click the sun/moon icon in the navigation
- **Persistent**: Theme preference is saved to localStorage
- **CSS Variables**: Custom colors defined in `src/app/globals.css`

### Custom Colors

Tailwind is configured with a comprehensive color system using CSS custom properties. Edit `src/app/globals.css` to customize:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... more colors */
}

.dark {
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  /* ... dark mode colors */
}
```

## 📧 Setting Up EmailJS

To enable the contact form:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template** with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key
5. **Add to `.env`** file as shown in the setup section

## 📊 Setting Up PostHog Analytics

To enable analytics:

1. **Create a PostHog account** at [posthog.com](https://posthog.com/)
2. **Get your project API key**
3. **Add to `.env`**:
   ```env
   NEXT_PUBLIC_POSTHOG_KEY=your_project_api_key
   NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
   ```

PostHog automatically tracks:
- Page views
- Page leave events
- Exceptions (when enabled)

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. **Push your code to GitHub**
2. **Import your repository** on Vercel
3. **Add environment variables** in Vercel dashboard
4. **Deploy**

Vercel automatically handles:
- Continuous deployment from your main branch
- Preview deployments for pull requests
- Edge network distribution
- Automatic HTTPS

### Other Platforms

You can also deploy to:
- **Netlify**: Supports Next.js with zero configuration
- **Railway**: Simple deployment with automatic HTTPS
- **AWS Amplify**: Enterprise-grade hosting
- **Self-hosted**: Use `npm run build && npm start`

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add some amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Test your changes thoroughly
- Update documentation as needed
- Keep commits focused and descriptive

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ragnang-Newende Yanis Axel DABO (Y4NN777)**

- GitHub: [@Y4NN777](https://github.com/Y4NN777)
- Email: y4nn.dev@gmail.com

## 🙏 Acknowledgments

- Design inspiration from [Aceternity UI](https://ui.aceternity.com/)
- Icons from [Iconify](https://iconify.design/) and [Lucide](https://lucide.dev/)
- UI components from [Radix UI](https://www.radix-ui.com/)

---

<p align="center">Made with ❤️ by Y4NN777</p>
