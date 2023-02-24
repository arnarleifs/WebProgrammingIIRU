import './styles.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const NavigationLink = ({
  title,
  href
}) => (
  <li className="navigation-link">
    <Link to={href}>{title}</Link>
  </li>
);

NavigationLink.propTypes = {
  // The title of the navigation link
  title: PropTypes.string.isRequired,
  // The URL of the navigation link
  href: PropTypes.string.isRequired
};