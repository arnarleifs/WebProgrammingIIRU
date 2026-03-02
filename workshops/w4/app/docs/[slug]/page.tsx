import { getDoc } from "../../data";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDoc(slug);

  if (!doc) {
    return <div className="text-red-500">404 - Article not found</div>;
  }

  return (
    <article>
      <nav className="text-sm text-gray-500 mb-6 uppercase tracking-wide font-semibold">
        Docs <span className="mx-2 text-gray-300">&gt;</span>
        <span className="text-blue-600">{slug}</span>
      </nav>

      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Article: {doc.title}
      </h1>

      <div className="prose prose-lg text-gray-600 max-w-none">
        <p>{doc.content}</p>
      </div>
    </article>
  );
}
