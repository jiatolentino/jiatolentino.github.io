import Navbar from "../components/Navbar";

export default function Test() {
  return (
    <div className="min-h-screen p-8 pb-20">
      <Navbar />
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Test Page</h1>
        <p className="text-center max-w-xl">
          This is a test page to demonstrate the Navbar component.
        </p>
      </main>
    </div>
  );
}