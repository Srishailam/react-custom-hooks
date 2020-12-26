import logo from './logo.svg';
import './App.css';
import ExampleTimerFiveSeconds from './components/useTimeout';
import MoneyCount from './components/usePrevious';
import HitBox from './components/useClickInside';
import HitOutsideBox from './components/useClickOutside';
import FetchPerson from './components/useFetch';
import ResourceCounter from './components/useInterval';

function App() {
  return (
    <div className="App">
      <FetchPerson />
      <ResourceCounter />
      <ExampleTimerFiveSeconds />
      <MoneyCount />
      <HitBox onClickInside={()=> window.alert('Hit the box')}/>
      <HitOutsideBox onClickInside={(e)=> window.alert('Hit outside the box')}/>
    </div>
  );
}

export default App;
