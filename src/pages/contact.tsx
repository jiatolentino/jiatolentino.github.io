import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="flex h-full p-4">
      <Header />
      <div className="border-l mx-2" style={{ borderColor: 'var(--foreground)' }}></div>
      <main className="relative w-5/6 pl-4 overflow-auto custom-scrollbar font-thin mb-4 leading-snug tracking-tighter" style={{ borderColor: 'var(--foreground)' }}>
        <div className="absolute bottom-0 right-0 text-right">  
          <p className="">
              Feel free to reach out via email at <em>jiatolentino.dev@gmail.com</em>.
          </p>
          <a href="https://www.linkedin.com/in/jia-tolentino" target="_blank" rel="noopener noreferrer" className="text-white-800 hover:text-blue-500 transition-colors duration-300 mr-2">
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