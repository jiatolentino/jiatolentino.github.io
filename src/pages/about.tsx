import Header from "@/components/Header";
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex h-full p-4">
      <Header />
      <div className="border-l mx-2" style={{ borderColor: 'var(--foreground)' }}></div>
      <main className="relative w-5/6 pl-4 overflow-auto custom-scrollbar font-thin mb-4 leading-snug tracking-tighter" style={{ borderColor: 'var(--foreground)' }}>
        <Image
          src="/portrait.jpg" // Replace with your image path
          alt="Description of image"
          width={300} // Adjust width as needed
          height={300} // Adjust height as needed
          className="mb-4 border" // Add any additional classes as needed
        />
        <p className="mb-4 text-justify leading-snug tracking-tighter w-4/6">
          I am a versatile professional with a unique blend of experience in software development, operations, and engineering design. Currently, I specialize in developing and maintaining scalable software solutions across diverse domains, with a strong focus on production reliability, CI/CD automation, and system health monitoring.
          <br/>
          <br/>
          Previously, I worked as a structural design engineer, where I developed expertise in parametric design, design automation, and citizen development. This experience cultivated my passion for creating efficient, automated solutions and sparked my transition into software development.
          <br/>
          <br/>
          My diverse background allows me to bridge the gap between engineering and software, delivering innovative solutions that enhance system performance and user experience. I am driven by curiosity, problem-solving, and a commitment to continuous improvement.
        </p>
      </main>
    </div>
  );
}