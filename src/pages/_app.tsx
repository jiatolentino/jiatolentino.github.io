import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeToggleButton from '../components/ThemeToggleButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jia Tolentino</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className="fixed top-16 bottom-16 left-8 right-8 p-4 border overflow-auto custom-scrollbar" style={{ borderColor: 'var(--foreground)' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
      <ThemeToggleButton />
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </>
  );
}

export default MyApp;