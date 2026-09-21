# ⚛️ React Ecosystem

A hands-on tour of the React ecosystem. Start with small beginner projects, then move through hooks, React 19, TypeScript, routing, state management, and forms, one focused example at a time.

Every folder is a **standalone Vite project**. Open it, install, run.

---

## 📚 Table of Contents

| # | Section | What you'll learn | Language |
|---|---------|-------------------|----------|
| 1 | [Beginners Projects](#1-beginners-projects) | 10 small projects to build core skills | JavaScript |
| 2 | [Fundamentals and REACT Hooks](#2-fundamentals-and-react-hooks) | Components, props, state, effects, refs, context | JavaScript |
| 3 | [Advanced Hooks (React 19)](#3-advanced-hooks-react-19) | `use`, `useContext`, Actions, `useActionState`, `useFormStatus`, `useTransition` | TypeScript |
| 4 | [REACT with TypeScript](#4-react-with-typescript) | Typing props, state, refs, events, context, reducers | TypeScript |
| 5 | [REACT Router](#5-react-router) | Client-side routing and navigation | JavaScript |
| 6 | [Redux Toolkit](#6-redux-toolkit) | Slices, store, global state | TypeScript |
| 7 | [RTK Query](#7-rtk-query) | Data fetching, caching, mutations | TypeScript |
| 8 | [React Hook Form](#8-react-hook-form) | Simple and advanced form handling | TypeScript |

> 🚧 This repo is growing. New topics will be added over time.

---

## 🗂️ Repository Structure

```
react-ecosystem/
├── Beginners Projects/
│   ├── 1. Counter
│   ├── 2. Todo
│   ├── 3. Meals API Project
│   ├── 4. Calculator
│   ├── 5. Color Toggler
│   ├── 6. Search Icon Project
│   ├── 7. Testamonials
│   ├── 8. Accordions
│   ├── 9. Form Validation
│   └── 10. E-Commerce Advance Filtering
├── Fundamentals and REACT Hooks/
├── Advanced-Hooks-REACT-19/
│   ├── use-and-useContext
│   └── actions-useFormStatus-useActionState-useTransition
├── REACT with TypeScript/
│   ├── UseState Types
│   ├── Props Typing & Reusable Types
│   ├── UseRef, Forms, Events
│   └── Context API, useReducer, useEffect
├── REACT Router/
├── Redux Toolkit/
├── RTK Query/
└── React Hook Form/
```

---

## 🧭 What's Inside

### 1. Beginners Projects
Ten small projects that build confidence with core React concepts.

| Project | Concepts practiced |
|---------|--------------------|
| Counter | `useState`, event handling |
| Todo | Lists, state updates, controlled inputs |
| Meals API Project | Fetching data from an API, rendering lists |
| Calculator | State logic, conditional handling |
| Color Toggler | Conditional styling |
| Search Icon Project | Toggling UI state |
| Testimonials | Rendering data, simple carousel logic |
| Accordions | Open/close state, conditional rendering |
| Form Validation | Controlled forms, validation rules |
| E-Commerce Advance Filtering | Combined filters (category, color, price, search), component composition |

### 2. Fundamentals and REACT Hooks
Core React building blocks through many small examples: components, props, styling, lists, conditional rendering, `useState`, `useEffect`, `useRef`, and `useContext`.

### 3. Advanced Hooks (React 19)
Modern React 19 features:
- **`use-and-useContext`**: the `use` API for promises and context, plus custom data-fetching hooks.
- **`actions-useFormStatus-useActionState-useTransition`**: form Actions, pending states, and non-blocking UI updates.

### 4. REACT with TypeScript
Four focused projects on typing React the right way:
- **UseState Types**: typing state for counters, todos, and user profiles.
- **Props Typing & Reusable Types**: shared `types.ts` and reusable components.
- **UseRef, Forms, Events**: typed refs, form handling, and event handlers.
- **Context API, useReducer, useEffect**: typed context providers, reducers, and effects.

### 5. REACT Router
Multi-page navigation with `react-router-dom`: nav links, nested pages, dashboards, dynamic routes, and error pages.

### 6. Redux Toolkit
Global state management with `@reduxjs/toolkit` and `react-redux`: configuring the store, writing slices (counter and todo), and dispatching actions.

### 7. RTK Query
Server-state management on top of Redux Toolkit: fetching all data, fetching a single item, and adding, updating, and deleting records with automatic caching.

### 8. React Hook Form
Performant forms with `react-hook-form`: a basic form and an advanced form with validation.

---

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) and RTK Query
- [React Hook Form](https://react-hook-form.com/)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Run any project

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/react-ecosystem.git

# 2. Go into any project folder
cd "react-ecosystem/Beginners Projects/1. Counter"

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

> 💡 Folder names contain spaces, so wrap paths in quotes when using the terminal.

---

## 🎯 Suggested Learning Path

1. **Beginners Projects**: build the first few to get comfortable.
2. **Fundamentals and REACT Hooks**: understand hooks properly.
3. **REACT with TypeScript**: add types to what you already know.
4. **Advanced Hooks (React 19)**: learn the newest React features.
5. **REACT Router**: build multi-page apps.
6. **Redux Toolkit → RTK Query**: manage global and server state.
7. **React Hook Form**: build production-quality forms.

---

## ➕ Adding a New Topic

Each new topic is just a new folder with its own Vite project:

```bash
npm create vite@latest "My New Topic" -- --template react-ts
```

Then add a row to the [Table of Contents](#-table-of-contents) and a short section under [What's Inside](#-whats-inside).

---

## 🤝 Contributing

Suggestions and improvements are welcome. Feel free to open an issue or submit a pull request.

## 📄 License

Add your preferred license here (for example, MIT).

---

⭐ If this repo helps you learn React, consider giving it a star!
