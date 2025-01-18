import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen pt-24 p-8 pb-20">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-4 text-center">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-700"
          />
          <h1 className="text-5xl font-bold">JIA TOLENTINO</h1>
          <h2 className="text-2xl font-semibold text-gray-400">
            Software Engineer | Structural Engineer
          </h2>
          <p className="max-w-2xl mt-4 text-lg">
            I am a versatile professional with a unique blend of experience in software development, operations, and engineering design. Currently, I specialize in developing and maintaining scalable software solutions across diverse domains, with a strong focus on production reliability, CI/CD automation, and system health monitoring.
            Previously, I worked as a structural design engineer, where I developed expertise in parametric design, design automation, and citizen development. This experience cultivated my passion for creating efficient, automated solutions and sparked my transition into software development.
            My diverse background allows me to bridge the gap between engineering and software, delivering innovative solutions that enhance system performance and user experience. I am driven by curiosity, problem-solving, and a commitment to continuous improvement.
          </p>
        </section>
      </main>
    </div>
  );
}