import { useState, useEffect } from 'react';
import './ThemeToggleButton.css';

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="fixed bottom-4 left-4">
      <label className="switch">
        <input
          type="checkbox"
          className="checkbox"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}