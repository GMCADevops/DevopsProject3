import React, {useMemo, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//import { render } from '@testing-library/react';
import LandingPage from './pages';
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage';
import MoviePage from './pages/MoviePage';
import RegistrationPage from './pages/RegistrationPage';
import NavBar from "./components/NavigationBar";
import Footer from './components/Footer';
import { Container } from 'semantic-ui-react';
import ProfilePage from './pages/ProfilePage';
import { UserContext } from './components/userContext';


function App()  {

  const [user, setUser] = useState(null)
  const value = useMemo(() => ({user, setUser}), {user, setUser})

    return (
      <Router>
    <div className="whole-page">
    <Container>
    <UserContext.Provider value={{user, setUser}}>
    <NavBar/>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/register" component={RegistrationPage}/>
            <Route exact path="/profile" component={ProfilePage}/>
            <Route exact path="/movies" component={MoviePage}/>
            <Route exact path="/404" Component={NotFoundPage}/>
            <Redirect to="/404"/>
        </Switch>
        </UserContext.Provider>
      <Footer/>
    </Container>
    </div>
    </Router>
    );
}

export default App;
