import MainWrapper from './Main';
import Routes from 'routes';

const App = () => {
  document.title = 'Hoang Shop';
  return (
    <MainWrapper>
      <Routes />
    </MainWrapper>
  );
};

export default App;
