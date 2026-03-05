# Rogue TV Reference Sheet

Use this guide to copy-paste complex styling during the demo.

## 1. Layouts

### Dashboard Layout (Sidebar)
// Main Wrapper (Full Height, Dark Background)
`flex h-screen bg-zinc-950 text-white overflow-hidden`

// Sidebar Container (Fixed Width, Border Right)
`w-64 flex-shrink-0 border-r border-white/10 p-6 flex flex-col`

// Brand/Logo Container
`mb-10 flex items-center gap-2`

// Logo Box (Red R)
`w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold`

// Navigation Item (Link)
`px-4 py-3 rounded-md text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors`

### Detail Layout (Transparent Header)
// Wrapper
`bg-zinc-950 min-h-screen text-white relative`

// Absolute Header (Gradient Overlay)
`absolute top-0 left-0 w-full z-50 p-8 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent`

// Back Button
`flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors`

---

## 2. Components

### ShowRow.tsx
// Section Title
`text-xl font-bold mb-4 px-4`

// Scroll Container (Horizontal Scroll, No Scrollbar)
`flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide`

### ShowCard.tsx
// Card Wrapper (Prevent shrinking in flex row)
`flex-shrink-0 w-[160px] group cursor-pointer`

// Image Container (Aspect Ratio 2:3)
`relative aspect-[2/3] rounded-md overflow-hidden mb-2 shadow-lg transition-transform group-hover:scale-105`

// Image Class (Next.js Image)
`object-cover`

// Title Text
`font-medium text-sm text-gray-200 group-hover:text-white truncate`

### AddToListButton.tsx
// Button (Dynamic Styles handled in logic, base classes here)
`px-8 py-3 rounded font-bold text-lg transition-colors flex items-center gap-2`

// Active State (Green)
`bg-green-600 text-white`

// Inactive State (Gray Transparent)
`bg-gray-600/50 text-white hover:bg-gray-600`

---

## 3. Pages

### Dashboard Page (`/`)
// Main Container (Spacing)
`space-y-8 pb-20`

### Detail Page (`/shows/[id]`)
// Hero Container (85% Height)
`relative h-[85vh] w-full`

// Hero Image (Opacity for overlay)
`object-cover object-top opacity-60`

// Gradient Overlay (Fade to Black at bottom)
`absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent`

// Hero Content (Positioned Bottom Left)
`absolute bottom-0 left-0 p-12 w-full max-w-4xl`

// Title (Big & Bold)
`text-6xl font-black mb-4 tracking-tighter shadow-black drop-shadow-2xl`

// Meta Info Row (Rating, Year)
`flex items-center gap-4 text-lg font-medium mb-6`

// Match Score (Green)
`text-green-400`

// Description Text
`px-12 max-w-3xl text-lg text-gray-300 leading-relaxed space-y-4`

---

## 4. Loading UI

### Skeleton Loader
// Pulsing Wrapper
`space-y-10 p-6 animate-pulse`

// Title Bar Skeleton
`h-6 w-48 bg-zinc-800 rounded`

// Card Row Skeleton
`flex gap-4 overflow-hidden`

// Card Skeleton
`flex-shrink-0 w-[160px] aspect-[2/3] bg-zinc-800 rounded-md`
