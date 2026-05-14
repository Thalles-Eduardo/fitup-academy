# 🧘 Fitup Academy

A modern, premium fitness and wellness platform showcasing yoga styles and health benefits with stunning cinematic animations, smooth scroll interactions, and immersive UI experiences.

---

## ✨ Preview

> A fully animated fitness academy experience with dynamic transitions, interactive yoga style exploration, scroll-triggered animations, and premium health-focused design.



https://github.com/user-attachments/assets/af7307a3-e91c-4a02-90c2-8b256f02b087



---

# 🖼 Features

- 🎬 Cinematic scroll-triggered animations with GSAP
- 🧘 Dynamic yoga style selection system with interactive cards
- 💫 Advanced character & word splitting animations (SplitText)
- 🎨 Modern and premium wellness UI design
- 🔄 Smooth section transitions and parallax effects
- 🩺 Health benefit showcase with interactive image carousel
- 📊 Live statistics counter animations
- ✨ Advanced GSAP ScrollTrigger integration
- 📱 Fully responsive and mobile-optimized layout
- 🚀 Built with Next.js App Router & React 19
- 🎯 Optimized performance with proper plugin registration
- 🌟 Interactive hover animations and micro-interactions
- 🎪 Infinite scroll components for content discovery

---

# 🛠 Technologies

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **TailwindCSS 4** - Utility-first styling
- **GSAP 3** - Advanced animation library
- **GSAP ScrollTrigger** - Scroll-based animations
- **SplitText Plugin** - Text splitting animations
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - High-quality React components
- **Lucide React** - Icon library
- **ESLint** - Code quality

---

# 📂 Project Structure

```bash
fitup-academy/
│
├── app/
│   ├── layout.tsx              
│   ├── page.tsx                
│   ├── globals.css            
│   │
│   ├── hero/
│   │   ├── Hero.tsx           
│   │   └── hero.css
│   │
│   ├── advantage/
│   │   ├── Advantage.tsx       
│   │   └── advantage.css
│   │
│   ├── yoga/
│   │   ├── Yoga.tsx            
│   │   └── yoga.css
│   │
│   └── footer/
│       ├── Footer.tsx          
│       └── footer.css
│
├── components/
│   └── ui/
│       ├── Separator.tsx       
│       ├── WeeklyOverview.tsx  
│       ├── Date/
│       │   ├── Date.tsx        
│       │   └── date.css
│       ├── InfiniteScroll/
│       │   ├── InfiniteScroll.tsx
│       │   └── infiniteScroll.css
│       └── YogaModel/
│           ├── YogaModel.tsx   
│           └── yogaModel.css
│
├── lib/
│   └── utils.ts               
│
├── public/
│   └── images/                 
```

---

# 🎯 Key Features in Detail

## 🎬 Cinematic Scroll Animations
- **Main Page Timeline**: Synchronized scroll-triggered animations with GSAP ScrollTrigger
- **Pinned Viewport**: Sticky sections that animate in while scrolling
- **ScrubTrigger**: Smooth scrub animations linked to scroll position (1.5s smoothness)
- **Section Entrance**: Sections slide in from left/right/bottom with blur effects

## 🧘 Yoga Style Discovery
- Six interactive yoga style cards with hover animations
- Each card features a unique yoga pose image with descriptive labels
- Smooth entry animations triggered on scroll
- "Check All" call-to-action for expanded exploration

## 💫 Text Animation System
- **Character Splitting**: Letter-by-letter entrance animations
- **Word Splitting**: Word-based fade and slide effects
- **Staggered Delays**: Cinematic text reveals with precise timing
- **Number Animations**: Animated counter for statistics

## 🩺 Health Benefits Showcase
- Interactive carousel showing organ/cell health benefits (Heart, Liver, Cells)
- Next/Previous navigation with smooth image transitions
- Educational content about fitness advantages
- Scroll-triggered appearance with 3D rotation effects

## 📊 Live Statistics
- Animated counters for fitness metrics
- Real-time number updates with GSAP snapshots
- Responsive layout for mobile and desktop

---

# 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fitup-academy

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

# 📦 Available Scripts

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint checks
npm run lint
```
