import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import LoginPage from '../../features/login/LoginPage';
import ModalDialog from '../common/modal/ModalDialog';
import { useStore } from '../stores/store';
import LoadingComponent from './LoadingComponent';
import NavBar from './NavBar';

function App() {
  const { employeeStore } = useStore();

  useEffect(() => {
    employeeStore.loadEmployees();
  }, [employeeStore])

  if (employeeStore.loadingInitial) return <LoadingComponent content='Loading app' />

  return (
    <>
      <ModalDialog />
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

export default observer(App);
