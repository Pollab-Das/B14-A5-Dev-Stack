# 🚀 Dev Stack — Build Your Ideal Development Stack

Hey there! 👋

This is **Dev Stack** — a small project I built to solve a problem I kept running into: when starting a new project, I always had to open 10 different browser tabs to compare frontend libraries, backend frameworks, databases, and tools. So I thought — why not build one place where I can explore, compare, and pick my perfect stack? And that idea turned into this.

Now you can browse through curated technologies, see their ratings and difficulty levels, add them to your personal stack with a single click, and watch your stack come together in real time. It's simple, clean, and honestly — I had a lot of fun building it.

---

## 🛠 Tech Stack

Here's what I used to build this:

- **React 19** — for building the UI with components. I also tried out the new `use()` hook for the first time instead of the usual `useEffect` + `useState` combo for data fetching.
- **TypeScript** — because I really don't like debugging "undefined is not a function" errors at 2 AM. Type safety is a lifesaver.
- **Vite** — the build tool. Once you use Vite, going back to older bundlers feels painful.
- **Tailwind CSS v4** — for styling. I'm a huge fan of utility-first CSS — writing styles right inside the markup just makes sense to me.
- **DaisyUI v5** — gives me some ready-made components on top of Tailwind when I don't want to build everything from scratch.
- **React Toastify** — for those little popup notifications. Small touch, but it makes the app feel alive.
- **React Icons** — for all the small icons scattered around.

---

## ✨ What It Does

Let me walk you through what actually happens when you open the app:

### 1. Explore Technologies
You'll see a grid of technology cards — React, Vue, Svelte, Next.js, Node.js, PostgreSQL, Redis, JavaScript, TypeScript, Java, Tailwind CSS, and Docker. Each card shows the logo, a short description, its category (Frontend / Backend / Database / Language / Styling / DevOps), the difficulty level, and a rating.

### 2. Build Your Stack
When you click **"Add to Stack"** on a card, it immediately gets added to the **"Your Stack"** panel on the right side. You'll get a toast notification confirming it. The button also changes to a pink **"✓ Added to Stack"** state so you know it's already in there.

### 3. Manage Your Stack
The Your Stack panel is sticky — so even if you scroll down through all the technology cards, your selected stack stays right there in view. Handy, right?
You can:
- Remove a single technology by clicking the ❌ button
- Clear everything at once with **"Remove All"**

Each action gives you a toast notification so you're never confused about what just happened.

### 4. Responsive Design
This one was important to me. The app works smoothly on mobile, tablet, and desktop. On mobile, the navbar collapses into a hamburger menu, and on desktop, everything spreads out nicely. I made sure nothing overlaps, no matter what screen size you're on.

---

## 🎨 Design Notes

I wanted the design to feel modern but not overdone. So I went with:
- A **gradient brand color** — orange → pink → violet, used in the hero heading, buttons, and the brand logo.
- **Soft shadows** and **rounded corners** on cards — nothing too sharp or aggressive.
- A **clean white background** so the colors really pop.
- Small details like the pink "Added to Stack" state and the pink border on selected cards — these little touches make the app feel polished.

---

## ❓ React Fundamentals Q&A

### 1. What is JSX, and why is it used in React?
JSX is HTML-like syntax that lets us write UI directly inside JavaScript, making React components easier to read and write.

### 2. What is the difference between props and state?
Props are read-only data passed from parent to child, while state is data a component owns and can change itself.

### 3. What does the useState hook do, and where did you use it in this project?
`useState` adds state to a component and re-renders it when the value changes — I used it in `App.tsx` to track selected technologies and in `Navbar.tsx` to toggle the mobile menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects like data fetching after render, but in this project I used React 19's new `use()` hook with `Suspense` instead, which resolves the promise directly and shows a fallback while loading.

### 5. Why does every item in a .map() list need a unique key prop?
Keys help React identify which items changed, were added, or removed, so it can update the DOM efficiently — I used `tech.id` as the key for each technology.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI based on a condition — in `YourStack.tsx` I check if `selectedTechs.length === 0` to show an empty state or the list of selected techs.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parents pass data to children through props, and children send data back by calling callback functions passed down as props — like `TechCard` calling `onAdd(tech)` when the user clicks "Add to Stack."

---

## 📸 Live Demo

🔗 **[b14-a5-dev-stack.vercel.app](https://b14-a5-dev-stack.vercel.app/)**

Check it out live — no installation needed. Just open the link and start building your stack! 🚀

---

## 🙏 Final Thoughts

This started as a small side project, but I ended up learning a lot — especially about state management, component composition, responsive design, and how nice a well-organized folder structure feels.

If you have any feedback, suggestions, or just want to say hi — feel free to reach out.

Thanks for reading! 🚀

---

© 2026 Dev Stack. All rights reserved.