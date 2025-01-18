export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="fixed bottom-0 right-0 p-4 bg-transparent text-white text-sm"
        style={{ color: 'var(--text-color)' }}>
        &copy; {currentYear} jiatolentino
      </footer>
    );
  }