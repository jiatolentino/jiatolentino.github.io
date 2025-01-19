import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeToggleButton from '../components/ThemeToggleButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      const content = document.querySelector('.content');
      if (content) {
        content.classList.remove('fade-in');
        void (content as HTMLElement).offsetWidth;
        content.classList.add('fade-in');
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Jia Tolentino</title>
      </Head>
      <Navbar />
      <div className="fixed top-16 bottom-16 left-8 right-8 p-4 border custom-scrollbar" style={{ borderColor: 'var(--foreground)' }}>
        <Component {...pageProps} />
      </div>
      <Footer />
      <ThemeToggleButton />
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

export default MyApp;