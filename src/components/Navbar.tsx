import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-transparent z-50">
      <div className="flex items-center">
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2"
        />
        {/* <span className="text-white text-sm">jiatolentino</span> */}
      </div>
      <div className="flex gap-4">
        <Link href="/" className="text-white text-sm hover:text-gray-400 transition-colors duration-300">Home</Link>
        <Link href="/about" className="text-white text-sm hover:text-gray-400 transition-colors duration-300">About</Link>
        <Link href="/projects" className="text-white text-sm hover:text-gray-400 transition-colors duration-300">Projects</Link>
        <Link href="/contact" className="text-white text-sm hover:text-gray-400 transition-colors duration-300">Contact</Link>
      </div>
    </nav>
  );
}