import './styles.css';

export const NavigationLink = ({
  title,
  href
}) => (
  <li className="navigation-link">
    <a href={href}>{title}</a>
  </li>
);