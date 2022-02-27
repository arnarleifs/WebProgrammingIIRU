import React, { useState } from 'react';
import { Switch, Route, Navigate } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Container from './components/Container';
import News from './components/News';
import NewsItemDetails from './components/NewsItemDetails';
import TopGames from './components/TopGames';
import About from './components/About';
import SignupForm from './components/SignupForm';
import NotFound from './components/NotFound';
import { UserProvider } from './context/userContext';
import { ThemeProvider } from './context/themeContext';

const App = () => {
  const [user, setUser] = useState({
    username: 'arnarl',
    fullName: 'Arnar Leifsson'
  });
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeProvider value={{
      theme,
      toggleTheme: setTheme(theme => theme === 'dark' ? 'light' : 'dark')
    }}>
      <UserProvider value={{
        user,
        changeUser: user => setUser(user)
      }}>
        <div className="App">
          <NavigationBar />
          <Container>
            <Switch>
              <Route exact path="/" component={ News } />
              <Route exact path="/news" render={ () => <Redirect to="/" /> } />
              <Route exact path="/topgames" component={ TopGames } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/signup" component={ SignupForm } />
              <Route exact path="/:newsItemId" component={ NewsItemDetails } />
              <Route path="*" component={ NotFound } />
            </Switch>
          </Container>
          <Footer />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
