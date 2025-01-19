import { useEffect, useState } from 'react';
import Header from "@/components/Header";
import CityScene from '@/components/CityScene';
import quotes from '@/data/quotes';

export default function Test() {
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
        <CityScene />
      </main>
    </div>
  );
}