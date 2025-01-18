export default function Home() {
  return (
    <div className="flex flex-col justify-between p-8 overflow-hidden">
      <main className="flex-grow flex items-center justify-center">
        <section className="flex w-full max-w-4xl">
          <div className="flex-1 pr-8 text-right">
            <h1 className="text-5xl font-bold mb-4">JOSE IRENEO TOLENTINO</h1>
            <h2 className="text-xl font-semibold mb-8">
              Software Engineer
            </h2>
          </div>
          <div className="border-l mx-2" style={{ borderColor: 'var(--foreground)' }}></div>
          <div className="flex-1 pl-8 text-left">
            <p className="mb-4">
              I am a versatile professional with a unique blend of experience in software development, operations, and engineering design. Currently, I specialize in developing and maintaining scalable software solutions across diverse domains, with a strong focus on production reliability, CI/CD automation, and system health monitoring.
            </p>
            <p className="mb-4">
              Previously, I worked as a structural design engineer, where I developed expertise in parametric design, design automation, and citizen development. This experience cultivated my passion for creating efficient, automated solutions and sparked my transition into software development.
            </p>
            <p className="mb-4">
              My diverse background allows me to bridge the gap between engineering and software, delivering innovative solutions that enhance system performance and user experience. I am driven by curiosity, problem-solving, and a commitment to continuous improvement.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}