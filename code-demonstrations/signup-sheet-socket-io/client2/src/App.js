import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './views/Dashboard';
import EventCreate from './views/EventCreate';
import EventDetails from './views/EventDetails';
import Login from './views/Login';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route path="/*" element={<MainLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="events/:eventId" element={<EventDetails />} />
      <Route path="events/create" element={<EventCreate />} />
    </Route>
  </Routes>
);

export default App;