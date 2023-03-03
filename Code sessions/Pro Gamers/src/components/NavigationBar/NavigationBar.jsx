import './styles.css';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { User } from '../User/User';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export const NavigationBar = () => {
  const context = useContext(UserContext);
  return (
    <nav className="navigation-bar">
      <ul className="navigation-links">
        <NavigationLink title="News" href="/news" />
        <NavigationLink title="Top 10 Games" href="/top-games" />
        <NavigationLink title="About" href="/about" />
        <NavigationLink title="Subscribe now" href="/subscribe" />
      </ul>
      <User username={context.username} fullName={context.fullName} />
    </nav>
  );
}