import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent z-50" style={{ color: 'var(--text-color)' }}>
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="Logo"
            width={32}
            height={32}
            className="mr-2"
          />
        </Link>
        <Link href="/">
          <span className="text-sm">jiatolentino</span>
        </Link>       
      </div>
      <div className="flex gap-4">
        <Link href="/" className={`text-sm hover:text-gray-400 transition-colors duration-300 ${isActive("/") ? "active" : ""}`}>
          Home
        </Link>
        <Link href="/about" className={`text-sm hover:text-gray-400 transition-colors duration-300 ${isActive("/about") ? "active" : ""}`}>
          About
        </Link>
        <Link href="/projects" className={`text-sm hover:text-gray-400 transition-colors duration-300 ${isActive("/projects") ? "active" : ""}`}>
          Projects
        </Link>
        <Link href="/contact" className={`text-sm hover:text-gray-400 transition-colors duration-300 ${isActive("/contact") ? "active" : ""}`}>
          Contact
        </Link>
      </div>
      <style jsx>{`
        .active::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 10px;
          background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 80%);
          pointer-events: none;
        }
      `}</style>
    </nav>
  );
}