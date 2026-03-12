# Shelf

A Next.js book browsing app powered by the Open Library API. Browse books by genre, view detailed book pages, and maintain a personal reading list backed by MongoDB.

## Features

- Browse books by subject (Fantasy, Science Fiction, Mystery, Romance, Horror)
- View detailed book pages with cover art, description, and subjects
- Save/remove books to a personal reading list
- Add notes to saved books
- Optimistic UI updates for save/remove actions

## Tech Stack

- Next.js 16 with App Router
- TypeScript (strict)
- Tailwind CSS v4
- MongoDB via Mongoose
- Open Library API

## Setup

Create a `.env.local` file at the project root:

```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/<dbname>
```

Then run:

```bash
npm install
npm run dev
```

---

## Tailwind CSS Class Reference

---

### Root Layout (`app/layout.tsx`)

#### Body element
```
${geistSans.variable} ${geistMono.variable} antialiased
```

---

### Browse Layout (`app/(browse)/layout.tsx`)

#### Outer wrapper
```
flex min-h-screen bg-zinc-950 text-white
```

#### Sidebar
```
fixed top-0 left-0 z-50 h-screen w-48 bg-zinc-900 border-r border-zinc-800 flex flex-col p-4 gap-6
```

#### Brand heading
```
text-2xl font-bold
```

#### Brand tagline
```
text-sm text-zinc-400
```

#### Nav container
```
flex flex-col gap-1
```

#### Nav link
```
px-3 py-2 rounded text-sm text-zinc-300 hover:bg-zinc-800
```

#### Main content area
```
ml-48 flex-1 p-8 overflow-x-hidden
```

---

### Detail Layout (`app/(detail)/layout.tsx`)

#### Outer wrapper
```
min-h-screen bg-zinc-950 text-white
```

#### Header bar
```
fixed top-0 left-0 right-0 z-50 p-4
```

#### Back button
```
text-sm text-white bg-black/40 px-4 py-2 rounded
```

---

### Browse Page (`app/(browse)/page.tsx`)

#### Page wrapper
```
flex flex-col gap-12
```

---

### Browse Loading (`app/(browse)/loading.tsx`)

#### Outer wrapper
```
flex flex-col gap-12
```

#### Row wrapper
```
flex flex-col gap-4
```

#### Genre heading skeleton
```
h-6 w-32 bg-zinc-800 animate-pulse rounded
```

#### Cards row
```
flex gap-4 overflow-x-hidden
```

#### Card skeleton wrapper
```
flex flex-col gap-2 flex-shrink-0 w-36
```

#### Cover skeleton
```
h-52 w-36 bg-zinc-800 animate-pulse rounded
```

#### Title skeleton
```
h-4 w-28 rounded bg-zinc-800 animate-pulse
```

#### Author skeleton
```
h-3 w-20 rounded bg-zinc-800 animate-pulse
```

---

### Book Detail Page (`app/(detail)/books/[id]/page.tsx`)

#### Hero section
```
relative h-80 flex items-end
```

#### Background image container
```
absolute inset-0 bg-cover bg-center
```

#### Overlay
```
absolute inset-0 bg-zinc-950/70
```

#### No-cover fallback background
```
absolute inset-0 bg-zinc-900
```

#### Hero content block
```
relative z-10 flex gap-8 items-end p-8 w-full
```

#### Cover image
```
rounded flex-shrink-0 object-cover
```

#### Text block
```
flex flex-col gap-3
```

#### Title
```
text-4xl font-bold
```

#### Author name
```
text-lg text-zinc-300
```

#### Button row
```
flex gap-3
```

#### Read button (placeholder)
```
px-4 py-2 rounded bg-zinc-800 text-white
```

#### Body content area
```
px-8 py-8 flex flex-col gap-8
```

#### Section heading
```
text-xl font-semibold mb-3
```

#### Description text
```
text-zinc-300
```

#### Subjects tag container
```
flex flex-wrap gap-2
```

#### Subject tag
```
text-xs px-3 py-1 rounded bg-zinc-800 text-zinc-300
```

---

### Book Detail Loading (`app/(detail)/books/[id]/loading.tsx`)

#### Spinner wrapper
```
flex min-h-screen items-center justify-center
```

#### Spinner
```
h-10 w-10 rounded-full border-4 border-zinc-700 border-t-white animate-spin
```

---

### Book Card (`components/book-card.tsx`)

#### Link wrapper
```
flex flex-col gap-2 flex-shrink-0 w-36
```

#### Cover container
```
relative h-52 w-36 rounded overflow-hidden bg-zinc-800
```

#### Cover image
```
object-cover
```

#### No-cover fallback
```
h-full w-full flex items-center justify-center text-zinc-500 text-xs
```

#### Book title
```
text-sm font-medium text-white line-clamp-2
```

#### Author name
```
text-xs text-zinc-400
```

---

### Book Row (`components/book-row.tsx`)

#### Section wrapper
```
flex flex-col gap-4 min-w-0
```

#### Genre heading
```
text-xl font-bold
```

#### Horizontal scroll row
```
flex gap-4 overflow-x-auto pb-4 scroll-row
```

---

### Save to Reading List Button (`components/save-to-reading-list-button.tsx`)

#### Button — not saved (gray)
```
px-4 py-2 rounded text-sm font-medium bg-zinc-700 text-white
```

#### Button — saved (green)
```
px-4 py-2 rounded text-sm font-medium bg-emerald-500 text-white
```

#### Button — pending (disabled)
Adds to whichever state class above:
```
opacity-50
```

---

### Reading List Page (`app/(browse)/reading-list/page.tsx`)

#### Page wrapper
```
flex flex-col gap-8
```

#### Page heading
```
text-3xl font-bold
```

#### Empty state message
```
text-zinc-400
```

#### Books list
```
flex flex-col gap-4
```

#### List item card
```
flex gap-4 bg-zinc-900 rounded p-4 items-start
```

#### Cover thumbnail
```
rounded object-cover flex-shrink-0
```

#### Cover placeholder (no image)
```
w-20 h-28 bg-zinc-800 rounded flex-shrink-0
```

#### Text + actions block
```
flex flex-col gap-3 flex-1
```

#### Book title
```
text-lg font-semibold
```

#### Author name
```
text-sm text-zinc-400
```

#### Note form
```
flex flex-col gap-2
```

#### Note textarea
```
w-full rounded bg-zinc-800 border border-zinc-700 text-sm text-white px-3 py-2
```

#### Save note button
```
text-sm px-3 py-1 rounded bg-zinc-700 text-white hover:bg-zinc-600
```

#### Remove button
```
text-sm px-3 py-1 rounded text-red-400 hover:bg-zinc-800
```