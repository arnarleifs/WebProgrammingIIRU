import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { User } from '../User/User';
import { Button } from '@mui/material';
import './footer.css';

export const Footer = () => {
  const context = useContext(UserContext);
  return (
    <footer className="footer">
      <User username={context.username} fullName={context.fullName} />
      <Button variant="outlined" onClick={() => context.updateUser('Mister Miyagi', 'miyagi@j.jp')}>Change user</Button>
    </footer>
  )
};