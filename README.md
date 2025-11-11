# 🚀 Y4NN777 - Portfolio

A stunning, modern portfolio website built with cutting-edge technologies and beautiful animations inspired by Aceternity UI design principles.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.0-FF0055)

## Localization (Experimental)

The portfolio now ships with a lightweight translation system:

- Copy is served through the `TranslationProvider` (`src/contexts/TranslationContext.tsx`), which exposes the current locale and a `t(key, fallback?)` helper. The default locale is French (`fr`).
- Strings live in `src/lib/i18n/translations.ts`. Add or edit locales by extending this object (e.g., `en`, `fr`).
- Hero, Navigation, Overview, Experience, Projects, and Tech Stack already pull their copy from the translation dictionaries—use them as blueprints for the remaining sections.
- Any component can call `const { t } = useTranslations();` and replace hard-coded strings with keys such as `t("techStack.heading")`.

To add another language:

1. Add the new locale tree in `translations.ts`.
2. Update `TranslationProvider`’s `defaultLocale` (or later wire it to routing/user preference).
3. Replace literal copy in each section with calls to `t(...)`, adding new keys as needed.

Tech Stack is already wired up as a reference implementation.
