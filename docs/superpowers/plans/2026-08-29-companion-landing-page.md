# Companion Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a responsive landing page for an original desktop AI companion concept with the same broad page rhythm as heyclicky.com.

**Architecture:** Use a static Vite + React page composed from small presentational sections. Keep all artwork CSS/SVG-based so there are no copied logos, screenshots, videos, or written material from the reference site.

**Tech Stack:** Vite, React, TypeScript, CSS, GitHub, Vercel.

**Spec:** Reference inspected at https://www.heyclicky.com/; recreate its general section order and playful desktop mood with an original brand, content, and art.

## Global Constraints

- Use original product name, copy, icons, and illustration work.
- Include a responsive nav, hero, feature demonstrations, founder note, testimonials, pricing, FAQ, and footer.
- Support keyboard focus and reduced motion.
- Deploy from a public GitHub repository through Vercel.

---

### Task 1: Create the Vite project shell

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/styles.css`

**Interfaces:**
- Produces: an `npm run build` script and a React application mounted at `#root`.

- [ ] **Step 1: Create the application files**

Create a Vite React TypeScript setup with a single `App` export and CSS import in `main.tsx`.

- [ ] **Step 2: Build it**

Run: `npm run build`
Expected: a successful production bundle in `dist/`.

### Task 2: Implement original page sections and desktop illustration

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `App` from Task 1.
- Produces: navigation anchors, interactive pricing interval controls, FAQ details, and the complete responsive landing page.

- [ ] **Step 1: Add semantic page sections**

Add `header`, `main`, named `section` anchors, cards, button links, and `details` FAQ controls.

- [ ] **Step 2: Add CSS artwork and responsive layout**

Use inline SVG and CSS for the abstract companion, desktop controls, patterns, pricing cards, and motion. Add a `prefers-reduced-motion` override.

- [ ] **Step 3: Build it**

Run: `npm run build`
Expected: the page compiles without TypeScript errors.

### Task 3: Verify and publish

**Files:**
- Create: `.gitignore`
- Create: `README.md`

**Interfaces:**
- Consumes: successful production build from Task 2.
- Produces: a public GitHub repository and a live Vercel deployment URL.

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: exit code 0.

- [ ] **Step 2: Create a GitHub repository and push**

Run: `git init && git add . && git commit -m "Build companion landing page" && gh repo create companion-desktop --public --source=. --remote=origin --push`
Expected: GitHub reports a public repository URL.

- [ ] **Step 3: Deploy to Vercel**

Run: `vercel --prod --yes`
Expected: Vercel reports a public deployment URL.
