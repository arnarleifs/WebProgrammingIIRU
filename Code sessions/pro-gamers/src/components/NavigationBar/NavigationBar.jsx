import './styles.css';
import { NavigationLink } from '../NavigationLink/NavigationLink';

export const NavigationBar = () => (
  <nav className="navigation-bar">
    <ul className="navigation-links">
      <NavigationLink title="News" href="/" />
      <NavigationLink title="Top 10 Games" href="/top-games" />
      <NavigationLink title="About" href="/about" />
    </ul>
  </nav>
);