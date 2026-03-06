# Rogue TV: Complete UI Reference

## 1. Sidebar (`layout.tsx`)

- **Main Container:** `w-64 flex-shrink-0 border-r border-white/10 p-6 flex flex-col bg-black`
- **Logo Wrapper:** `mb-10 flex items-center gap-3`
- **Logo Icon (Red Box):** `w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white`
- **Logo Text:** `text-xl font-bold tracking-tight text-white`
- **Nav List:** `flex flex-col gap-1`
- **Nav Link (Base):** `px-4 py-3 rounded-md text-sm font-medium transition-colors flex items-center gap-3`
- **Nav Link (Inactive):** `text-gray-400 hover:bg-white/10 hover:text-white`
- **Nav Link (Active):** `bg-white text-black font-bold`

## 2. Dashboard (`page.tsx`)

- **Page Container:** `space-y-10 pb-20 pt-6 px-6`
- **Section Title:** `text-xl font-semibold mb-4 text-gray-100`
- **Scroll Row Container:** `flex gap-4 overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide`

## 3. Show Card (`ShowCard.tsx`)

- **Link Wrapper:** `flex-shrink-0 w-[150px] group cursor-pointer`
- **Image Wrapper:** `relative aspect-[2/3] rounded-md overflow-hidden mb-2 shadow-black shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:z-10`
- **Image:** `object-cover`
- **Title:** `font-medium text-sm text-gray-400 group-hover:text-white truncate transition-colors`

## 4. Detail Layout (`(detail)/layout.tsx`)

- **Wrapper:** `relative min-h-screen bg-zinc-950 text-white`
- **Header (Transparent):** `absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent`
- **Back Link:** `flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-white transition-colors`

## 5. Detail Hero (`page.tsx`)

- **Hero Container:** `relative h-[70vh] w-full`
- **Background Image:** `object-cover opacity-50`
- **Gradient Overlay:** `absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent`
- **Content Position:** `absolute bottom-0 left-0 p-12 w-full max-w-3xl`
- **Title:** `text-5xl md:text-7xl font-black mb-6 tracking-tighter drop-shadow-2xl`
- **Meta Row:** `flex items-center gap-4 text-lg font-medium mb-8`
- **Match Score:** `text-green-400 font-bold`
- **Year:** `text-gray-300`
- **HD Badge:** `border border-gray-500 px-2 py-0.5 rounded text-xs text-gray-400`
- **Button Row:** `flex gap-4`
- **Play Button:** `bg-white text-black px-8 py-3 rounded font-bold text-lg hover:bg-gray-200 transition-colors flex items-center gap-2`

## 6. Add To List Button (`AddToListButton.tsx`)

- **Button Base:** `px-8 py-3 rounded font-bold text-lg transition-colors flex items-center gap-2 border`
- **State: Added:** `bg-transparent border-gray-400 text-white hover:bg-white/10`
- **State: Not Added:** `bg-gray-600/80 border-transparent text-white hover:bg-gray-600`

## 7. Skeleton Loader (`loading.tsx`)

- **Wrapper:** `p-6 space-y-8 animate-pulse`
- **Title Bar:** `h-8 w-48 bg-zinc-800 rounded mb-4`
- **Card Row:** `flex gap-4 overflow-hidden`
- **Card:** `flex-shrink-0 w-[150px] aspect-[2/3] bg-zinc-800 rounded-md`
