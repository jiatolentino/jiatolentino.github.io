import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
// import ThemeToggleButton from '../components/ThemeToggleButton';
import Navbar from '@/components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    {/* <ThemeToggleButton />     */}
    </>
  )
}

export default MyApp;