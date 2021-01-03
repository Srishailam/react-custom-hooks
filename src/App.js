import logo from './logo.svg';
import './App.css';
import ExampleTimerFiveSeconds from './components/useTimeout';
import MoneyCount from './components/usePrevious';
import HitBox from './components/useClickInside';
import HitOutsideBox from './components/useClickOutside';
import FetchPerson from './components/useFetch';
import ResourceCounter from './components/useInterval';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <div className="parent">
        <LoginForm />
        <LoginForm />
      {/* <FetchPerson />
      <ResourceCounter />
      <ExampleTimerFiveSeconds />
      <MoneyCount />
      <HitBox onClickInside={()=> window.alert('Hit the box')}/>
      <HitOutsideBox onClickInside={(e)=> window.alert('Hit outside the box')}/>
        <div className="child1">
          
        </div>
        <div className="child2">

        </div>
        <div className="child3">

        </div> */}
        {/* <div className="row">
          <div className="smallbox">1</div>
          <div className="smallbox">2</div>
          <div className="smallbox">3</div>
          <div className="smallbox">4</div>
          <div className="smallbox">5</div>
        </div>
        <div className="row">
          <div className="row_column">
            <div className="row_column_row">
              <div className="bigbox">10</div>
              <div className="bigbox">11</div>
            </div>
            <div className="row_column_row">
              <div className="bigbox">12</div>
              <div className="bigbox">13</div>
            </div>
          </div>
          <div className="row_column">
            <div className="smallbox">6</div>
            <div className="smallbox">7</div>
            <div className="smallbox">8</div>
            <div className="smallbox">9</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
