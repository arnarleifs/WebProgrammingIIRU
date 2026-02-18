# Hungry Hippo

## Helpers

### UI Components
`Button`

```tsx
const baseStyles =
  "rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  outline: "border border-gray-200 text-gray-700 hover:bg-gray-50",
};

const sizes = {
  small: "px-3 py-1.5 text-sm",
  medium: "px-4 py-2",
  large: "px-6 py-3 text-lg",
};
```

`IconToggle`

```tsx
const onColor = "text-red-500"
const offColor = "text-gray-400"

// Button class Tailwind
"p-2 rounded-full hover:bg-gray-100 transition-colors"
```

`Icon`

```tsx
const ICON_PATHS = {
  heart:
    "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  star: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
  plus: "M12 4.5v15m7.5-7.5h-15",
  minus: "M19.5 12h-15",
} as const;

const sizeClasses = {
  small: "w-4 h-4",
  medium: "w-6 h-6",
  large: "w-8 h-8",
};

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className={/* To be filled */}
>
  <path strokeLinecap="round" strokeLinejoin="round" d={/* To be filled */} />
</svg>
```

### Components
`RestaurantDetails`

```tsx
"max-w-2xl mx-auto bg-white min-h-screen pb-24" // Container CSS
```

`Header`

```tsx
// Outer Container (Sticky)
`p-4 bg-white shadow-sm sticky top-0 z-10`

// Flex Row (Name vs Heart)
`flex justify-between items-start`

// Restaurant Name
`text-2xl font-bold text-gray-900`

// Meta Row (Rating/Categories)
`flex items-center gap-2 mt-1 text-sm text-gray-600`

// Rating Badge (Gray Box)
`flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded`
```

`CategoryFilter`

```tsx
// Container
"flex gap-3 p-4 overflow-x-auto border-b bg-white sticky top-[80px] z-10"
```

`MenuList`

```tsx
// Main Container (Spacing between Title and Grid)
"p-4 space-y-6"

// Section Title
"text-xl font-bold"

// Grid Layout for Items
"grid gap-6"
```

`MenuItem`

```tsx
// Card Container (Flex Row + Shadow)
`flex gap-4 border border-gray-100 p-4 rounded-xl shadow-sm bg-white`

// Left Column (Text Content takes available space)
`flex-1`

// Item Title
`font-bold text-lg`

// Description (Truncated to 2 lines)
`text-gray-500 text-sm mt-1 line-clamp-2`

// Price
`mt-3 font-medium`

// Right Column (Image & Button)
`flex flex-col items-end justify-between gap-4`

// Product Image
`w-28 h-24 object-contain rounded-lg bg-white`

// Counter Container (Gray Bubble)
`flex items-center gap-2 bg-gray-100 rounded-lg p-1`

// Quantity Text
`font-bold text-sm w-4 text-center`

```

`CartFooter`

```tsx
// Fixed Bottom Bar
`fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-2xl z-20`

// Inner Layout (Space Between)
`max-w-2xl mx-auto flex items-center justify-between`

// Left Column (Count + Price)
`flex flex-col`

// Price Row
`flex items-center gap-2`

// Count Badge (Black Pill)
`bg-black text-white text-xs font-bold px-2 py-0.5 rounded-full`

// Price Text
`font-bold text-lg`

// Tax Note
`text-gray-500 text-xs`
```