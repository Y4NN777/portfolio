# 🚀 Y4NN777 - Portfolio

A modern portfolio website built with Next.js, TypeScript, and beautiful animations.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC)
![React](https://img.shields.io/badge/React-19.0-61DAFB)

## ✨ Features

- 🎨 **Responsive Design** with dark/light mode
- 🌐 **Multi-language Support** (English & French)
- ⚡ **Smooth Animations** with Framer Motion
- 📧 **Contact Form** with EmailJS integration
- 📊 **Analytics** with PostHog

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Y4NN777/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp env-example .env
# Edit .env with your credentials

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📝 Environment Variables

Create a `.env` file with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router & Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI, Lucide Icons
- **Services**: EmailJS, PostHog

## 📦 Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Run production server
npm run lint   # Run ESLint
```

## 🌍 Internationalization

The portfolio supports multiple languages. To add a new language:

1. Add translations in `src/lib/i18n/translations.ts`
2. Use the `useTranslations()` hook in components:

```typescript
const { t } = useTranslations();
return <h1>{t("hero.tagline")}</h1>;
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👤 Author

**Y4NN777** - [GitHub](https://github.com/Y4NN777) • [Email](mailto:y4nn.dev@gmail.com)

---

<p align="center">Made with ❤️ by Y4NN777</p>
