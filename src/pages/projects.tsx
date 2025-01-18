import Header from "@/components/Header";

export default function Projects() {
  return (
    <div className="flex h-full p-4">
      <Header />
      <div className="border-l mx-2" style={{ borderColor: 'var(--foreground)' }}></div>
      <main className="relative w-5/6 pl-4 overflow-auto custom-scrollbar font-thin mb-4 leading-snug tracking-tighter" style={{ borderColor: 'var(--foreground)' }}>
        <h1 className="text-5xl font-bold">
          This page is a work in progress.
        </h1>
        <p className="max-w-2xl mt-4 text-lg">
          Thank you for your understanding.
        </p>
      </main>
    </div>
  );
}