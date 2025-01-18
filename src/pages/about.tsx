import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen pt-24 p-8 pb-20">
      <Navbar />
      <main>
        <section className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-5xl font-bold">
            This page is a work in progress.
          </h1>
          <p className="max-w-2xl mt-4 text-lg">
            Thank you for your understanding.
          </p>
        </section>
      </main>
    </div>
  );
}