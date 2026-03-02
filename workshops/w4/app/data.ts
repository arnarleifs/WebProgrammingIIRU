export interface DocArticle {
  slug: string;
  title: string;
  content: string;
}

export const DOCS: DocArticle[] = [
  {
    slug: "intro",
    title: "Introduction",
    content: "Welcome to the Wiki! This project demonstrates Next.js Routing.",
  },
  {
    slug: "installation",
    title: "Installation",
    content: 'To install the project, run "npx create-next-app@latest".',
  },
  {
    slug: "routing",
    title: "Routing",
    content: "Next.js uses a file-system based router. Folders become routes.",
  },
];

export function getDoc(slug: string): DocArticle | undefined {
  return DOCS.find((doc) => doc.slug === slug);
}
