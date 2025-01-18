import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 p-8 pb-20">
      <Navbar />
      <main className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <p className="text-center max-w-xl">
          Feel free to reach out to me via email at jiatolentino.dev@gmail.com.
        </p>
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/in/jia-tolentino" target="_blank" rel="noopener noreferrer" className="text-white-800 hover:text-blue-500 transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/jiatolentino" target="_blank" rel="noopener noreferrer" className="text-white-800 hover:text-gray-500 transition-colors duration-300">
            GitHub
          </a>
        </div>
      </main>
    </div>
  );
}