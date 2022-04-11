import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from '../../features/home/HomePage';
import LoginPage from '../../features/login/LoginPage';
import NavBar from './NavBar';


function App() {
  return (
    <>
      <Route exact path="/" component={LoginPage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <HomePage />
          </>
        )}
      />
    </>
  );
}

export default App;
