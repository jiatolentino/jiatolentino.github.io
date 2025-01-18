import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import quotes from '@/data/quotes';

export default function Home() {
  const [randomQuote, setRandomQuote] = useState({ quote: "", author: "" });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="flex h-full p-4">
      <Header />
      <div className="border-l mx-2" style={{ borderColor: 'var(--foreground)' }}></div>
      <main className="relative w-5/6 pl-4 overflow-auto custom-scrollbar font-thin mb-4 leading-snug tracking-tighter" style={{ borderColor: 'var(--foreground)' }}>
        <p className="absolute bottom-0 right-0 text-right">
          "{randomQuote.quote}" <br/>- {randomQuote.author}  
        </p>
      </main>
    </div>
  );
}