export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-24 px-6">
      <h1 className="text-3xl font-bold mb-6">About the Project</h1>

      <p className="text-gray-600 text-lg leading-relaxed">
        This wiki was built to demonstrate the power of
        <strong className="text-black font-semibold"> Route Groups </strong>
        and
        <strong className="text-black font-semibold"> Nested Layouts </strong>.
        Notice how this page shares the same URL structure as the home page, but
        looks completely different from the documentation.
      </p>
    </div>
  );
}
