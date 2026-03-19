import { Queue } from "@/components/queue";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl mb-5">The Live Queue!</h1>
      <Queue />
    </div>
  );
}
